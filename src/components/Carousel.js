import React from 'react';
import { UncontrolledCarousel ,Container,Row,Col} from 'reactstrap';
import cert1 from '../img/cert1.jpg';
import cert2 from '../img/cert2.jpg';
import cert3 from '../img/cert3.jpg';
import cert4 from '../img/cert4.jpg';

const items = [
  {
    src: cert1,
    altText: 'Slide 1',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: cert2,
    altText: 'Slide 2',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: cert3,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: cert4,
    altText: 'Slide 3',
    caption: '',
    header: '',
    key: '4'
  }
];
/*
const Example = () => <UncontrolledCarousel items={items} className="carouselimg" />;

export default Example;*/

export default class Carousel extends React.Component {
  render(){
    return(
      <div >
        <Container>
          <Row className="democar">
            <Col xs="12" lg="10">
        <UncontrolledCarousel items={items} className="carouselimg" />
     </Col>
      </Row>
      </Container>
      </div>
    )
  }
}