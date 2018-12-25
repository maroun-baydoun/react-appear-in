import React , { Fragment, PureComponent } from 'react';
import styled from 'styled-components';
import Cell from './Cell';

class CellContainer extends PureComponent {

  render() {
    return (
        <StyledContainer>
        {[...Array(100)].map((_, i)  => <Cell key={i}/>)}
        </StyledContainer>
    );
  }
}

const StyledContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: grey;
`;

export default CellContainer;
