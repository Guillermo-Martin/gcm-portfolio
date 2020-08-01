import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <div>
      <Container fluid>

        <Navbar expand="lg" fixed="sticky">

          <Navbar.Brand href="#home">Guillermo Martin</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          {/* Links */}
          <Navbar.Collapse className="justify-content-end">
              <Nav.Item>
                <Nav.Link href="/home">About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="link-1">Portfolio</Nav.Link>
              </Nav.Item>
          </Navbar.Collapse>
        </Navbar>

      </Container>

    </div>
  );
}

export default Navigation;
