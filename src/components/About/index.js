import React from 'react';
// import TextCard from '../TextCard';
import Image from 'react-bootstrap/Image';
import { Container, Row, Button } from 'react-bootstrap';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import portfolioPic from './../../assets/images/portfolioPic.jpg';
import resume from './../../assets/documents/Guillermo_Martin_Resume.pdf';
import './styles.css';
import express from './../../assets/images/expressIcon.png';
import mySQL from './../../assets/images/mySQLIcon.png';
import mongoDB from './../../assets/images/mongoDBIcon.png';
import jQuery from './../../assets/images/jQueryIcon.png';
import heroku from './../../assets/images/herokuIcon.png';
import postman from './../../assets/images/postmanIcon.png';


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
          <p>
            I’m from Virginia Beach, Virginia and now live in the Bay Area in California.  I have a Bachelor’s in Biology from James Madison University and a Master’s in Forensic Science from the University of Central Oklahoma.
          </p>
          
          {/* Second Section */}
          <p>
            When I moved to the Bay Area, I worked as a forensic scientist in the forensic biology/DNA unit of a local crime lab for ten years.  I worked in the lab to analyze evidence and in the field to process crime scenes.  While working there, I gained an interest in coding and decided to pursue a career in web development.
          </p>
          {/* Third Section */}
          <p>
            I recently earned my certificate in Full Stack Web Development from the University of California, Berkeley Extension.  During my studies, I developed an intense passion for front-end web development and design. Inspired by simple, clean, and sleek designs, I’m motivated to learn and create the same.
          </p>
        </Row>
        
        <p className="About-text-extra">
          In my spare time, I enjoy playing video games, fencing, reading, tinkering around with code, baking, and exploring all the Bay Area has to offer.
        </p>
      

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
          <div className="About-icon-div">
            <i class="About-icon fab fa-node"></i>
            <p>Node.js</p>
          </div>
          <div className="About-icon-div About-icon-div-express">
            <div className="About-icon-div-image">
              <img src={express} alt="express icon" />
            </div>
            <p>Express.js</p>
          </div>
          <div className="About-icon-div About-icon-div-mysql">
            <div className="About-icon-div-image">
              <img src={mySQL} alt="mysql icon" />
            </div>
            <p>MySQL</p>
          </div>
          <div className="About-icon-div About-icon-div-mysql">
            <div className="About-icon-div-image">
              <img src={mongoDB} alt="mongodb icon" />
            </div>
            <p>MongoDB</p>
          </div>
          <div className="About-icon-div About-icon-div-mysql">
            <div className="About-icon-div-image">
              <img src={jQuery} alt="mongodb icon" />
            </div>
            <p>jQuery</p>
          </div>
          <div className="About-icon-div">
            <i class="About-icon fab fa-github"></i>
            <p>Git/GitHub</p>
          </div>
          <div className="About-icon-div About-icon-div-mysql">
            <div className="About-icon-div-image">
              <img src={heroku} alt="mongodb icon" />
            </div>
            <p>Heroku</p>
          </div>
          <div className="About-icon-div">
            <i class="About-icon fab fa-npm"></i>
            <p>npm</p>
          </div>
          <div className="About-icon-div About-icon-div-mysql">
            <div className="About-icon-div-image">
              mongoose
            </div>
            <p>Mongoose</p>
          </div>
          <div className="About-icon-div About-icon-div-mysql">
            <div className="About-icon-div-image">
              <img src={postman} alt="mongodb icon" />
            </div>
            <p>Postman</p>
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

// icons from https://fontawesome.com/, https://www.cleanpng.com/, https://www.pngaaa.com/detail/95042