import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';

function ImageCard(props) {
  // save props.link and props.github to variable to use for conditional rendering
  let link = props.link;
  let github = props.github;

  return (
    <div className="ImageCard-container">
      <Card>
        {/* Image */}
        <Card.Img 
          variant="top" 
          src={props.src}
          className="ImageCard-img"
        />

          {/* Content */}
          <div className="ImageCard-overlay">
            <Card.Text className="ImageCard-text">
              <Card.Title className="ImageCard-title">{props.title}</Card.Title>
              <p>{props.description}</p>
              <div>
                <small className="ImageCard-tech">Made using: {props.tech}</small>
              </div>
              <div>
                {/* if link is false (i.e. no link available) render github icon only; else if github is false (i.e. no github available) render link icon only; otherwise show both */}
                {
                  !link 
                  ? 
                    <div>
                      <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github ImageCard-icon"></i></a> 
                    </div>
                  : 
                    !github
                    ?
                      <div>
                        <a href={props.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-link ImageCard-icon"></i></a>
                      </div>
                    :
                      <div>
                        <a href={props.link} target="_blank" rel="noopener noreferrer"><i className="fas fa-link ImageCard-icon"></i></a>
                        <a href={props.github} target="_blank" rel="noopener noreferrer"><i className="fab fa-github ImageCard-icon"></i></a> 
                      </div>
                }
              </div>
            </Card.Text>
          </div> 
      </Card>
    </div>
  );
}

export default ImageCard;
