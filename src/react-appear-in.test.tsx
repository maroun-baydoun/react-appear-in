import React from "react";
import ReactTestRenderer from "react-test-renderer";

import AppearIn, { AppearInProps } from "./react-appear-in";

describe("<AppearIn/>", () => {
  const { act } = ReactTestRenderer;

  beforeEach(() => {
    jest.useFakeTimers();
  });

  const element = (props?: AppearInProps) => (
    <AppearIn {...props}>
      <div>Hello World</div>
    </AppearIn>
  );

  const render = (props?: AppearInProps) =>
    ReactTestRenderer.create(element(props));

  it("Renders children immediately when no props are provided", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render();
    });

    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(rendered!.root.children.length).toBe(1);
  });

  it("Renders children after the specified milliseconds have ellapsed", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ milliseconds: 100 });
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered!.root.children.length).toBe(0);

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(rendered!.root.children.length).toBe(1);
  });

  it("Renders children after the specified seconds have ellapsed", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ seconds: 5 });
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered!.root.children.length).toBe(0);

    act(() => {
      jest.advanceTimersByTime(5 * 1000);
    });

    expect(rendered!.root.children.length).toBe(1);
  });

  it("Renders children after the specified minutes have ellapsed", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ minutes: 1 });
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered!.root.children.length).toBe(0);

    act(() => {
      jest.advanceTimersByTime(60 * 1000);
    });

    expect(rendered!.root.children.length).toBe(1);
  });

  it("Renders children after the specified minutes, seconds and milliseconds have ellapsed", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ minutes: 1, seconds: 25, milliseconds: 10 });
    });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered!.root.children.length).toBe(0);

    act(() => {
      jest.advanceTimersByTime((60 + 25) * 1000 + 10);
    });

    expect(rendered!.root.children.length).toBe(1);
  });

  it("Clears timeout on unmount", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ seconds: 5 });
    });

    act(() => {
      rendered!.unmount();
    });

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  it("Doesn't clear timeout on unmount when children appear immediately", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render();
    });

    act(() => {
      rendered!.unmount();
    });

    expect(clearTimeout).toHaveBeenCalledTimes(0);
  });

  it("Clears timeout on time change", () => {
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ seconds: 5 });
    });

    act(() => {
      rendered!.update(element({ seconds: 10 }));
    });

    expect(clearTimeout).toHaveBeenCalledTimes(1);
  });

  it("Calls onAppear prop with time argument when children are rendered", () => {
    const onAppear = jest.fn();

    act(() => {
      render({ onAppear, seconds: 25 });
    });

    act(() => {
      jest.advanceTimersByTime(25 * 1000);
    });

    expect(onAppear).toHaveBeenCalledTimes(1);
    expect(onAppear).toHaveBeenCalledWith(25 * 1000);
  });

  it("Calls onAppear prop with time argument when children are rendered after time change", () => {
    const onAppear = jest.fn();
    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ onAppear, seconds: 25 });
    });

    act(() => {
      rendered!.update(element({onAppear, seconds: 10 }));
    });

    act(() => {
      jest.advanceTimersByTime(10 * 1000);
    });

    expect(onAppear).toHaveBeenCalledTimes(1);
    expect(onAppear).toHaveBeenCalledWith(10 * 1000);
  });

  it("Calls onAppear prop with time argument when children are rendered immediately", () => {
    const onAppear = jest.fn();

    act(() => {
      render({ onAppear });
    });

    expect(onAppear).toHaveBeenCalledTimes(1);
    expect(onAppear).toHaveBeenCalledWith(0);
  });

  it("Renders provided placeholder before children become visible", () => {
    const PlaceHolderMessage = ({ time }: { time: number }) => (
      <div>{`Will render in ${time}ms`}</div>
    );
    const placeholder = (time: number) => <PlaceHolderMessage time={time} />;

    let rendered: ReactTestRenderer.ReactTestRenderer | null = null;

    act(() => {
      rendered = render({ placeholder, milliseconds: 100 });
    });

    rendered!.root.findByType(PlaceHolderMessage);
    act(() => {
      jest.advanceTimersByTime(100);
    });

    try {
      rendered!.root.findByType(PlaceHolderMessage);
      throw new Error('Instance found with node type: "PlaceHolderMessage"');
    } catch (e) {
      expect(e.message).toBe(
        'No instances found with node type: "PlaceHolderMessage"'
      );
    }
  });
});
