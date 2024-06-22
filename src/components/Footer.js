import React from 'react';
import './styles/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>&copy; 2024 The Hermitage</p>
      <p>Contact: <a href="mailto:info@thehermitagecoorg.com">info@thehermitagecoorg.com</a></p>
      <p>Location: The Hermitage, Coorg, Karnataka, India</p>
      <div className="social-media">
        <a href="https://facebook.com/thehermitagecoorg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://instagram.com/thehermitagecoorg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com/hermitagecoorg" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
);



export default Footer;
