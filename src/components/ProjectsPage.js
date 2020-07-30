import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeroImage from './HeroImage';
import ImageCarousel from './ImageCarousel';


function ProjectsPage() {
  return(
    <div className="ProjectsPage-container">
      <HeroImage />
      <h1>Excepteur sint.</h1>
      <h2>Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.</h2>
      <Container fluid>
        <Row>
          <ImageCarousel />
        </Row>
      </Container>
    </div>
  );
}

export default ProjectsPage;