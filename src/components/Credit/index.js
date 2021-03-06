import React from 'react';
import Container from 'react-bootstrap/Container';
import './styles.css';

function Credit(props) {
  return (
    <Container fluid className="Credit-container">
      <div>
        Photo by <a href={props.link} target="_blank" rel="noopener noreferrer" className="Credit-link">{props.name}</a> on <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className="Credit-link">Unsplash</a>.
      </div>
    </Container>
  );
}

export default Credit;
