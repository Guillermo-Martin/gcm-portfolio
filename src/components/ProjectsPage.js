import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeroImage from './HeroImage';
import ProjectCard from './ProjectCard';

function ProjectsPage() {
  return(
    <div className="ProjectsPage-container">
      <HeroImage />
      <h1>Excepteur sint.</h1>
      <h2>Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.</h2>
      <Container fluid>
        <Row>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;