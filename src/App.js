import React from 'react';
import HeroImage from './components/HeroImage';
import About from './components/About';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroImage />
      <About />
      <Projects />
    </div>
  );
}

export default App;
