import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Element, scroller } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cottages from './pages/Cottages';
import Activities from './pages/Activities';
import About from './pages/About';
import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  background-color: #f0f0f0; /* Set your desired background color */
  min-height: 100vh;
`;

function App() {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  return (
    <Router>
      <AppContainer>
      <div className="app-container">
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
            <About />
        </Element>
        <Element name="cottages">
          <Cottages />
        </Element>
        <Element name="activities">
          <Activities />
        </Element>
      </div>
      <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
