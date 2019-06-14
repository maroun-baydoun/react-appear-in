import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const CellContainer = () => (
    <StyledContainer>
      {[...Array(100)].map((_, i) => <Cell key={i} />)}
    </StyledContainer>
  );

const StyledContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: grey;
`;

export default CellContainer;
