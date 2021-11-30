import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="font nav-header-bar">
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img className="logo" src="https://i.ibb.co/SypbXY7/rsz-portfolio-creative-word-over-abstract-geometric-shapes-background-web-banner-portfolio-creative.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Link style={{ color: 'white' }} to="/">Home</Link>
                            <Link style={{ color: 'white' }} to="/">Our Team</Link>
                            <Link style={{ color: 'white' }} to="/contact">Contact</Link>
                        </Nav>
                        <Navbar.Text>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div>
    );
};


export default Header;