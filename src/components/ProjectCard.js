import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

function ProjectCard(props) {
  return (
    <div>

      {/* Main card */}
      <Card style={{ width: '20rem'}}>
        {/* Card image */}
        <Card.Img variant="top" src={props.src} className="card-img" />
        {/* Card body */}
        <Card.Body className="card-body">
          <Card.Title>{props.title}</Card.Title>
          <div className="card-div">
            <Card.Text>
              {props.description}
            </Card.Text>
          </div>
          
          <div className="card-div">
            <p className="card-text">
              <small className="text-muted">{props.tech}</small>
            </p>
          </div>
          

          <a href="https://github.com/Guillermo-Martin" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>


        </Card.Body>
      </Card>

    </div>
  );
}

export default ProjectCard;
