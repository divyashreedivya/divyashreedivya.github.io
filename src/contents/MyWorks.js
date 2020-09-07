import React from 'react';
import {Container,Col,Row} from 'reactstrap';
import Carousel from '../components/Carousel.js';
import musicpage from '../img/view-page.PNG';

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
                <Row>
                <Col lg="6">
                <h4 className="cert">Skills</h4>
                <div className="certdiv">
                  <p>C++ , Python , C , HTML , CSS ,
                       Javascript , ReactJs , SQLite... 
                        </p>
                </div>
                </Col>    
                <Col lg="6">    
                <h4 className="cert">Certificates</h4>
                <Col md="12">
         <p className="certtext">Some of my certificates...</p>
                 <Carousel></Carousel> </Col>
                 </Col> 
                 </Row>
                </Container>    
            </div>
        )
    }
}