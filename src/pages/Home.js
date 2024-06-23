import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import homeImage from '../assets/images/homestay.jpg';
import TitleBar from '../components/Title';
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-scroll';

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
  padding: 100px 20px;
  animation: ${fadeIn} 2s ease-in;
  background: url(${homeImage}) no-repeat center;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  overflow-x: hidden; /* Prevent horizontal overflow */
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Add an overlay to make text more readable */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box; /* Ensure padding does not cause overflow */
`;

const Subtitle = styled.p`
  font-size: 2.2em;
  color: #ecf0f1;
  margin-top: 10px;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px; /* Adjust the size of the logo as needed */
  height: auto;
  max-width: 100%; /* Ensure logo does not cause overflow */
`;

const Hamburger = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
  div {
    width: 100%;
    height: 4px;
    background-color: #fff;
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 60px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  
  li {
    margin: 10px 0;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1.2em;
  }
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const homeRef = useRef(null);

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

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <Container ref={homeRef}>
      <Overlay>
        <div style={{backgroundColor: "#FFFFFF"}}>
          <Logo src={logo} alt="Hermitage Stays Logo" />
          <Hamburger onClick={() => setMenuOpen(!menuOpen)}>
          <div></div>
          <div></div>
          <div></div>
        </Hamburger>
        </div>
      <NavMenu open={menuOpen}>
        <li><Link to="home" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="cottages" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Cottages</Link></li>
        <li><Link to="activities" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>Activities</Link></li>
        <li><Link to="about" smooth={true} duration={800} onClick={() => setMenuOpen(false)}>About</Link></li>
      </NavMenu>
        <TitleBar title="home" animate={isVisible}>
          A Zen Experience.
        </TitleBar>
      </Overlay>
    </Container>
  );
};

export default Home;
