import React from 'react';
import ImageCard from './ImageCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import passwordGenerator from './../assets/images/passwordGenerator.png';
import weatherDashboard from './../assets/images/weatherDashboard.png';
import blogSite from './../assets/images/blogSite.png';

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
            src={passwordGenerator} 
            title="Password Generator"
            description="A web application that uses prompts to generate a random password."
            tech="Made using: HTML, CSS, JavaScript, and GitHub Pages."
            link="https://guillermo-martin.github.io/passwordGenerator/"
            github="https://github.com/Guillermo-Martin/passwordGenerator"
          />
          <ImageCard
            src={weatherDashboard} 
            title="Weather Dashboard"
            description="A web application that provides the current weather and a 5-day forecast for a city."
            tech="HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather API, Moment.js, and GitHub Pages."
            link="https://guillermo-martin.github.io/weatherDashboard/"
            github="https://github.com/Guillermo-Martin/weatherDashboard"
          />
          <ImageCard
            src={blogSite} 
            title="Blog Site"
            description="A web application for posting thoughts, learning new recipes, and facts about Pokemon."
            tech="HTML, CSS, JavaScript, React, Bootstrap, TravisCI, ESLint, Express, mySQL2, Node.js, and Heroku."
            link="https://project02blog.herokuapp.com/"
            github="https://github.com/Kerry-Jr/Project02"
        />
        </Row>
        
        {/* Link to see more */}
        {/* <Link to='/portfolio'><span className="Portfolio-link">See More.</span></Link> */}
        <Link to='/gcm-portfolio/portfolio'><Button variant="dark" className="Portfolio-button">See More.</Button></Link>
      </Container>
      
    </div>
  );
}

export default Portfolio;
