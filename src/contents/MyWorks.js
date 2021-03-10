import React from 'react';
import {Container,Col,Row} from 'reactstrap';
import Carousel from '../components/Carousel.js';
import musicpage from '../img/view-page.PNG';
import rtsview from "../img/rtsview.PNG";
import colorview from "../img/colorview.PNG";

export default class MyWorks extends React.Component{
    render(){
        return(
            <div className="condiv">
            <Container>
            <Row >
               <Col xs="12">
                  <header><h1 className="subtopic">My Works</h1></header> 
                   </Col>   
                </Row>
                <Row className="workpage">
                    <Col lg="6">
            <a href="https://divyashreedivya.github.io/music-art-portfolio/" 
            target="_blank" rel="noopener noreferrer">
                <img src={musicpage} alt="Music art portfolio" className="musicimage"></img></a>

            </Col>
                <Col lg="6" className="workdetail" >
                <h5>My Music and art portfolio</h5>
         <p>I have used html, css and javascript to create this page.
            This page is the result of my love for music,
                    art and coding...
            </p>
                    </Col>
                </Row>
                <Row className="workpage">
                    <Col lg="6">
            <a href="https://ragatalasearch.pythonanywhere.com/" 
            target="_blank" rel="noopener noreferrer">
                <img src={rtsview} alt="Raga Tala search" className="musicimage"></img></a>

            </Col>
                <Col lg="6" className="workdetail" >
                <h5>Raga Tala Search</h5>
         <p>A Django app where ragas can be searched 
             in three ways(Search by name, arohanam and avarohanam) and 
             Talas(by name and aksharas).
            </p>
                    </Col>
                </Row>
                <Row className="workpage">
                    <Col lg="6">
            <a href="https://divyashreedivya.github.io/color-memory-game/" 
            target="_blank" rel="noopener noreferrer">
                <img src={colorview} alt="Color memory game" className="musicimage"></img></a>

            </Col>
                <Col lg="6" className="workdetail" >
                <h5>Color memory game</h5>
         <p>A simple memory game where points are obtained by clicking
             on a color not more than once.
            </p>
                    </Col>
                </Row>
                
                </Container>    
            </div>
        )
    }
}