import React from "react";
import "../css/skills.css";
import { Container,Row,Col } from "react-bootstrap";
import "devicon/devicon.min.css";
import Fade from 'react-reveal/Fade';

export default function SkillIcon(){
            const icons=[
                {"iconi":"devicon-cplusplus-line"},
                {"iconi":"devicon-c-line"},
                {"iconi":"devicon-react-original"},
                {"iconi":"devicon-nodejs-plain"},
                {"iconi":"devicon-python-plain"},
                {"iconi":"devicon-django-line"},
                {"iconi":"devicon-html5-plain-wordmark"},
                {"iconi":"devicon-css3-plain-wordmark"},
                {"iconi":"devicon-javascript-plain"},
                {"iconi":"devicon-java-plain-wordmark"},
                {"iconi":"devicon-bootstrap-plain-wordmark"},
                {"iconi":"devicon-mongodb-plain-wordmark"},
                {"iconi":"devicon-figma-plain"},
                {"iconi":"devicon-git-plain-wordmark"},
                {"iconi":"devicon-inkscape-plain-wordmark"},
                {"iconi":"devicon-cplusplus-line"},
            ]

        return(
           <Container className="skillIcons">
                <Row>
                {icons.map((icon,key)=>(

                <Col key={key} xs={2} sm={1} className="sicon">
                                    <Fade left>
                      <i className={icon.iconi}></i>
                      </Fade>
                </Col>

            ))}
                </Row>
           </Container>
        )

}