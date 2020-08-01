import React from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="Projects-container" id="projects">

      {/* Header and text */}
      <h2 className="Projects-h1">Portfolio.</h2>
      <p className="Projects-text">
        Here's a selection of work I've done.
      </p>
      <Container>

        {/* Project cards */}
        <Row className="Projects-row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> 
        </Row>
        
        {/* Link to see more */}
        <Link to='/projects'>See More!</Link>
      </Container>
      
    </div>
  );
}

export default Projects;
