import React from "react";
import {FaLinkedin ,FaFacebookSquare,FaInstagramSquare,FaGithubSquare } from "react-icons/fa";

export default class Social extends React.Component{
  render() {
    return(
      <div className="social">
      <a href="https://www.linkedin.com/in/divyashree-6851731b2/"
       target="_blank" rel="noopener noreferrer" 
       className="social-icon" ><FaLinkedin size={40}/></a>
       <a href="https://www.facebook.com/divyashree.manipal" target="_blank"
       rel="noopener noreferrer">
       <FaFacebookSquare size={40}/></a>
       <a href="https://www.instagram.com/divya_manipal" target="_blank"
       rel="noopener noreferrer"><FaInstagramSquare size={40}/></a>
       <a href="https://github.com/divyashreedivya" target="_blank"
       rel="noopener noreferrer"><FaGithubSquare size={40}/></a>
      </div>
    )
  }
}