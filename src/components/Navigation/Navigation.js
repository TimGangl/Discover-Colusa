import React from 'react';
import 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
require ('./Navigation.css');


function Navigation() {
  return(
    <div>
    <Navbar className="navbar text-center" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center m-auto">
      <Nav.Link className="link" href="#">Home</Nav.Link>
      <Nav.Link className="link" href="#" eventKey="disabled" disabled>History</Nav.Link>
      <Nav.Link className="link" href="#" eventKey="disabled" disabled>Art</Nav.Link>
      <Nav.Link className="link" href="#">Events</Nav.Link>
      <Nav.Link className="link" href="#" eventKey="disabled" disabled>River</Nav.Link>
      <Nav.Link className="link" href="#" eventKey="disabled" disabled>Fishing</Nav.Link>
      <Nav.Link className="link" href="#" eventKey="disabled" disabled>Hunting</Nav.Link>
      <Nav.Link className="link" href="#" eventKey="disabled" disabled>Maps</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<h1 className="info text-center">Here will be some text</h1>
</div>
  )
}

export default Navigation;

