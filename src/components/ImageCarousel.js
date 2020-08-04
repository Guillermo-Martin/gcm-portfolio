import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import passwordGenerator from './../assets/images/passwordGenerator.png';
import weatherDashboard from './../assets/images/weatherDashboard.png';
import blogSite from './../assets/images/blogSite.png';

function ImageCarousel() {
  return (
    // <div>

      <Container className="ImageCarousel-container">

        {/* Carousel */}
        <Carousel interval={null}>

          {/* Carousel item */}
          <Carousel.Item className="ImageCarousel-item">
            <img
              className="ImageCarousel-img"
              src={passwordGenerator}
              // src="https://images.unsplash.com/photo-1526436177729-efd2fa1172a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2304&q=80"
              alt="First slide"
            />
            
            {/* Carousel caption */}
            <Carousel.Caption className="carousel-text">
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Carousel item */}
          <Carousel.Item className="ImageCarousel-item">
            <img
              className="ImageCarousel-img"
              src={weatherDashboard}
              alt="Third slide"
            />
            {/* Carousel caption */}
            <Carousel.Caption className="carousel-text">
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Carousel item */}
          <Carousel.Item className="ImageCarousel-item">
            <img
              className="ImageCarousel-img"
              src={blogSite}
            />
            {/* Carousel caption */}
            <Carousel.Caption className="carousel-text">
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>

    // </div>
  );
}

export default ImageCarousel;
