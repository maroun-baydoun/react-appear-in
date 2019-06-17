import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import CellContainer from '../CellContainer';
import InfoContainer from '../InfoContainer';

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

const App = () => (
  <ThemeProvider theme={{}}>
    <Fragment>
      <GlobalStyle />
      <CellContainer />
      <InfoContainer />
    </Fragment>
  </ThemeProvider>
);

export default App;
