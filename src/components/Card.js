import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function ProjectCard() {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1561113415-be643eb42347?ixlib=rb-1.2.1&auto=format&fit=crop&w=2551&q=80" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text> */}
          <p className="card-text"><small className="text-muted">Some quick example text to build on the card title and make up the bulk of
            the card's content.</small></p>
          <Button variant="primary">Go somewhere</Button>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ProjectCard;