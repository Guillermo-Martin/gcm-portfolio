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
            title="lorem ipsum"
            description="lorem ipsum"
            tech="lorem ipsum"
          />
          <ProjectCard
            src={weatherDashboard}
            title="lorem ipsum"
            description="lorem ipsum"
            tech="lorem ipsum"
          />
          <ProjectCard
            src={blogSite}
            title="lorem ipsum"
            description="lorem ipsum"
            tech="lorem ipsum"
          />
        </Row>
        
        {/* Link to see more */}
        <Link to='/portfolio'>See More!</Link>
      </Container>
      
    </div>
  );
}

export default Portfolio;
