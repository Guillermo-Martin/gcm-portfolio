import React from 'react';
import HeroImage from './HeroImage';
import ImageCarousel from './ImageCarousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImageCard from './../components/ImageCard';

function PortfolioPage() {
  return (
    <div className="PortfolioPage-container">

      {/* Hero image */}
      <HeroImage />

      {/* Carousel 1 */}
      <h2 className="PortfolioPage-header">Starting Out.</h2>
      <p>We've all got to start somewhere.</p>
      <p>A collection of projects I did as a student.</p>
      <Container fluid >
        <Row className="PortfolioPage-row">
        <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </Row>
      </Container>

      {/* Carousel 2 */}
      <h2 className="PortfolioPage-header">Teamwork.</h2>
      <p>Makes the dreams work.</p>
      <p>A collection of projects that I collaborated on.</p>
      <Container fluid className="PortfolioPage-row">
        <Row> 
          
        </Row>
      </Container>

      {/* Carousel 3 */}
      {/* <h2 className="PortfolioPage-header">Growing.</h2>
      <p>Continuing the journey.</p>
      <p>A collection of some of my work.</p>
      <Container fluid className="PortfolioPage-row">
        <Row> 
          <ImageCarousel />
        </Row>
      </Container> */}

    </div>
  );
}

export default PortfolioPage;
