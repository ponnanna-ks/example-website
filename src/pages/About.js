import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import TitleBar from '../components/Title';

const Container = styled.div`
  text-align: center;
  padding: 20px;
  animation: ${({ animate }) => animate ? fadeIn : 'none'} 1s ease-in;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #34495e;
  margin: 20px 0;
`;

const Content = styled.div`
  font-size: 1em;
  color: #2c3e50;
  line-height: 1.6;
  margin: 0 20px;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Adjust this value to determine when the animation should trigger
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef}>
      <TitleBar title="about" animate={isVisible}>About Us</TitleBar>
      <Container animate={isVisible}>
        <Subtitle>Learn more about Hermitage Stays.</Subtitle>
        <Content>
          <p>Experience Tranquility in the Heart of Coorg</p>
          <p>
            Nestled amidst the lush greenery of Coorg, The Hermitage offers a serene escape from the hustle and bustle of city life. Our homestay is a haven for nature lovers, adventure seekers, and those in need of a peaceful retreat.
          </p>
          <p>
            At The Hermitage, you wake up to the symphony of chirping birds, the fragrance of blooming flowers, and the gentle rustle of leaves. Our beautifully designed homestay blends seamlessly with the surrounding landscape, providing a perfect balance of comfort and nature.
          </p>
        </Content>
      </Container>
    </div>
  );
};

export default About;
