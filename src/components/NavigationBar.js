import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="sm" collapseOnSelect>
            <Navbar.Brand>
                <Link to="/" className="navbar-brand">Mahjong Sessions</Link>
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Link to="/create" className="nav-link">New session
                    </Link>
                    <Link to="/players" className="nav-link">Players
                    </Link>
                    <Link to="/about" className="nav-link">About
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;