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
`;

const TitleBar = ({ title, animate, children }) => (
  <TitleWrapper>
    <TitleText title={title} animate={animate}>{children}</TitleText>
  </TitleWrapper>
);

export default TitleBar;
