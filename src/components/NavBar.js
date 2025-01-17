import React from 'react'
import styles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed='top'>
        <Container>
            <NavLink to='/'>
                <Navbar.Brand>Hunter<i class="fa-brands fa-raspberry-pi fa-xl"></i>Gatherer</Navbar.Brand>
            </NavLink>            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Login</NavLink>                    
                    <NavLink to='/register'>Register</NavLink>                    
                    </Nav>                        
            </Navbar.Collapse>
        </Container>        
    </Navbar>
  )
}

export default NavBar