import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/about.css";
import {FaGraduationCap,FaBriefcase,FaInstagram,FaPalette} from 'react-icons/fa';
import {GiMicrophone} from 'react-icons/gi';
import { Container,Col,Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const exps = [
  // {
  //   "role":"Web Master",
  //   "time":"June 2021-Present",
  //   "org":"IEEE SBM"
  // },
  {
    "role":"Management Committee Member",
    "time":"July 2020-June 2021",
    "org":"IEEE SBM"
  },
  {
    "role":"Management Committee Member",
    "time":"July 2020-June 2021",
    "org":"Music and Fine Arts Club, Manipal"
  },
];
const edus = [
  {
    "org":"MIT, Manipal",
    "score":"9.5 CGPA",
    "desc":"BTech CSE"
  },
  {
    "org":"MGM PU College, Udupi",
    "score":"94%",
    "desc":"PCMB"
  },
  {
    "org":"Christ School, Manipal",
    "score":"10 CGPA",
    "desc":""
  }
]

export default function About(){
    return(
  <Container fluid className="aboutBody">
        <h1>About Me</h1>
        <h4>Experience</h4>
        {exps.map((exp,key)=>(
          <Fade key={key}>
        <Row>
        <Col xs={3} sm={1}>
        <div className="exp-icon">
          <FaBriefcase className="iconfa" size="40px"/>
          </div>
        </Col>
          <Col xs={9} sm={11} className="exp">
                   <Row>
            <Col xs={11} sm={4} className="info">{exp.role}</Col>
            <Col  xs={11} sm={4} className="info">{exp.org}</Col>
            <Col xs={11} sm={4} className="info">{exp.time}</Col>
            </Row>

          </Col>
         </Row>
         </Fade>
        // {/* </div> */}
                      ))}
        <h4>Education</h4>
        {edus.map((edu,key)=>(
          <Fade key={key}>
        <Row >
        <Col xs={3} sm={1}>
        <div className="exp-icon">
        <FaGraduationCap className="iconfa" size="40px"/>
          </div>
        </Col>
          <Col xs={9} sm={11} className="exp">
                   <Row>
            <Col xs={11} sm={4} className="info">{edu.org}</Col>
            <Col xs={11} sm={4} className="info">{edu.desc}</Col>
            <Col xs={11} sm={4} className="info">{edu.score}</Col>
            </Row>

          </Col>
        </Row>
        </Fade>
                      ))}
       
        <h4>Extra Curricular Activities</h4>
        <Fade left>
        <Row className="extra">
        <Col xs={3} sm={1}>
        <div className="exp-icon">
          <GiMicrophone className="iconfa" size="40px"/>
          </div>
        </Col>
          <Col xs={9} sm={11} className="exp">
          Carnatic Music Vocalist - Have rendered many concerts
          </Col>
         </Row>
         <Row className="extra">
        <Col xs={3} sm={1}>
        <div className="exp-icon">
          <FaPalette className="iconfa" size="40px"/>
          </div>
        </Col>
          <Col xs={9} sm={11} className="exp">
          Drawing, Painting    
              <a href="https://www.instagram.com/divya.art" target="_blank"
        rel="noopener noreferrer">&nbsp;&nbsp;<FaInstagram size={20}/></a>
          </Col>
         </Row>

          </Fade>
  </Container>

    )

}
