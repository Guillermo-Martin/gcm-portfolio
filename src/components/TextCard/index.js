import React from 'react';
import Card from 'react-bootstrap/Card';
import './styles.css';

function TextCard(props) {
  return (
    <p className="TextCard-text">{props.text}</p>  
  );
}

export default TextCard;
