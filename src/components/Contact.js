import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

function Contact() {
  return (
    <Container className="Contact-container">
      <div>

          {/* Header and text */}
          <h2 className="Contact-header">Say Hello.</h2>
          <p>Reach out and say hi or connect with me.  I look forward to hearing from you.</p>

          {/* Button */}
          <Button><i className="far fa-envelope"></i>Email Me.</Button>
        
        <Row className="Contact-row-icons">
          {/* Icons */}
          <i className="fab fa-linkedin icon"></i>
          <i className="fab fa-github icon"></i>
        </Row>
        
      </div>
    </Container>  
  );
}

export default Contact;
