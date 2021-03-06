import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

function Navigation() {
  return (
    <div>
      <Container fluid>

        <Navbar expand="lg" fixed="top" className="Navbar">
        
          {/* <Navbar.Brand><Link to='/gcm-portfolio' className="Navbar-link">Guillermo Martin</Link></Navbar.Brand> */}
          <Navbar.Brand><Link to='/' className="Navbar-link">Guillermo Martin</Link></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Links */}
          <Navbar.Collapse className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/gcm-portfolio/#about" className="Navbar-link">About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                {/* <Link to="/gcm-portfolio/portfolio" className="Navbar-link">Portfolio</Link> */}
                <Link to="/portfolio" className="Navbar-link">Portfolio</Link>
              </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

      </Container>

    </div>
  );
}

export default Navigation;
