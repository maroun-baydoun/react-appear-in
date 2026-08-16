import { act, cleanup, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import AppearIn, { type AppearInProps } from "react-appear-in";

describe("<AppearIn/>", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    cleanup();
    vi.useRealTimers();
  });

  const element = (
    props?: AppearInProps,
    children: ReactNode = "Hello World",
  ) => (
    <AppearIn {...props}>
      <div>{children}</div>
    </AppearIn>
  );

  it("renders children immediately when no props are provided", () => {
    render(element());

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("renders children after the specified milliseconds have elapsed", () => {
    render(element({ milliseconds: 100 }));

    expect(screen.queryByText("Hello World")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("renders children after the specified seconds have elapsed", () => {
    render(element({ seconds: 5 }));

    expect(screen.queryByText("Hello World")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(5 * 1000);
    });

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("renders children after the specified minutes have elapsed", () => {
    render(element({ minutes: 1 }));

    expect(screen.queryByText("Hello World")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(60 * 1000);
    });

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("renders children after all specified time units have elapsed", () => {
    render(element({ minutes: 1, seconds: 25, milliseconds: 10 }));

    expect(screen.queryByText("Hello World")).toBeNull();

    act(() => {
      vi.advanceTimersByTime((60 + 25) * 1000 + 10);
    });

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("does not render children after unmount", () => {
    const { unmount } = render(element({ seconds: 5 }));

    unmount();
    act(() => {
      vi.advanceTimersByTime(5 * 1000);
    });

    expect(screen.queryByText("Hello World")).toBeNull();
  });

  it("uses the new delay after a time change", () => {
    const { rerender } = render(element({ seconds: 5 }));

    rerender(element({ seconds: 10 }));
    act(() => {
      vi.advanceTimersByTime(5 * 1000);
    });

    expect(screen.queryByText("Hello World")).toBeNull();

    act(() => {
      vi.advanceTimersByTime(5 * 1000);
    });

    expect(screen.getByText("Hello World")).toBeTruthy();
  });

  it("calls onAppear with the time argument when children render", () => {
    const onAppear = vi.fn();

    render(element({ onAppear, seconds: 25 }));
    act(() => {
      vi.advanceTimersByTime(25 * 1000);
    });

    expect(onAppear).toHaveBeenCalledTimes(1);
    expect(onAppear).toHaveBeenCalledWith(25 * 1000);
  });

  it("calls onAppear after a time change", () => {
    const onAppear = vi.fn();
    const { rerender } = render(element({ onAppear, seconds: 25 }));

    rerender(element({ onAppear, seconds: 10 }));
    act(() => {
      vi.advanceTimersByTime(10 * 1000);
    });

    expect(onAppear).toHaveBeenCalledTimes(1);
    expect(onAppear).toHaveBeenCalledWith(10 * 1000);
  });

  it("calls onAppear immediately when no delay is provided", () => {
    const onAppear = vi.fn();

    render(element({ onAppear }));

    expect(onAppear).toHaveBeenCalledTimes(1);
    expect(onAppear).toHaveBeenCalledWith(0);
  });

  it("renders a provided placeholder before children become visible", () => {
    const placeholder = (time: number) => `Will render in ${time}ms`;

    render(element({ placeholder, milliseconds: 100 }));

    expect(screen.getByText("Will render in 100ms")).toBeTruthy();

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(screen.queryByText("Will render in 100ms")).toBeNull();
    expect(screen.getByText("Hello World")).toBeTruthy();
  });
});
