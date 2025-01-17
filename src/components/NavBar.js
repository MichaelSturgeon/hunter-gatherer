import React from 'react'
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap'

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
            <Navbar.Brand>Hunter<i class="fa-brands fa-raspberry-pi fa-xl"></i>Gatherer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >Login</Nav.Link>                    
                    <Nav.Link >Register</Nav.Link>                    
                    </Nav>                        
            </Navbar.Collapse>
        </Container>        
    </Navbar>
  )
}

export default NavBar