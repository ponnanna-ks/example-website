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

const Content = styled.div`
  margin: 20px;
  font-size: 1em;
  color: #2c3e50;
  line-height: 1.6;
`;

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Subtitle>Learn more about Ayatana Coorg.</Subtitle>
      <Content>
        <p>Ayatana Coorg is a luxury resort nestled in the heart of Coorg, offering a serene escape from the hustle and bustle of city life. Our resort features beautiful cottages, a variety of activities, and top-notch amenities to ensure a comfortable and memorable stay.</p>
        <p>We are committed to providing our guests with an exceptional experience, blending modern luxury with the natural beauty of Coorg. Whether you're looking for a relaxing retreat or an adventurous getaway, Ayatana Coorg has something for everyone.</p>
      </Content>
    </Container>
  );
};

export default About;
