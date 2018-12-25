import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import Cell from '../Cell';

describe('<Cell/>', () => {
  const render = () => ReactTestRenderer.create(<Cell/>);

  it('renders component', () => {
    expect(render().toJSON()).toMatchSnapshot();
  });

  it('sets random state on mount', () => {
    const renderedComponent = render();

    // console.warn(renderedComponent.getInstance().state);
  });
});
