import React from 'react';
import './../assets/styles/styles.css';

function HeroImage() {
  return (
    <div className="HeroImage-container">

      <div className="HeroImage-img">
        <div className="HeroImage-text">
          
          {/* Name and text */}
          <h1 className="HeroImage-text-name">Hi, I'm Guillermo.</h1>
          <h2 className="HeroImage-text-intro">And I'm a front-end web developer.</h2>

          {/* Link to learn more */}
          <div className="HeroImage-text-learn"><a href="#" className="HeroImage-learn">Learn more!</a></div>
        </div>
      </div>

    </div>
  );
}

export default HeroImage;
