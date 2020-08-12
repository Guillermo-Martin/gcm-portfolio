import React from 'react';
import Container from 'react-bootstrap/Container';

function Credit(props) {
  return (
    <Container fluid className="Credit-container">
      <div>
        Photo by <a href={props.link} target="_blank" rel="noopener noreferrer">{props.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer">Unsplash</a>.
      </div>
    </Container>
  );
}

export default Credit;