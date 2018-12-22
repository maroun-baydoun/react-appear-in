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
          I appeared after {minutes}m. {seconds}s. {milliseconds}ms.
        </AppearIn>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled('div')`
  background-color: darkgrey;
  color: #efefef;
  width: 150px;
  height: 100px;
  margin: 5px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Cell;
