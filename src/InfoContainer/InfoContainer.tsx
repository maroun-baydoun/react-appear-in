import React from 'react';
import styled from 'styled-components';

const InfoContainer = () => (
    <StyledContainer>
        <H1>React Appear In</H1>
        <H2>Make react components appear sometime in the future</H2>
        <Content>
            <Ol>
                <li>
                    Install
                    <Code>npm install react-appear-in</Code>
                </li>
                <li>
                    Use
                    <Code>{
                        `import AppearIn from 'react-appear-in';


const MyAwesomeComponent = () => (
    <AppearIn minutes={1} seconds={20} milliseconds={10}>
        Hello in 1 minute, 20 seconds and 10 milliseconds
    </AppearIn>
);
                        `
                    }
                    </Code>
                </li>
            </Ol>
        </Content>
    </StyledContainer>
);

const StyledContainer = styled('article')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 50%;
  min-height: 50%;
  background-color: #333;
  color: #efefef;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #333;
`;

const H1 = styled('h1')`
    font-size: 2rem;
    font-family: 'B612', sans-serif;
    margin: 0;
`;

const H2 = styled('h2')`
    font-size: 1rem;
    font-family: 'B612 Mono', monospace;
    margin: 16px 0 0 0;
    color: #aaa;
`;

const Content = styled('section')`
    margin-top: 32px;
    padding: 16px;
`;

const Ol = styled('ol')`
    padding: 0;
    max-width: 70%;
    font-family: 'B612',sans-serif;
`;

const Code = styled('pre')`
    background-color: #aaa;
    color: #000;
    padding: 16px;
    border-radius: 2px;
`;

export default InfoContainer;
