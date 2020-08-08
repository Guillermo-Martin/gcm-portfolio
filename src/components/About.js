import React from 'react';
import TextCard from './TextCard';
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

      <Container fluid>
        {/* <p>
          Hi, I'm Guillermo.  I'm a front-end web developer based in the Bay Area in California.  I recently earned my certificate in full-stack web development from the University of California, Berkeley Extension.  During my time there, I developed an intense passion for front-end web development and design.  Inspired by simple, clean, and sleek designs, I'm motivated to learn and create the same. 
        </p> */}
        <Row className="About-text-row">
          <TextCard />
          <TextCard />
          <TextCard /> 
        </Row>
        
        

        <h2 className="About-skills">Skills</h2>

        <Row className="About-icons-row">
          <div className="About-icon-div">
            <i className="About-icon fab fa-html5"></i>
            <p>HTML5</p>
          </div>
          <div className="About-icon-div">
            <i className="About-icon fab fa-css3-alt"></i>
            <p>CSS3</p>
          </div>
          <div className="About-icon-div">
            <i className="About-icon fab fa-js"></i>
            <p>JavaScript</p>
          </div>
          <div className="About-icon-div">
            <i className="About-icon fab fa-bootstrap"></i>
            <p>Bootstrap</p>
          </div>
          <div className="About-icon-div">
            <i className="About-icon fab fa-react"></i>
            <p>React</p>
          </div>  
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
