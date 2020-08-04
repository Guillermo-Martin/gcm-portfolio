import React from 'react';
import Card from 'react-bootstrap/Card';

function ImageCard() {
  return (
    <div>
      <Card style={{ width: '30rem', margin: "0.5rem" }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      </Card>
    </div>
  );
}

export default ImageCard;