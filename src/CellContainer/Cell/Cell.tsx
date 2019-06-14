import React, { useState } from 'react';
import AppearIn from 'react-appear-in';
import styled from 'styled-components';

import { generateRandomTime } from './random';

const Cell = () => {
  const [{ minutes, seconds, milliseconds }] = useState({ ...generateRandomTime() });

  return (
    <StyledContainer>
      <AppearIn minutes={minutes} seconds={seconds} milliseconds={milliseconds}>
        <StyledCellContent>
          <div>I appeared after</div>
          <TimeContainer>{minutes}m. {seconds}s. {milliseconds}ms.</TimeContainer>
        </StyledCellContent>
      </AppearIn>
    </StyledContainer>
  );
};

const StyledCellContent = styled('div')`
  background-color: #efefef;
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const StyledContainer = styled('div')`
  background-color: darkgrey;
  color: #ccc;
  width: 150px;
  height: 100px;
  margin: 5px;
  padding: 5px;
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

const TimeContainer = styled('div')`
  margin-top: 5px;
  color: #aaa;
`;

export default Cell;
