import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

import App from './App';

describe('<App/>', () => {
  it('renders component', () => {
    const renderedComponent = ReactTestRenderer.create(<App/>);
    expect(renderedComponent.toJSON()).toMatchSnapshot();
  });
});
