import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div className="font nav-header-bar">
            <Navbar collapseOnSelect expand="lg" className="nav-bar">
                <Container>
                    <Link to="/"><img className="logo" src="https://i.ibb.co/SypbXY7/rsz-portfolio-creative-word-over-abstract-geometric-shapes-background-web-banner-portfolio-creative.png" alt="" /></Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="px-7 nav-link">
                            <Nav.Link style={{ color: 'white' }} as={HashLink} to="/">Home</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} as={HashLink} to="/#experience">Skill</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} as={HashLink} to="/#projects">Projects</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} as={HashLink} to="/#about">About</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} as={HashLink} to="/#contact">Contact</Nav.Link>
                            <Nav.Link style={{ color: 'white' }} as={HashLink} to="/blog">Blog</Nav.Link>
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