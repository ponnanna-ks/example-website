import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import TitleBar from '../components/Title';
import { FaWifi } from "react-icons/fa6";
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { MdFreeBreakfast } from "react-icons/md";
import nature1 from '../assets/images/nature1.jpg';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  padding: 20px;
  animation: ${fadeIn} 2s ease-in;
  flex-wrap: wrap; /* Ensure content wraps on smaller screens */
`;

const TextContainer = styled.div`
  flex: 1;
  min-width: 300px; /* Ensure a minimum width */
  margin-right: 20px; /* Space between text and image */
`;

const Header = styled.header`
  padding: 20px 0;
  background-color: #f8f8f8;
  text-align: left;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #34495e;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #333;
  margin-top: 20px;
`;

const Amenities = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Amenity = styled.div`
  margin: 0 15px;
  text-align: center;
`;

const AmenityText = styled.p`
  margin-top: 5px;
  font-size: 1em;
`;

const ImageContainer = styled.div`
  flex: 1;
  min-width: 300px; /* Ensure a minimum width */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const CottageImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 500px; /* Ensure a maximum width */
  border-radius: 10px;
`;

const Cottages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const cottagesRef = useRef(null);

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

    if (cottagesRef.current) {
      observer.observe(cottagesRef.current);
    }

    return () => {
      if (cottagesRef.current) {
        observer.unobserve(cottagesRef.current);
      }
    };
  }, []);

  return (
    <div ref={cottagesRef}>
      <Container>
        <TextContainer>
          <Header>
            <TitleBar title={"Our Cottages"} animate={isVisible}>Our Cottages</TitleBar>
            <Subtitle>Designed for your utmost comfort, a stay in one of our luxury cottages is guaranteed to bring you closer to Mother Nature’s soul than you have ever been.</Subtitle>
          </Header>
          <Description>
            Imagine waking up after a restful night of sleep on exquisite, soft bedding, to a private balcony with a stunning view while sipping on a warm cup of coffee. With a range of amenities, our cottages are designed to make you feel at home while you’re on vacation.
          </Description>
          <Amenities>
            <Amenity>
              <FaWifi/>
              <AmenityText>Free Wifi</AmenityText>
            </Amenity>
            <Amenity>
              <PiTelevisionSimpleFill/>
              <AmenityText>Cable TV</AmenityText>
            </Amenity>
            <Amenity>
              <MdFreeBreakfast/>
              <AmenityText>Breakfast Included</AmenityText>
            </Amenity>
          </Amenities>
        </TextContainer>
        <ImageContainer>
          <CottageImage src={nature1} alt="Cottage" />
        </ImageContainer>
      </Container>
    </div>
  );
};

export default Cottages;
