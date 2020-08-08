import React from 'react';
import Card from 'react-bootstrap/Card';

function TextCard() {
  return (
    <div>
      <Card style={{ width: '30rem', margin: "0.5rem" }} className="TextCard">
        {/* Image */}
        <Card.Img 
          variant="top" 
          src="https://images.unsplash.com/photo-1511017049469-e0d1ba0219a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
          className="TextCard-image"
          roundedCircle
        />

          {/* Content */}
          <div >
            <Card.Text className="ImageCard-text">
              {/* <Card.Title className="TextCard-title">Title</Card.Title> */}
              <p className="TextCard-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
              </p>
             
            </Card.Text>
          </div> 

          
      </Card>
    </div>
  );
}

export default TextCard;