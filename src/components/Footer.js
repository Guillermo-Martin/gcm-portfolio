import React from 'react';
import Nav from 'react-bootstrap/Nav';

function Footer() {
  
  return (
    <Nav className="justify-content-center Footer">
      
      <Nav.Item>
        <Nav.Link className="Footer-copyright" href="/">&copy; 2020 Copyright Guillermo Martin.</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link href="/gcm-portfolio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github Footer-icon"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://www.linkedin.com/in/guillermo-martin-10441046/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin Footer-icon"></i></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="mailto:gscalica@gmail.com"><i className="far fa-envelope Footer-icon"></i></Nav.Link>
      </Nav.Item>
        
    </Nav>  
  );
}

export default Footer;
