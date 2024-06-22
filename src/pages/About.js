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
      <Subtitle>Learn more about Hermitage Stays.</Subtitle>
      <Content>
        <p>Experience Tranquility in the Heart of Coorg
        Nestled amidst the lush greenery of Coorg, The Hermitage offers a serene escape from the hustle and bustle of city life. Our homestay is a haven for nature lovers, adventure seekers, and those in need of a peaceful retreat.</p>
        <p>At The Hermitage, you wake up to the symphony of chirping birds, the fragrance of blooming flowers, and the gentle rustle of leaves. Our beautifully designed homestay blends seamlessly with the surrounding landscape, providing a perfect balance of comfort and nature.</p>
      </Content>
    </Container>
  );
};

export default About;
