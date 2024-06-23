import React, { useRef, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
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
  display: flex; /* Display as flex container */
  padding: 20px;
  animation: ${fadeIn} 2s ease-in;
`;

const TextContainer = styled.div`
  flex: 1; /* Take remaining space */
`;

const Header = styled.header`
  padding: 20px;
  background-color: #f8f8f8;
  text-align: left; /* Align text left */
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

const AmenityIcon = styled.img`
  width: 24px;
  height: 24px;
`;

const AmenityText = styled.p`
  margin-top: 5px;
  font-size: 1em;
`;

const ImageContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const CottageImage = styled.div`
  width: 500px;
  height: 300px;
  background-color: #ddd;
  border-radius: 10px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
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
              <AmenityIcon src="wifi-icon.png" alt="Free Wifi" />
              <AmenityText>Free Wifi</AmenityText>
            </Amenity>
            <Amenity>
              <AmenityIcon src="cable-tv-icon.png" alt="Cable TV" />
              <AmenityText>Cable TV</AmenityText>
            </Amenity>
            <Amenity>
              <AmenityIcon src="breakfast-icon.png" alt="Breakfast Included" />
              <AmenityText>Breakfast Included</AmenityText>
            </Amenity>
          </Amenities>
        </TextContainer>
        <ImageContainer>
          <CottageImage>
            <p>Image Placeholder</p>
          </CottageImage>
        </ImageContainer>
      </Container>
    </div>
  );
};

export default Cottages;
