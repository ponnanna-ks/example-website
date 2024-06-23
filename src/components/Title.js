import React from 'react';
import styled, { css, keyframes } from 'styled-components';

const popOutFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(100);
    opacity: 1;
  }
`;
const breathe = keyframes`
  0% { height: 100px; width: 100px; }
  30% { height: 400px; width: 400px; opacity: 1 }
  40% { height: 405px; width: 405px; opacity: 0.3; }
  100% { height: 100px; width: 100px; opacity: 0.6; }
 `

const popOutFromRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F9F6EE;
  padding: 10px 0;
  margin: 20px 0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
   ${({ title, animate }) => title === 'home' && animate && css`
    background-color: transparent;
  `}
`;

const TitleText = styled.h1`
  color: #36454F;
  font-size: 2.5em;
  margin: 0;
  padding: 0 20px;
  text-align: center;
  font-family: 'Playfair Display', serif;
  max-width: 100%;
  
  ${({ animate }) => animate && css`
    animation: ${popOutFromLeft} 1s ease-out;
  `}
   ${({ title, animate }) => title === 'home' && animate && css`
    background-color: transparent;
    color: #FFF;
    animation: ${breathe} 1s ease-out;
    font-size: 5.0em;
  `}
`;

const TitleBar = ({ title, animate, children }) => (
  <TitleWrapper title={title} animate={animate}>
    <TitleText title={title} animate={animate}>{children}</TitleText>
  </TitleWrapper>
);

export default TitleBar;
