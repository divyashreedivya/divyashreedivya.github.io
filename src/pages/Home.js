import React from 'react';
import "../css/home.css";
import profilepic from "../images/profilepic.svg";
import {Container,Row,Col} from "react-bootstrap";
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom';

export default class Home extends React.Component {
  render() {
    return(
   
   <Container fluid className="homeBody">
    <h1>
    <Zoom top cascade>Hey There!     </Zoom>
    </h1>
        <Row>
          <Col xs={12} md={6} md={{order:2}} className="profile">
          <img className=" profileimg" src={profilepic} alt="Profile"></img>
          </Col>
            <Col xs={12} md={6} md={{order:1}}>
            <div className="profile-info">
I am <span className="myname">Divyashree</span> ,<wbr/> a second year<wbr/> BTech- CSE student at Manipal Institute of Technology, Manipal.
I am an aspiring Developer.
            </div>
            </Col>
        </Row>
   </Container>
    )
  }
}
