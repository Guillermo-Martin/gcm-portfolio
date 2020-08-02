import React from 'react';
import HeroImage from './HeroImage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <HeroImage />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;