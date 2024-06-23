import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import TitleBar from '../components/Title';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  animation: ${({ animate }) => (animate ? fadeIn : 'none')} 0.5s ease-in;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.4em;
  color: #2c3e50;
  margin-bottom: 10px;
`;

const CardContent = styled.p`
  font-size: 1em;
  color: #2c3e50;
  line-height: 1.6;
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
        threshold: 0.1,
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
      <Container>
        <Card animate={isVisible}>
          <CardTitle>Experience Tranquility</CardTitle>
          <CardContent>
            Nestled amidst the lush greenery of Coorg, The Hermitage offers a serene escape from the hustle and bustle of city life.
          </CardContent>
        </Card>
        <Card animate={isVisible}>
          <CardTitle>Nature's Symphony</CardTitle>
          <CardContent>
            Wake up to the symphony of chirping birds, the fragrance of blooming flowers, and the gentle rustle of leaves.
          </CardContent>
        </Card>
        <Card animate={isVisible}>
          <CardTitle>Adventure Awaits</CardTitle>
          <CardContent>
            Our homestay is a haven for nature lovers, adventure seekers, and those in need of a peaceful retreat.
          </CardContent>
        </Card>
        <Card animate={isVisible}>
          <CardTitle>Comfort & Nature</CardTitle>
          <CardContent>
            Our beautifully designed homestay blends seamlessly with the surrounding landscape, providing a perfect balance of comfort and nature.
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default About;
