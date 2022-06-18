import React from "react";
import '../../assets/css/Main.css';
import { Link } from "react-router-dom";
import {Container, Nav, Navbar} from 'react-bootstrap';
const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >Katz Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link > <Link to="/" className="main-navbar">Home</Link> </Nav.Link>
            <Nav.Link > <Link to="/menu" className="main-navbar">Menu</Link> </Nav.Link>
            <Nav.Link > <Link to="/about" className="main-navbar">About</Link> </Nav.Link>
            <Nav.Link > <Link to="/contact" className="main-navbar">Contact</Link> </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
     )
}

export default Navigation;