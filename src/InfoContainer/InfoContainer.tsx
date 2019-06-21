import React from 'react';
import styled from 'styled-components';

const InfoContainer = () => (
    <StyledContainer>
        <H1>React Appear In</H1>
        <H2>Make react components appear sometime in the future</H2>
        <HeaderLinksContainer>
            <a
                className="github-button"
                href="https://github.com/maroun-baydoun/react-appear-in"
                aria-label="Star maroun-baydoun/react-appear-in on GitHub"
            >
                Star
            </a>
            <a href="https://badge.fury.io/js/react-appear-in">
                <img
                    src="https://badge.fury.io/js/react-appear-in.svg"
                    alt="npm version"
                    height="18"
                />
            </a>
        </HeaderLinksContainer>
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
  z-index: 100;

  @media (max-width: 768px) {
    position: static;
    transform: none;
    min-height: auto;
    width: auto;
    border-radius: 0;
    box-shadow: none;
  }
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

const HeaderLinksContainer = styled('section')`
  margin-top: 16px;
  display: flex;
  align-items: center;

  & > * {
      display: flex;
  }

  & > * + * {
    margin-left: 8px;
   }
`;

const Content = styled('section')`
    margin-top: 16px;
    padding: 16px;
`;

const Ol = styled('ol')`
    padding: 0;
    max-width: 70%;
    font-family: 'B612',sans-serif;

    @media (max-width: 768px) {
        max-width: none;
    }
`;

const Code = styled('pre')`
    background-color: #aaa;
    color: #000;
    padding: 16px;
    border-radius: 2px;
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: justify;
`;

export default InfoContainer;
