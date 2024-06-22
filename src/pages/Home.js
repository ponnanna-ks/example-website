import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import homeImage from '../assets/images/homestay.jpg';
import ImageModal from '../components/ImageModal';
import TitleBar from '../components/Title';

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
  justify-content: center;
  margin-top: 20px;
  animation: ${fadeIn} 2s ease-in;
`;

const StyledImage = styled.img`
  width: 80%;
  max-width: 600px;
  height: auto;
  border: 5px solid #bdc3c7;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleImageClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <TitleBar>Welcome to Hermitage Stays</TitleBar>
      <Subtitle>Experience authenticity amidst nature.</Subtitle>
      <ImageContainer>
        <StyledImage src={homeImage} alt="Hermitage Stays" onClick={handleImageClick} />
      </ImageContainer>
      {isModalOpen && <ImageModal src={homeImage} onClose={handleCloseModal} />}
    </Container>
  );
};

export default Home;
