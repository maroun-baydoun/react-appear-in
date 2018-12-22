import React, { Component } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import Cell from '../Cell';

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
            <CellContainer>
            <GlobalStyle/>
            {[...Array(100)].map((_, i)  => <Cell key={i}/>)}
          </CellContainer>
        </ThemeProvider>

    );
  }
}

const CellContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: grey;
`;

export default App;
