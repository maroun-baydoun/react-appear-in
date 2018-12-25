import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import CellContainer from '../CellContainer';

describe('<CellContainer/>', () => {
  it('renders component', () => {
    const renderedComponent = ReactTestRenderer.create(<CellContainer/>);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
