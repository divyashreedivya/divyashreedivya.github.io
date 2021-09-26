import React from 'react';
import {NavLink} from 'react-router-dom';
import Home from '../pages/Home';
import {Link} from "gatsby";
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default function Navigationbar(){
  return(
<Navbar bg="dark" expand="lg" fixed="top" variant="dark">
<Navbar.Brand className="dbrand" href="#home">&#60;D&#47;&#62;</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark"/>
<Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
    <Nav.Link href="#home">Home
      {/* <Link to="#home">Home</Link> */}
      </Nav.Link> 
    <Nav.Link href="#about">About
      {/* <Link to="#about">About</Link> */}
    </Nav.Link>
    <Nav.Link href="#skills">
      {/* <Link to="#skills">Skills</Link> */}Skills
    </Nav.Link>
    <Nav.Link href="#myworks">
      {/* <Link to="#myworks">Works</Link> */}Works
    </Nav.Link>
    <Nav.Link href="#contact">
      {/* <Link to="#contact">Contact</Link> */}Contact
    </Nav.Link>
  </Nav>
</Navbar.Collapse>
</Navbar>
  )
}