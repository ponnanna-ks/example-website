import React from 'react';
import styled, { keyframes } from 'styled-components';
import homestay from "../assets/images/homestay.jpg"
import homestay2 from '../assets/images/homestay2.jpg';
import nature1 from '../assets/images/nature1.jpg';
import nature2 from '../assets/images/nature2.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-300%); }
`;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} ease-in;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #2c3e50;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #34495e;
`;

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
  position: relative;
  margin-top: 20px
`;

const CarouselInner = styled.div`
  display: flex;
  animation: ${slide} 10s infinite linear;
`;

const ImageItem = styled.div`
  min-width: 33.33%;
  box-sizing: border-box;
  padding: 0 10px;
  transition: transform 0.3s;
  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Activities = () => {
  const images = [
    homestay,
    homestay2,
    nature1,
    nature2,
    homestay,
    homestay2,
    nature1,
    nature2
  ];

  return (
    <Container>
      <Title>Activities</Title>
      <Subtitle>Enjoy a variety of activities during your stay.</Subtitle>
      <CarouselContainer>
        <CarouselInner>
          {images.map((src, index) => (
            <ImageItem key={index}>
              <img src={src} alt={`Activity ${index + 1}`} />
            </ImageItem>
          ))}
        </CarouselInner>
      </CarouselContainer>
    </Container>
  );
};

export default Activities;
