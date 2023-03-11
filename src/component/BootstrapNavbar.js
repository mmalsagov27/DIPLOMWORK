import React from "react"; 
import {Navbar, Nav, NavLink} from "react-bootstrap"; 
import { Link } from "react-router-dom"; 
import Login from './Login'; 
import LogOut from './LogOut'; 
import {auth} from '../firebase'; 
import {useAuthState} from 'react-firebase-hooks/auth'; 
 
const BootstrapNavbar = () =>{ 
    const [user] = useAuthState(auth) 
    console.log(user); 
 
    return( 
        <Navbar collapseOnSelect bg="black" expand="sm"> 
 
            <Navbar.Toggle aria-controls="myNavbar"/> 
            <Navbar.Collapse> 
 
                <Nav id="myNavbar"> 
                    <NavLink style={{color: "white" }} as={Link} to="/"> Home </NavLink> 
                    <NavLink style={{color: "white" }} as={Link} to="/Fswrestling">FS-Wrestling</NavLink> 
                    <NavLink style={{color: "white" }} as={Link} to="/Judo">Judo</NavLink> 
                    <NavLink style={{color: "white" }} as={Link} to="/Boxing">Box</NavLink> 
                </Nav> 
 
            </Navbar.Collapse> 
            {user ? <LogOut/> : <Login/>} 
           
 
        </Navbar> 
    ) 
} 
 
export default BootstrapNavbar