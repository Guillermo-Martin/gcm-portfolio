import React from 'react';
import Button from 'react-bootstrap/Button';
// import './../../assets/styles/styles.css';
import './styles.css';

function HeroImage(props) {
  return (
    <div className="HeroImage-container">
      <div className={props.className}>
        <div className="HeroImage-text">
          
          {/* Name and text */}
          <h1 className="HeroImage-text-name">{props.name}</h1>
          <h2 className="HeroImage-text-intro">{props.intro}</h2>
          
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
