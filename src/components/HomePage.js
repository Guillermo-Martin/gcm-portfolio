import React from 'react';
import HeroImage from './HeroImage';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <HeroImage 
        name="Hi, I'm Guillermo."
        intro="I'm a front-end web developer based in the Bay Area."
        className="HeroImage-img"
      />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
