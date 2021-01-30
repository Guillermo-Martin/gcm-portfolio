import React from 'react';
import './styles.css';

function HeroImage(props) {
  return (
    <div className="HeroImage-container">
      {/* For setting the hero image */}
      <div className={props.className}>
        <div className="HeroImage-text">
          
          {/* Name and text */}
          <h1>{props.name}</h1>
          <p>{props.intro}</p>
          
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
