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
          <Button><i class="far fa-envelope"></i>Email Me.</Button>
        
        <Row>
          {/* Icons */}
          <i class="fab fa-linkedin"></i>
          <i class="fab fa-github"></i>
        </Row>
        
      </div>
    </Container>  
  );
}

export default Contact;
