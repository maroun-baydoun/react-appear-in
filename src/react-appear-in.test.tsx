
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import AppearIn, { AppearInProps } from './react-appear-in';

describe('<AppearIn/>', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  const render = (props?: AppearInProps) => {
    const element = (
      <AppearIn {...props}>
        <div>Hello World</div>
      </AppearIn>);

    return ReactTestRenderer.create(element);
  };

  it('Renders children immediately when no props are provided', () => {
    const rendered = render();

    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(rendered.root.children.length).toBe(1);
  });

  it('Renders children after the specified milliseconds have ellapsed', () => {
    const rendered = render({ milliseconds: 100 });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered.root.children.length).toBe(0);

    jest.advanceTimersByTime(100);
    expect(rendered.root.children.length).toBe(1);
  });

  it('Renders children after the specified seconds have ellapsed', () => {
    const rendered = render({ seconds: 5 });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered.root.children.length).toBe(0);

    jest.advanceTimersByTime(5 * 1000);
    expect(rendered.root.children.length).toBe(1);
  });

  it('Renders children after the specified minutes have ellapsed', () => {
    const rendered = render({ minutes: 1 });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered.root.children.length).toBe(0);

    jest.advanceTimersByTime(60 * 1000);
    expect(rendered.root.children.length).toBe(1);
  });

  it('Renders children after the specified minutes, seconds and milliseconds have ellapsed', () => {
    const rendered = render({ minutes: 1, seconds: 25, milliseconds: 10 });

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(rendered.root.children.length).toBe(0);

    jest.advanceTimersByTime(((60 + 25) * 1000) + 10);
    expect(rendered.root.children.length).toBe(1);
  });

});
