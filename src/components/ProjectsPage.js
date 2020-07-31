import React from 'react';
import HeroImage from './HeroImage';
import ImageCarousel from './ImageCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function ProjectsPage() {
  return (
    <div className="ProjectsPage-container">

      {/* Hero image */}
      <HeroImage />

      {/* Carousel 1 */}
      <h2 className="ProjectsPage-header">Excepteur sint.</h2>
      <p>Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.</p>
      <Container fluid className="ProjectsPage-row">
        <Row>
          <ImageCarousel />
        </Row>
      </Container>

      {/* Carousel 2 */}
      <h2 className="ProjectsPage-header">Excepteur sint.</h2>
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
