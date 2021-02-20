import React from 'react';
import './styles.css';

function TextCard(props) {
  return (
    <p className="TextCard-text">{props.text}</p>  
  );
}

export default TextCard;
