import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

 export default class Navigationbar extends React.Component{
   constructor(props){
     super(props);

     this.state={
       isNavOpen: false,
     };
     this.toggleNav=this.toggleNav.bind(this);
     }
     toggleNav(){
       this.setState({
         isNavOpen:!this.state.isNavOpen
       });
     }
   
   render(){
     return(
         <div className="nav">
           <Navbar dark expand="md">
            
             <NavbarToggler onClick={this.toggleNav} className="mr-2"/>
             <NavbarBrand className="mr-auto" href="/" >Portfolio</NavbarBrand> 
             <Collapse isOpen={this.state.isNavOpen} navbar>
               <Nav navbar>
                 <NavItem className="link">
                   <NavLink className="navlink" exact to="/">Home</NavLink>
                 </NavItem>
                 <NavItem className="link">
                   <NavLink className="navlink" to="/about">About</NavLink>
                 </NavItem>
                 {/*<NavItem className="link">
                   <NavLink className="navlink" to="/skills">Skills</NavLink>
     </NavItem>*/}
                 <NavItem className="link">
                   <NavLink className="navlink" to="/myworks">Works</NavLink>
     </NavItem>       
                 <NavItem className="link">
                   <NavLink className="navlink" to="/contact">Contact</NavLink>
                 </NavItem>
               </Nav>
             </Collapse>

             
           </Navbar>
         </div>
     )
   }
 }