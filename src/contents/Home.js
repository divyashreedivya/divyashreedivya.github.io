import React from 'react';
import profilepic from '../img/profilepic.jpg';
import Social from '../components/Social.js';
import {Container,Row,Col} from 'reactstrap';


export default class Home extends React.Component {
  render() {
    return(
   
    <div className="home">
     
     <Container>
    
    <Row>
    <Col lg="6">  
    <img src={profilepic} alt="Profile" className="profilepic"></img>
    </Col>
    <Col lg="6">
    <h1 className="hstyle hpstyle">Hello There!</h1>
    <p className="hstyle ">I am Divyashree. Welcome to my page!</p>
    </Col>
    </Row>
    <hr></hr>

  </Container>
  <footer>
  <Social></Social>
  </footer>
  </div>
  
    )
  }
}
