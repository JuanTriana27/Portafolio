import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { RiMenuFill } from "@remixicon/react";

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar expand="lg" expanded={expanded}>
            <Container>
                <Navbar.Brand href="#" className="logo">PORTAFOLIO</Navbar.Brand>

                <Navbar.Toggle
                    aria-controls="navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                >
                    <RiMenuFill />
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#" onClick={() => setExpanded(false)}>Home</Nav.Link>
                        <Nav.Link href="#" onClick={() => setExpanded(false)}>Sobre mí</Nav.Link>
                        <Nav.Link href="#" onClick={() => setExpanded(false)}>Trabajos</Nav.Link>
                        <Nav.Link href="#" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;