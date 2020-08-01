import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <div className="About-container" id="about">

      {/* Header and text */}
      <h2 className="About-header">About Me.</h2>

      {/* Image */}
      <Image roundedCircle src="https://randomuser.me/api/portraits/lego/5.jpg" />

      <Container>
        <p>
          Hi, I'm Guillermo.  I'm a front-end web developer based in the Bay Area in California.  I recently earned my certificate in full-stack web development from the University of California, Berkeley Extension.  During my time there, I developed an intense passion for front-end web development and design.  Inspired by simple, clean, and sleek designs, I'm motivated to learn and create the same. 
        </p>

        
          {/* INSERT LINKS TO LEARN MORE AND VIEW RESUME */}
        
        
      </Container>
      

      
    </div>
  );
}

export default About;
