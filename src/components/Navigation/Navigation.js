import React from 'react';
import 'react-bootstrap';
import {Link} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';


function Navigation() {
  return(
    <>
    <div className="justify-content-center">
    <Navbar className="navbar text-center justify-content-center" expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="justify-content-center m-auto">
      <Link className="link" to="/">Home</Link>
      <Link className="link" to="/history" eventKey="disabled" disabled>History</Link>
      <Link className="link" to="/art" eventKey="disabled" disabled>Art</Link>
      <Link className="link" to="/events">Events</Link>
      <Link className="link" to="/river" eventKey="disabled" disabled>River</Link>
      <Link className="link" to="/fishing" eventKey="disabled" disabled>Fishing</Link>
      <Link className="link" to="/hunting" eventKey="disabled" disabled>Hunting</Link>
      <Link className="link" to="/maps" eventKey="disabled" disabled>Maps</Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

</div>
</>
  )
}

export default Navigation;

