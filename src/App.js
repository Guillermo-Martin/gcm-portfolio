import React from 'react';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroImage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
