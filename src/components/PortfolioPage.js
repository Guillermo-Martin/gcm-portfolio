import React from 'react';
import HeroImage from './HeroImage';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ImageCard from './../components/ImageCard';
import passwordGenerator from './../assets/images/passwordGenerator.png';
import weatherDashboard from './../assets/images/weatherDashboard.png';
import blogSite from './../assets/images/blogSite.png';

function PortfolioPage() {
  return (
    <div className="PortfolioPage-container">

      {/* Hero image */}
      <HeroImage />

      {/* Starting Out Section  */}
      <h2 className="PortfolioPage-header">Starting Out.</h2>
      <p>We've all got to start somewhere.</p>
      <p>A collection of projects I did as a student.</p>
      <Container fluid >
        <Row className="PortfolioPage-row">
          <ImageCard
            src={passwordGenerator} 
            title="lorem ipsum"
            description="Some quick example text to build on the card title and make up the bulk of
            the card's content."
            tech="lorem ipsum"
          />
          <ImageCard
            src={weatherDashboard} 
            title="lorem ipsum"
            description="Some quick example text to build on the card title and make up the bulk of
            the card's content."
            tech="lorem ipsum"
          />
          <ImageCard
            src={blogSite} 
            title="lorem ipsum"
            description="Some quick example text to build on the card title and make up the bulk of
            the card's content."
            tech="lorem ipsum"
          />
          
          {/* <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard /> */}
        </Row>
      </Container>

      {/* Teamwork Section */}
      <h2 className="PortfolioPage-header">Teamwork.</h2>
      <p>Makes the dreams work.</p>
      <p>A collection of projects that I collaborated on.</p>
      <Container fluid className="PortfolioPage-row">
        <Row> 
          
        </Row>
      </Container>

      {/* Personal Projects */}
      {/* <h2 className="PortfolioPage-header">Growing.</h2>
      <p>Continuing the journey.</p>
      <p>A collection of some of my work.</p>
      <Container fluid className="PortfolioPage-row">
        <Row> 
          
        </Row>
      </Container> */}

    </div>
  );
}

export default PortfolioPage;
