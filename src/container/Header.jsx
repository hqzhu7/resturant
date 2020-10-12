import React from 'react';
import {Link} from "react-router-dom";
import {Container, Navbar, NavDropdown, Nav} from 'react-bootstrap';


const linkStyle = {
    color: 'inherit',
    display: 'inline-block',
    textDecoration: 'inherit', 
    width: '100%',
    height: '100%',
}

const Header = ()=> {
    return(  
        <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
            <Container 
                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Navbar.Brand><Link style={linkStyle} to="/home">小苏州 - Cafe Moment</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown.Item as='span' href="#action/3.1"><Link style={linkStyle} to="/dimsum">点心</Link></NavDropdown.Item>
                            <NavDropdown.Item as='span' href="#action/3.2">主食</NavDropdown.Item>
                            <NavDropdown.Item as='span' href="#action/3.3">炒菜</NavDropdown.Item>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;