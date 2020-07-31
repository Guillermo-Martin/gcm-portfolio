import React from 'react';
import './../assets/styles/styles.css';

function HeroImage() {
  return (
    <div className="HeroImage-container">

      <div className="HeroImage-img">
        <div className="HeroImage-text">
          
          {/* Name and text */}
          <h1 className="HeroImage-text-name">Lorem ipsum</h1>
          <h2 className="HeroImage-text-intro">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h2>

          {/* Link to learn more */}
          <div className="HeroImage-text-learn"><a href="#" className="HeroImage-learn">Pellentesque.</a></div>
        </div>
      </div>

    </div>
  );
}

export default HeroImage;
