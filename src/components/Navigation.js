import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Container fluid>

        <Navbar expand="lg" fixed="sticky">

          <Navbar.Brand><Link to='/'>Guillermo Martin</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          {/* Links */}
          <Navbar.Collapse className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="#about">About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

      </Container>

    </div>
  );
}

export default Navigation;