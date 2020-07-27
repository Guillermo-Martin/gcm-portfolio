import React from 'react';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return(
    <Container fluid className="About-container">
      <Row className="About-row">

        <Col className="About-col-img">
          <Image roundedCircle src="https://randomuser.me/api/portraits/lego/5.jpg" className="About-img" /> 
        </Col>
        
        <Col className="About-col-text">
            
            <p className="About-col-p">
              Tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra tellus in hac. Purus in massa tempor nec feugiat. Diam vulputate ut pharetra sit amet aliquam id. Blandit volutpat maecenas volutpat blandit aliquam etiam. Quis varius quam quisque id.
              <br />
              <br />
              Tristique senectus et netus et. Suspendisse sed nisi lacus sed viverra tellus in hac. Purus in massa tempor nec feugiat. Diam vulputate ut pharetra sit amet aliquam id. Blandit volutpat maecenas volutpat blandit aliquam etiam. Quis varius quam quisque id.
            </p>  
        </Col> 
      </Row>

      
    </Container>
  )
}

export default About;