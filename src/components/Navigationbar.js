import React from 'react';
import {NavLink} from 'react-router-dom';
import Home from '../pages/Home';
import {Link} from "gatsby";
import  Navbar  from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
//  export default class Navigationbar extends React.Component{
   
//    render(){
//      return(
//          <div className="nav">
//          <nav className="navbar fixed-top navbar-expand-lg navbar-dark">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Navbar</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//         {/* <NavLink className="navlink" exact to="/">Home</NavLink> */}
//         </li>
//         <li className="nav-item">
//         <NavLink className="navlink" to="/about">About</NavLink>
//         </li>
//         <li className="nav-item">
//         <NavLink className="navlink" to="/skills">Skills</NavLink>
//         </li>
//         <li className="nav-item">
//         <NavLink className="navlink" to="/myworks">Works</NavLink>
//         </li>
//         <li className="nav-item">
//         <NavLink className="navlink" to="/contact">Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//          </div>
//      )
//    }
//  }

export default function Navigationbar(){
  return(
//     <Navbar bg="light" expand="lg">
//   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//   <Navbar.Collapse id="basic-navbar-nav">
//     <Nav className="mr-auto">
//       <Nav.Link href="/">
//         <Link to="/">Home</Link></Nav.Link>
//       <Nav.Link href="/About">
//         <Link to="/About">About</Link>
//       </Nav.Link>
//       <Nav.Link href="/Skills">
//         <Link to="/Skills">Skills</Link>
//       </Nav.Link>
//       <Nav.Link href="/MyWorks">
//         <Link to="/MyWorks">Works</Link>
//       </Nav.Link>
//       <Nav.Link href="/Contact">
//         <Link to="/Contact">Contact</Link>
//       </Nav.Link>
//     </Nav>
//   </Navbar.Collapse>
// </Navbar>
<Navbar bg="dark" expand="lg" fixed="top" variant="dark">
<Navbar.Brand href="#home">Portfolio</Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav"/>
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