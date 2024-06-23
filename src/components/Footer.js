import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.jpg';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineMailOutline } from 'react-icons/md';

const FooterContainer = styled.footer`
  background-color: #000000;
  color: #fff;
  padding: 20px 0;
  position: relative;
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  height: auto;
  max-width: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 50px 20px 20px;
  text-align: center;
`;

const FooterItem = styled.div`
  flex: 1;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:nth-child(1) {
    justify-content: flex-start;
  }

  &:nth-child(3) {
    justify-content: flex-end;
  }
`;

const SocialMedia = styled.div`
  a {
    color: #fff;
    margin: 0 10px;
    font-size: 1.5em;
    text-decoration: none;
  }
`;

const FooterItemText = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Space between icon and text */
`;

const EmailLink = styled.a`
  color: #fff;
  text-decoration: underline;
`;

const Footer = () => (
  <FooterContainer>
    <Logo src={logo} alt="Hermitage Stays Logo" />
    <FooterContent>
      <FooterItem>
        <FooterItemText>
          <CiLocationOn />
          <p>The Hermitage, Coorg, Karnataka, India</p>
        </FooterItemText>
      </FooterItem>
      <FooterItem>
        <FooterItemText>
          <MdOutlineMailOutline />
          <p><EmailLink href="mailto:info@thehermitagecoorg.com">info@thehermitagecoorg.com</EmailLink></p>
        </FooterItemText>
      </FooterItem>
      <FooterItem>
        <SocialMedia>
          <a href="https://facebook.com/thehermitagecoorg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://instagram.com/thehermitagecoorg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/hermitagecoorg" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </SocialMedia>
      </FooterItem>
    </FooterContent>
    <p>&copy; 2024 The Hermitage</p>
  </FooterContainer>
);

export default Footer;
