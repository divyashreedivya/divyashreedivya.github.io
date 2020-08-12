import React from 'react';
import Navitem from './Navitem.js';

export default class Navbar extends React.Component {

  render() {
    return(
      <nav>
      <h1 className="heading">My Portfolio</h1>
      <hr/>
      <ul>
      <Navitem item="Home" tolink="/" ></Navitem>
      <Navitem item="About" tolink="/about"  ></Navitem>
      <Navitem item="Contact" tolink="/contact"  ></Navitem>
      </ul>
      </nav>
    )
  }
}
