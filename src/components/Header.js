import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cottages">Cottages</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
