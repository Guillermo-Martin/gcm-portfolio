import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return(

    <div className="About-container">
      <h1 className="About-header">This is the about section.</h1>
      <p className="Projects-text">
        Quam id leo in vitae turpis massa. Convallis aenean et tortor at risus viverra adipiscing. Sit amet justo donec enim. Arcu felis bibendum ut tristique. Quis lectus nulla at volutpat diam ut venenatis.
      </p>
      {/* <Container> */}
      <Image roundedCircle src="https://randomuser.me/api/portraits/lego/5.jpg" /> 
      {/* </Container>   */}
    </div>
  )
}

export default About;