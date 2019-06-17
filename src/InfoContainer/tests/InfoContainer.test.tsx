import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import InfoContainer from '../InfoContainer';

describe('<InfoContainer/>', () => {
  it('renders component', () => {
    const renderedComponent = ReactTestRenderer.create(<InfoContainer/>);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
