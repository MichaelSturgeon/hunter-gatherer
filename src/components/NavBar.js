// Imports
import React from 'react';
import navStyles from '../styles/NavBar.module.css';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCurrentUser, useSetCurrentUser } from '../contexts/CurrentUserContext';
import axios from 'axios';
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";

const NavBar = () => {
  // Using the custom hook to manage navbar expansion state and reference for outside click
  const { expanded, setExpanded, ref } = useClickOutsideToggle();
  // Getting the current user from context and setting the current user in context
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();
  // Function to handle sign out logic
  const handleSignOut = async () => {
    try {
      // Sending POST request to log the user out
      await axios.post('dj-rest-auth/logout/');
      setCurrentUser(null);
    } catch (error) {      
    }
  };
  // JSX for logged-in user navigation items
  const loggedInIcons = (
  <>
  <NavLink exact className={navStyles.NavLink}  
  to='/'
  onClick={handleSignOut}
  >Logout</NavLink>
  <NavLink exact className={navStyles.NavLink}  
  to={`/profiles/${currentUser?.profile_id}`}
  >
    {currentUser?.username}</NavLink> 
  </>
  );
  // JSX for logged-out user navigation items
  const loggedOutIcons = (
  <>
  <NavLink exact className={navStyles.NavLink} 
  activeClassName={navStyles.Active} 
  to='/login'>Login</NavLink>

  <NavLink exact className={navStyles.NavLink} 
  activeClassName={navStyles.Active} 
  to='/register'>Register</NavLink>
  </>
);

return (
    // Navbar component with toggling for responsive behavior
    <Navbar expanded={expanded} className={navStyles.NavBar} expand="md" fixed='top'>
        <Container>
            <NavLink exact className={navStyles.NavLink} to='/'>
                <Navbar.Brand>Hunter<i class="fa-brands fa-raspberry-pi"></i>Gatherer</Navbar.Brand>
            </NavLink>
                {/* Navbar toggle button for mobile view */}            
                <Navbar.Toggle 
                ref={ref}
                onClick={() => setExpanded(!expanded)} 
                aria-controls="basic-navbar-nav" />
                {/* Navbar collapse (the actual navigation links) */}
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