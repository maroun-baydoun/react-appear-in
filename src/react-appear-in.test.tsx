
import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import AppearIn from './react-appear-in';

describe('<AppearIn/>', () => {

  beforeEach(() => {
    jest.useFakeTimers();
  });

  it('Renders children immediately when no props are provided', () => {
    const element = (
      <AppearIn>
        <div>Hello now</div>
      </AppearIn>
    );

    const renderer = ReactTestRenderer.create(element);

    expect(setTimeout).toHaveBeenCalledTimes(0);
    expect(renderer.root.children.length).toBe(1);
  });

  it('Renders children after the specified milliseconds have ellapsed', () => {
    const element = (
      <AppearIn milliseconds={100}>
        <div>Hello in 100ms</div>
      </AppearIn>
    );

    const renderer = ReactTestRenderer.create(element);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(renderer.root.children.length).toBe(0);

    jest.advanceTimersByTime(100);
    expect(renderer.root.children.length).toBe(1);
  });

  it('Renders children after the specified seconds have ellapsed', () => {
    const element = (
      <AppearIn seconds={5}>
        <div>Hello in 5s</div>
      </AppearIn>
    );

    const renderer = ReactTestRenderer.create(element);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(renderer.root.children.length).toBe(0);

    jest.advanceTimersByTime(5 * 1000);
    expect(renderer.root.children.length).toBe(1);
  });

  it('Renders children after the specified minutes have ellapsed', () => {
    const element = (
      <AppearIn minutes={1}>
        <div>Hello in 1m</div>
      </AppearIn>
    );

    const renderer = ReactTestRenderer.create(element);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(renderer.root.children.length).toBe(0);

    jest.advanceTimersByTime(60 * 1000);
    expect(renderer.root.children.length).toBe(1);
  });

  it('Renders children after the specified minutes, seconds and milliseconds have ellapsed', () => {
    const element = (
      <AppearIn minutes={1} seconds={25} milliseconds={10}>
        <div>Hello in 1m 25s 10ms</div>
      </AppearIn>
    );

    const renderer = ReactTestRenderer.create(element);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(renderer.root.children.length).toBe(0);

    jest.advanceTimersByTime(((60 + 25) * 1000) + 10);
    expect(renderer.root.children.length).toBe(1);
  });

});
