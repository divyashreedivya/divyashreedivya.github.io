import React from 'react';
import {Jumbotron,Card,CardBody,CardTitle,CardText,Fade,Button} from 'reactstrap';
//import Example from './CarouselPics.js';
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
    <Jumbotron>
        <header><h1 className="subtopic">ABOUT ME</h1></header>
        <p className="pstyle">Hey there!!
        <br></br>

        I am Divyashree, studying BTech-CSE in MIT,Manipal.
        I am interested in web development,ML and coding..</p>
        <Card>
        <CardBody>
        <CardTitle><h3>Other Interests and Hobbies</h3></CardTitle>
        <Button color="info" onClick={this.toggle}>Click!</Button>
        <Fade in={this.state.fadeIn} className='my-2'>
        <CardText className="pstyle"><strong>Music</strong>: Carnatic music-CCRT scholarship recipient.
        <br></br>
        <strong>Art</strong>: Drawing, Painting and sketching...
        Do check some of my artworks on instagram
        <a href="https://www.instagram.com/divya.art" target="_blank"
        rel="noopener noreferrer"><FaInstagramSquare size={20}/></a>
        </CardText>
         </Fade>
        </CardBody>
        </Card>



    </Jumbotron>
      </div>

    )
  }  toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }

}
