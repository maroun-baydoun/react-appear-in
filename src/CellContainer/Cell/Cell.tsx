import React, { useCallback, useState } from 'react';
import AppearIn from 'react-appear-in';
import styled, { css, keyframes } from 'styled-components';

import { generateRandomTime } from './random';

const Cell = () => {
  const [{ minutes, seconds, milliseconds }] = useState({ ...generateRandomTime() });

  const placeholder = useCallback(
    (time: number) => (
    <StyledCellPlaceholder time={time} />
  ),
    [],
  );

  return (
    <StyledContainer>
      <AppearIn
        minutes={minutes}
        seconds={seconds}
        milliseconds={milliseconds}
        placeholder={placeholder}
      >
        <StyledCellContent>
          <div>I appeared after</div>
          <TimeContainer>{minutes}m. {seconds}s. {milliseconds}ms.</TimeContainer>
        </StyledCellContent>
      </AppearIn>
    </StyledContainer>
  );
};

const grow = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;

const StyledCellPlaceholder = styled('div')<{time: number}>`
  animation: ${ props => css`${grow} ${props.time}ms linear;`}
  background-color: #efefef;
  border-radius: 10px;
  display: flex;
  flex-grow: 1;
`;

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
