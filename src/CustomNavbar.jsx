import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles.css';

const CustomNavbar = ({ cities }) => {
    
  return (
    <Navbar className="navbar-css" bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">City Explorer</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        {cities.map(city => (
          <Nav.Link key={city} as={Link} to={`/city/${city}`}>{city}</Nav.Link>
        ))}
      </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
