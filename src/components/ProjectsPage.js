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
      <h2 className="ProjectsPage-header">Starting Out.</h2>
      <p>We've all got to start somewhere.</p>
      <p>A collection of projects I did as a student.</p>
      <Container fluid className="ProjectsPage-row">
        <Row>
          <ImageCarousel />
        </Row>
      </Container>

      {/* Carousel 2 */}
      <h2 className="ProjectsPage-header">Teamwork.</h2>
      <p>Makes the dreams work.</p>
      <p>A collection of projects that I collaborated on.</p>
      <Container fluid className="ProjectsPage-row">
        <Row> 
          <ImageCarousel />
        </Row>
      </Container>

      {/* Carousel 3 */}
      <h2 className="ProjectsPage-header">Growing.</h2>
      <p>Continuing the journey.</p>
      <p>A collection of some of my work.</p>
      <Container fluid className="ProjectsPage-row">
        <Row> 
          <ImageCarousel />
        </Row>
      </Container>

    </div>
  );
}

export default ProjectsPage;
