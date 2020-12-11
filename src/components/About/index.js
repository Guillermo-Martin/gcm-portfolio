import React from 'react';
import TextCard from '../TextCard';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import portfolioPic from './../../assets/images/portfolioPic.jpg';
import resume from './../../assets/documents/Guillermo_Martin_Resume.pdf';


function About() {
  return (
    <div id="about">

      {/* Header and text */}
      <h2 className="About-header">About Me.</h2>

      {/* Image */}
      <Image roundedCircle src={portfolioPic} className="About-img" />

      <Container fluid>

        <Row className="About-text-row">
          {/* First Section */}
          <TextCard 
            text="I’m from Virginia Beach, Virginia and now live in the Bay Area in California.  I have a Bachelor’s in Biology from James Madison University and a Master’s in Forensic Science from the University of Central Oklahoma."  
          />
          {/* Second Section */}
          <TextCard 
            text="When I moved to the Bay Area, I worked as a forensic scientist in the forensic biology/DNA unit of a local crime lab for ten years.  I worked in the lab to analyze evidence and in the field to process crime scenes.  While working there, I gained an interest in coding and decided to pursue a career in web development."
          />
          {/* Third Section */}
          <TextCard 
            text="I recently earned my certificate in Full Stack Web Development from the University of California, Berkeley Extension.  During my studies, I developed an intense passion for front-end web development and design. Inspired by simple, clean, and sleek designs, I’m motivated to learn and create the same."
          /> 

          <p>
            In my spare time, I enjoy playing video games, fencing, reading, tinkering around with code, baking, and exploring all the Bay Area has to offer.
          </p>
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

          {/* RESUME */}
          <Row className="About-learn">
            <a href={resume} target="_blank" rel="noopener noreferrer"><Button variant="dark" className="About-learn-resume">View My Resume.</Button></a>
          </Row>
        
      </Container>
    
    </div>
  );
}

export default About;
