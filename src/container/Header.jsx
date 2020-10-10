import React from 'react';
import {Link} from "react-router-dom";
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';


const linkStyle = {
    color: 'inherit',
    textDecoration: 'inherit', 
}

const Header = ()=> {
    return(  
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Container 
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Navbar.Brand href="/">小苏州 - Cafe Moment</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown.Item as='button' href="#action/3.1"><Link style={linkStyle} to="/dimsum">点心</Link></NavDropdown.Item>
                            <NavDropdown.Item as='button' href="#action/3.2">主食</NavDropdown.Item>
                            <NavDropdown.Item as='button' href="#action/3.3">炒菜</NavDropdown.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;