import React from 'react';
import ImageCard from '../ImageCard';
import { Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import gameWebsite from './../../assets/images/gameWebsite.png';
import oaklandPeaceCenter from './../../assets/images/oaklandPeaceCenter.png';
import planet from "./../../assets/images/planet.png";
import './styles.css';

function Portfolio() {
  return (
    <div className="Portfolio-container" id="portfolio">

      {/* Header and text */}
      <h2 className="Portfolio-h1">Portfolio.</h2>
      <p>
        Here's a selection of work I've done.
      </p>
      <Container fluid>

        {/* Project cards */}
        <Row className="Portfolio-row">
          <ImageCard
            src={gameWebsite} 
            title="The Board Game Project"
            description="A full stack Web application used to enhance a client’s online presence within the board gaming community."
            tech="MongoDB, Mongoose, Express.js, React.js, Node.js, React Bootstrap, Axios, React Router DOM, HTML5, CSS3, JavaScript (ES6), Figma, Postman, NPM, and GitHub. ( Note: Use the following guest account to try out the application: Email: testing123@gmail.com, Password: 123123 )"
            link="https://gamewebsiteapp.herokuapp.com/"
            github="https://github.com/jngo2013/gameWebsite"
          />
          <ImageCard
            src={oaklandPeaceCenter} 
            title="Oakland Peace Center"
            description="I completely redesigned Oakland Peace Center's Website."
            tech="HTML, CSS, Squarespace"
            link="https://www.oaklandpeacecenter.org/"
            github={false}
          />
          <ImageCard
            src={planet} 
            title="Planet"
            description="A full stack Web application for planning events with your friends and family."
            tech="MongoDB, Express.js, React, Node.js, Semantic UI React, Redux, Mongoose, TravisCI, User Authentication Technologies, and Heroku."
            link="https://ucbext-planet.herokuapp.com/"
            github="https://github.com/jngo2013/Planet"
          />
        </Row>
        
        {/* Link to see more */}
        <Link to='/portfolio'><Button variant="dark" className="Portfolio-button">See More.</Button></Link>
      </Container>
    </div>
  );
}

export default Portfolio;
