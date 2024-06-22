import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link, Element, scroller } from 'react-scroll';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cottages from './pages/Cottages';
import Activities from './pages/Activities';
import About from './pages/About';
import './App.css'; // Assuming you have a CSS file for styling

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
      <Header scrollToSection={scrollToSection} />
      <div className="app-container">
        <Element name="home">
          <Home />
        </Element>
        <Element name="cottages">
          <Cottages />
        </Element>
        <Element name="activities">
          <Activities />
        </Element>
        <Element name="about">
          <About />
        </Element>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
