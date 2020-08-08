import React from 'react';
import Card from 'react-bootstrap/Card';

function TextCard() {
  return (
    <div>
      <Card style={{ width: '30rem', margin: "0.5rem" }}>
        {/* Image */}
        <Card.Img 
          variant="top" 
          src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        />

          {/* Content */}
          <div >
            <Card.Text className="ImageCard-text">
              <Card.Title className="ImageCard-title">Title</Card.Title>
              <p>Text</p>
             
            </Card.Text>
          </div> 

          
      </Card>
    </div>
  );
}

export default TextCard;