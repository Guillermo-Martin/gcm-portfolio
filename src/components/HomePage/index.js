import React from 'react';
import HeroImage from '../HeroImage';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import HorizontalRule from '../HorizontalRule';
import Credit from '../Credit';


function HomePage() {
  return (
    <div>
      <HeroImage 
        name="Hi, I'm Guillermo."
        intro="I'm a full stack Web developer from the San Francisco Bay Area."
        className="HeroImage-img"
      />
      <Credit 
        name="Tim Trad"
        link="https://unsplash.com/@timtrad"
      />
      <About />
      <HorizontalRule />
      <Portfolio />
      <HorizontalRule />
      <Contact />
    </div>
  );
}

export default HomePage;
