import React from 'react';
import { Link } from 'react-scroll';
import './styles/header.css';

const Header = ({ scrollToSection }) => (
  <header className="header">
    <nav>
      <ul className='header_link'>
        <li><Link to="home" smooth={true} duration={800}>Home</Link></li>
        <li><Link to="cottages" smooth={true} duration={800}>Cottages</Link></li>
        <li><Link to="activities" smooth={true} duration={800}>Activities</Link></li>
        <li><Link to="about" smooth={true} duration={800}>About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
