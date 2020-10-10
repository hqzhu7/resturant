import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav';
import {Link} from "react-router-dom";


const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit', 
}

const Header = ()=> {
    return(
        <Navbar collapseOnSelect expand="lg" bg="light" >
            <Navbar.Brand href="/">小苏州 - Cafe Moment</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavDropdown.Item href="#action/3.1"><Link style={linkStyle} to="/dimsum">点心</Link></NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}



export default Header;