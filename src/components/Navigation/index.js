import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './styles.css';

function Navigation() {
  return (
    <div>
      <Container fluid>

        <Navbar expand="lg" fixed="top" className="Navbar">
        
          <Navbar.Brand><Link to='/gcm-portfolio' className="Navbar-link">Guillermo Martin</Link></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Links */}
          <Navbar.Collapse className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/gcm-portfolio/#about" className="Navbar-link">About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Link to="/gcm-portfolio/portfolio" className="Navbar-link">Portfolio</Link>
              </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

      </Container>

    </div>
  );
}

export default Navigation;
