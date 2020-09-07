import React from 'react';
import {Card,CardBody,CardTitle,CardText,Fade,Button,
Container,Col,Row} from 'reactstrap';
import {FaInstagramSquare} from 'react-icons/fa';
 

export default class About extends React.Component {
  constructor(props) {
      super(props);
      this.state = { fadeIn: false };
      this.toggle = this.toggle.bind(this);
    }


  render() {
    return(
      <div className="condiv">
      <Container>
        <Row>
        <Col xs="12" >  
        <header><h1 className="subtopic">ABOUT ME</h1></header>
        </Col>
        </Row>
        <p className="pstyle">Hey there!!
        <br></br>

        I am Divyashree, studying BTech-CSE in MIT,Manipal.
        I am interested in web development,ML and coding..</p>
        <Row>
          <Col lg="4">
            <div className="info">
          <h5>Manipal Institute of Technology</h5>
          <hr></hr>
          <p>BTech-CSE<br></br>
             CGPA: 9.5
          </p></div>
          </Col>
          <Col lg="4">
            <div className="info">
              <h5>MGM PU College, Udupi</h5>
              <hr></hr>
              <p>PCMB<br></br> Score: 94%</p>
            </div>
          </Col>
          <Col lg="4">
            <div className="info">
              <h5>Christ School, Manipal</h5>
              <hr></hr>
              <p>CBSE <br></br>
                Score: 10 CGPA</p>
            </div>
          </Col>
        </Row>
        <div className="hobbies">
        <Card>
        <CardBody>
        <CardTitle><h5>Other Interests and Hobbies</h5></CardTitle>
        <Button color="info" onClick={this.toggle}>Click!</Button>
        <Fade in={this.state.fadeIn} className='my-2'>
        <CardText className="cstyle"><strong>Music</strong>: Carnatic music-CCRT scholarship recipient.
        <br></br>
        <strong>Art</strong>: Drawing, Painting and sketching...
        Do check some of my artworks on instagram 
        <a href="https://www.instagram.com/divya.art" target="_blank"
        rel="noopener noreferrer"><FaInstagramSquare size={20}/></a>
        </CardText>
         </Fade>
        </CardBody>
        </Card>
        </div>
    </Container>
      </div>

    )
  }  toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }

}
