import React from 'react';
import HeroImage from './HeroImage';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  return(
    <div>
      <HeroImage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage;