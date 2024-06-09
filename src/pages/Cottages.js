import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} 2s ease-in;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #2c3e50;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #34495e;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const ImageItem = styled.div`
  margin: 10px;
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const Cottages = () => {
  const images = [
    "https://source.unsplash.com/random/300x200?house",
    "https://source.unsplash.com/random/300x200?cottage",
    "https://source.unsplash.com/random/300x200?resort"
  ];

  return (
    <Container>
      <Title>Our Cottages</Title>
      <Subtitle>Experience luxury in our beautiful cottages.</Subtitle>
      <ImageContainer>
        {images.map((src, index) => (
          <ImageItem key={index}>
            <img src={src} alt={`Cottage ${index + 1}`} />
          </ImageItem>
        ))}
      </ImageContainer>
    </Container>
  );
};

export default Cottages;
