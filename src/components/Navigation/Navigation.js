import React from 'react';
import 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navigation.css';

function Navigation() {
  return (
    <Navbar
      className='navbar text-center justify-content-center sticky-top'
      expand='lg'
    >
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='justify-content-center m-auto'>
          <Nav.Link className="link">
            <Link className='link' to='/'>
              Home
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/history'>
              History
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/visit'>
              Visit
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/events'>
              Events
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/river'>
              River
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/blog-articles'>
              Blogs
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/press'>
              Press
          </Link>
          </Nav.Link>
          <Nav.Link className="link">
            <Link className='link' to='/maps'>
              Maps
          </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
