import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Carousel from '../components/Carousel.js';

export default class Skills extends React.Component{
    render(){
        return(
            <div className="condiv">
            <Container>
            <Row>
                <Col lg="12">
                <h4 className="cert">Skills</h4>
                <div className="certdiv">
                  <p>C++ , Python , C , HTML , CSS ,
                       Javascript , ReactJs , SQLite... 
                        </p>
                </div>
                </Col>  
                </Row>
                <Row>  
                <Col lg="12">    
                <h4 className="cert">Certificates</h4>
                <Col xs="0" lg="3"></Col>
                <Col md="12" lg="6">
         <p className="certtext">Some of my certificates...</p>
                 <Carousel></Carousel> </Col>
                 </Col> 
                 </Row>
            </Container>
            </div>
        )
    }
}