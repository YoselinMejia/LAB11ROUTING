import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const CustomNavbar = ({ cities }) => {
    
  return (
    <Navbar className="navbarcss" expand="lg">
      <Navbar.Brand as={Link} to="/" className="navbar-css" >City Explorer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/" className="nav-link-custom" >Home</Nav.Link>
        {cities.map(city => (
          <Nav.Link key={city} as={Link} to={`/city/${city}`} className="nav-link-custom" >{city}</Nav.Link>
        ))}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
