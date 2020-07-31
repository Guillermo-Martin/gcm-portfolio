import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeroImage from './HeroImage';
import ImageCarousel from './ImageCarousel';


function ProjectsPage() {
  return (
    <div className="ProjectsPage-container">
      <HeroImage />
      <h1 className="ProjectsPage-header">Excepteur sint.</h1>
      <p>Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.</p>
      <Container fluid className="ProjectsPage-row">
        <Row>
          <ImageCarousel />
        </Row>
      </Container>
      <h1 className="ProjectsPage-header">Excepteur sint.</h1>
      <p>Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.</p>
      <Container fluid className="ProjectsPage-row">
        <Row> 
          <ImageCarousel />
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;