import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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

        <h2>Skills</h2>

        <Row>
          <i class="fab fa-html5"></i>
          <i class="fab fa-css3-alt"></i>
          <i class="fab fa-js"></i>
          <i class="fab fa-bootstrap"></i>
          <i class="fab fa-react"></i>
        </Row>

        
          {/* INSERT LINKS TO LEARN MORE AND VIEW RESUME */}
          <Row className="About-learn">
            <a href="#">Learn Even More</a>
            <a href="#">View My Resume.</a>
          </Row>
        
      </Container>
      

      
    </div>
  );
}

export default About;
