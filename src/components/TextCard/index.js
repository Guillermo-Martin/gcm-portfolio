import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';

function TextCard(props) {
  return (
    <div>
      <Card className="TextCard">
        <Card.Body className="TextCard-text">{props.text}</Card.Body>
      </Card>
    </div>
  );
}

export default TextCard;