import React from 'react';
import Card from 'react-bootstrap/Card';

function ImageCard(props) {
  return (
    <div className="ImageCard-container">
      <Card style={{ width: '30rem', margin: "0.5rem" }}>
        {/* Image */}
        <Card.Img 
          variant="top" 
          src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
        />

          {/* Content */}
          <div className="ImageCard-overlay">
            <Card.Text className="ImageCard-text">
              <Card.Title>{props.title}</Card.Title>
              <p>{props.description}</p>
              <div>
                <small className="text-muted">{props.tech}</small>
              </div>
              <div>
                <i class="fas fa-link"></i>
                <i class="fab fa-github"></i>
              </div>
            </Card.Text>
          </div>
          
      </Card>
      
    </div>
  );
}

export default ImageCard;
