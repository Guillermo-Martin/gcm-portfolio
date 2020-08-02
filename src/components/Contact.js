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
        <a href="mailto:gscalica@gmail.com"><Button><i className="far fa-envelope"></i>Email Me.</Button></a>
        
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
