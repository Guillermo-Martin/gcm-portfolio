import React from 'react';
import ProjectCard from './ProjectCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className="Projects-container">

      {/* Header and text */}
      <h2 className="Projects-h1">This is the projects section.</h2>
      <p className="Projects-text">
        Quam id leo in vitae turpis massa. Convallis aenean et tortor at risus viverra adipiscing. Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.
      </p>
      <Container>

        {/* Project cards */}
        <Row className="Projects-row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard /> 
        </Row>
        
        {/* Link to see more */}
        <Link to='/projects'>Tellus mauris.</Link>
      </Container>
      
    </div>
  );
}

export default Projects;
