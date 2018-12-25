import React , { PureComponent } from 'react';
import AppearIn from 'react-appear-in';
import styled from 'styled-components';

import { generateRandomTime } from './random';

type State = {
  minutes: number,
  seconds: number,
  milliseconds: number,
};

class Cell extends PureComponent<{}, State> {
  state = { ...generateRandomTime() };

  render() {
    const { minutes, seconds, milliseconds } = this.state;
    return (
      <StyledContainer>
        <AppearIn minutes={minutes} seconds={seconds} milliseconds={milliseconds}>
          <div>I appeared after</div>
          <TimeContainer>{minutes}m. {seconds}s. {milliseconds}ms.</TimeContainer>
        </AppearIn>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled('div')`
  background-color: darkgrey;
  color: #eee;
  width: 150px;
  height: 100px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const TimeContainer = styled('div')`
  margin-top: 5px;
  color: #fff;
`;

export default Cell;
