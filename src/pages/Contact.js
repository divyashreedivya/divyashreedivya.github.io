import React from 'react';
import Social from '../components/Social.js';
import "../css/home.css";
import { Container } from 'react-bootstrap';

export default class Contact extends React.Component {
  render() {
    return(
      <Container fluid className="contactBody">
        <h1>Contact Me</h1>
        <div className="con">
            <p>Email : divyamanipal01@gmail.com</p>
            <hr/>
            <div className="con-social">
            <Social/>
            </div>
        </div>
      </Container>

    )
  }
}
