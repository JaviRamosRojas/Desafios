import React from 'react';
import logo from './logo.png';
import * as ReactBootStrap from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <header>
      <ReactBootStrap.Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky="top">
        <ReactBootStrap.Container>
          <img src={logo} alt="logo" style={{ width: '55px' }} />
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-ReactBootStrap.Navbar-nav" />
          <ReactBootStrap.Navbar.Collapse align="start" id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <ReactBootStrap.Nav.Link href="#features">Inicio</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="#pricing">Contáctanos</ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown title="Productos" id="collasible-nav-dropdown">
                <ReactBootStrap.NavDropdown.Item href="#action/3.1">Action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.2">Another action</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="#action/3.3">Something</ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Divider />
                <ReactBootStrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>


          <CartWidget />



        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </header>
  );
}

export default NavBar;