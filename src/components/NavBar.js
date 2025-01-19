import React from 'react'
import navStyles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {

  const currentUser = useCurrentUser();

  const loggedInIcons = <>
  <NavLink exact className={navStyles.NavLink}  
  to='/'
  onClick={() => {}}
  >Logout</NavLink>

  <NavLink exact className={navStyles.NavLink}  
  to={`/profiles/${currentUser?.profile_id}`}
  onClick={() => {}}
  >
    {currentUser?.username}</NavLink> 
  </>;

  const loggedOutIcons = <>
  <NavLink exact className={navStyles.NavLink} 
  activeClassName={navStyles.Active} 
  to='/login'>Login</NavLink>

  <NavLink exact className={navStyles.NavLink} 
  activeClassName={navStyles.Active} 
  to='/register'>Register</NavLink>
  </>;

  return (
    <Navbar className={navStyles.NavBar} expand="md" fixed='top'>
        <Container>
            <NavLink exact className={navStyles.NavLink} to='/'>
                <Navbar.Brand>Hunter<i class="fa-brands fa-raspberry-pi"></i>Gatherer</Navbar.Brand>
            </NavLink>            
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto text-left">
                    <NavLink exact className={navStyles.NavLink} activeClassName={navStyles.Active} to='/'>Home</NavLink>
                    {currentUser ? loggedInIcons : loggedOutIcons}                
                    </Nav>                        
            </Navbar.Collapse>
        </Container>        
    </Navbar>
  )
}

export default NavBar