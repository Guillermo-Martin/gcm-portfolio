import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Container className="Contact-container">
      <div>

        {/* Header and text */}
        <h2 className="Contact-header">This is the Contact section.</h2>
        <p>Diam vulputate ut pharetra sit amet aliquam id.</p>

        {/* Button */}
        <Button>Button</Button>

        {/* Icons */}
        <p className="Contact-icons">Icons will go here.</p>

      </div>
    </Container>  
  );
}

export default Contact;
