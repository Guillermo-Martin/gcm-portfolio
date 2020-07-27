import React from 'react';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroImage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
