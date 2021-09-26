import React from 'react';
import CarouselCert from '../components/CarouselCert.js';
import "../css/skills.css";
import girlLaptop from "../images/girlLaptop.svg";
import SkillIcon from '../components/SkillIcons.js';
import { Container,Col,Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

export default function Skills(){
        return(
            <Container fluid className="skillBody">
            <h1>Skills</h1>
            <Row>
            <SkillIcon/>
              
              {/* <div className="col-xs-6">
                  <img className="girl1" src={girlLaptop} alt="girl"></img>
              </div> */}
         </Row>
         <h4>Courses & Certifications</h4>
         <Row className="car-row">
             <Col xs={0} md={1}></Col>
            
             <Col xs={7} md={4} className="carousel">
             <Fade left>
             <CarouselCert/>
             </Fade>
             </Col>

            </Row>

            </Container>

        )
}