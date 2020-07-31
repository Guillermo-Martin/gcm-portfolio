import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Navigation() {
  return (
    <div>
      <Container fluid>

        <Navbar expand="lg" fixed="sticky">

          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          {/* Links */}
          <Navbar.Collapse className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>Disabled</Nav.Link>
              </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

      </Container>

    </div>
  );
}

export default Navigation;
