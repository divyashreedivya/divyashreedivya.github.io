import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import cert1 from '../images/cert1.jpg';
import cert2 from '../images/cert2.jpg';
import cert3 from '../images/cert3.jpg';
import cert4 from '../images/cert4.jpg';

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

export default class CarouselCert extends React.Component {
  render(){
    return(
     <div>
 <Carousel showThumbs={false}>
                {/* <div>
                    <img src={cert1} alt="cert1"/>
                </div>
                <div>
                    <img src={cert2} alt="cert2"/>
                </div>
                <div>
                    <img src={cert3} alt="cert3"/>
                </div>
                <div>
                    <img src={cert4} alt="cert4"/>
                </div> */}
                {items.map((item)=>(
                   <div key={item.key}>
                   <img src={item.src} alt={item.altText}/>
               </div>
                )
                )}
            </Carousel>
     </div>
    )
  }
}