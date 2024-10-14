import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './images/logo.jpg'; // Add your logo image path here

export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" className="navbar-dark">
                {/* Left-aligned logo */}
                <Navbar.Brand href="/" className="pl-6"> {/* Added some padding-left for spacing */}
                    <img 
                        src={logo} 
                        alt="Company Logo" 
                        style={{ width: '50px', height: '50px' }} 
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"> {/* Align links to the right */}
                    <Nav>
                        <NavLink className="d-inline p-2 text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-inline p-2 text-white" to="/department">
                            Department
                        </NavLink>
                        <NavLink className="d-inline p-2 text-white" to="/employee">
                            Employee
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
