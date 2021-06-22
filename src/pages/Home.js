import React from 'react';
import "../css/home.css";
import profilepic from "../images/profilepic.svg";
import {Container,Row,Col} from "react-bootstrap";
import Fade from 'react-reveal/Fade';

export default class Home extends React.Component {
  render() {
    return(
   
   <Container fluid className="homeBody">
        <h1>Welcome!!!</h1>
        <Row>
          <Col xs={12} md={6} md={{order:2}} className="profile">
           
          <img className=" profileimg" src={profilepic} alt="Profile"></img>

          </Col>  
            <Col xs={12} md={6} md={{order:1}}>
              <Fade top cascade>
            <div className="profile-info">
            Hello There!!
I am Divyashree, a second year BTech- CSE student at Manipal Institute of Technology, Manipal.
I am a Full stack developer and coder
            </div>
            </Fade>
            </Col>
        </Row>
   </Container>
    )
  }
}
