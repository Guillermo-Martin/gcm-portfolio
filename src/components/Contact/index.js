import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import './styles.css';

function Contact() {
  return (
    <Container className="Contact-container">
      <div>

        {/* Header and text */}
        <h2 className="Contact-header">Say Hello.</h2>
        <p>Reach out and say hi or connect with me.  I look forward to hearing from you.</p>

        {/* Button */}
        <a href="mailto:gscalica@gmail.com"><Button variant="dark" className="Contact-button"><i className="far fa-envelope"></i>Email Me.</Button></a>
        
        {/* Icons */}
        <Row className="Contact-row-icons">
          <a href="https://www.linkedin.com/in/guillermo-martin-10441046/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
          <a href="https://github.com/Guillermo-Martin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
        </Row>
        
      </div>
    </Container>  
  );
}

export default Contact;
