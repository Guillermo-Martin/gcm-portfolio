import React from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import passwordGenerator from './../assets/images/passwordGenerator.jpg';
import weatherDashboard from './../assets/images/weatherDashboard.png';
import blogSite from './../assets/images/blogSite.PNG';

function Portfolio() {
  return (
    <div className="Portfolio-container" id="portfolio">

      {/* Header and text */}
      <h2 className="Portfolio-h1">Portfolio.</h2>
      <p>
        Here's a selection of work I've done.
      </p>
      <Container>

        {/* Project cards */}
        <Row className="Portfolio-row">
          <ProjectCard
            src={passwordGenerator}
            title="Password Generator"
            description="A web application that uses prompts to generate a random password."
            tech="Made using: HTML, CSS, JavaScript, and GitHub Pages."
            github="https://github.com/Guillermo-Martin/passwordGenerator"
            livelink="https://guillermo-martin.github.io/passwordGenerator/"
          />
          <ProjectCard
            src={weatherDashboard}
            title="Weather Dashboard"
            description="A web application that provides the current weather and a 5-day forecast for a city."
            tech="Made using: HTML, CSS, JavaScript, jQuery, Bootstrap, OpenWeather API, Moment.js, and GitHub Pages."
            github="https://github.com/Guillermo-Martin/weatherDashboard"
            livelink="https://guillermo-martin.github.io/weatherDashboard/"
          />
          <ProjectCard
            src={blogSite}
            title="Blog Site"
            description="A blog site that allows users to post, view recipes, or Pokemon information."
            tech="Made using: HTML, CSS, JavaScript, React, Bootstrap, TravisCI, ESLint, Express, mySQL2, Node.js, and Heroku."
            github="https://github.com/Kerry-Jr/Project02"
            livelink="https://project02blog.herokuapp.com/"
          />
        </Row>
        
        {/* Link to see more */}
        <Link to='/portfolio'>See More!</Link>
      </Container>
      
    </div>
  );
}

export default Portfolio;
