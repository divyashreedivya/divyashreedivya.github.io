import React from 'react';
import {Jumbotron, Badge} from "reactstrap";
import Social from '../components/Social.js';

export default class Contact extends React.Component {
  render() {
    return(
      <div className="condiv">
      <Jumbotron>
      <header><h1 className="heading">CONTACT ME</h1></header>
      <hr/>

      <p><Badge>Email</Badge> : divyamanipal01@gmail.com</p>

      </Jumbotron>
      <Social/>
      </div>
    )
  }
}
