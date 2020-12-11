import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles.css';

function HorizontalRule() {
  return (
    <Container fluid className="HorizontalRule-Container">
      <hr className="HorizontalRule"></hr>
    </Container>    
  );
}

export default HorizontalRule;