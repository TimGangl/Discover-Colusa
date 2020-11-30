import React from 'react';
import 'react-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././Navigation.css';


function Navigation() {
  return(
    <div>
    <Navbar className="navbar" bg="light" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">History</Nav.Link>
      <Nav.Link href="#link">Art</Nav.Link>
      <Nav.Link href="#link">Events</Nav.Link>
      <Nav.Link href="#link">River</Nav.Link>
      <Nav.Link href="#link">Fishing</Nav.Link>
      <Nav.Link href="#link">Hunting</Nav.Link>
      <Nav.Link href="#link">Maps</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<h1 className="text-center">Here will be some text</h1>
</div>
  )
}

export default Navigation;

