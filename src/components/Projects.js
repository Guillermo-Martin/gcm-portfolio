import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProjectCard from './../components/Card';


function Projects() {
  return(
    <div className="Projects-container">
      <h1 className="Projects-h1">This is the projects section.</h1>
      <p className="Projects-text">
        Quam id leo in vitae turpis massa. Convallis aenean et tortor at risus viverra adipiscing. Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.
      </p>
      <Container>
        <Row className="Projects-row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Row>
      </Container>
      <a href="#" >Tellus mauris.</a>
    </div>
  );
}

export default Projects;