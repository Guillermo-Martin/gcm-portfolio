import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Contact() {
  return (
    <Container className="Contact-container">
      <div>

        {/* Header and text */}
        <h2 className="Contact-header">Say Hello.</h2>
        <p>Reach out and say hi or connect with me.  I look forward to hearing from you.</p>

        {/* Button */}
        <Button>Email Me.</Button>

        {/* Icons */}
        {/* ICONS WILL GO HERE */}

      </div>
    </Container>  
  );
}

export default Contact;
