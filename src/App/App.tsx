import React, { Component, Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import CellContainer from '../CellContainer';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={{}}>
          <Fragment>
            <GlobalStyle/>
            <CellContainer/>
          </Fragment>
        </ThemeProvider>

    );
  }
}

export default App;
