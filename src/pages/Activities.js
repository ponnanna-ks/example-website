import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import homestay from "../assets/images/homestay.jpg"
import homestay2 from '../assets/images/homestay2.jpg';
import nature1 from '../assets/images/nature1.jpg';
import nature2 from '../assets/images/nature2.jpg';
import TitleBar from '../components/Title';
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
  text-align: left;
  padding: 20px;
  animation: ${fadeIn} ease-in;
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
  const [isVisible, setIsVisible] = useState(false);
  const activitiesRef = useRef(null);

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

    if (activitiesRef.current) {
      observer.observe(activitiesRef.current);
    }

    return () => {
      if (activitiesRef.current) {
        observer.unobserve(activitiesRef.current);
      }
    };
  }, []);

  return (
    <div ref={activitiesRef}>
    <Container>
      <TitleBar title={"activities"} animate={isVisible}>Activities</TitleBar>
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
    </div>
  );
};

export default Activities;
