import React from 'react';
import './../assets/styles/styles.css';

function HeroImage() {
  return (
    <div>
      {/* image from https://unsplash.com/.  Photo taken by Tim Trad (https://unsplash.com/@timtrad) */}
    
      <img 
        className="HeroImage-img"
        src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3450&q=80"
        alt="Lauterbrunnen"
      />

      <div className="HeroImage-text">
        <h1>Lorem ipsum</h1>
        <h2>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h2>
      </div>
    </div>
  );
}

export default HeroImage;