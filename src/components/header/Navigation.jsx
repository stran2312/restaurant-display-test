import React from "react";

import {Container, Nav, Navbar} from 'react-bootstrap';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Katz Restaurant</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
     )
}

export default Navigation;