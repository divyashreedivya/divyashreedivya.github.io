import React,{useState} from 'react';
import "../css/works.css";
import musicpage from '../images/view-page.jpg';
import rtsview from "../images/rtsview.jpg";
import colorview from "../images/colorview.jpg";
import aarogyasevaview from "../images/aarogyaSeva.jpg";
import pra from "../images/pra.png";
import { Container,Col,Row,Button } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';

export default function MyWorks(){
          const [expanded,setExpanded] = useState(false);
          const [itemsToShow,setItemsToShow] = useState(3);
           const  works=[
            {
            "image":rtsview,
            "title":"Raga Tala Search",
            "desc":"A Django app where ragas can be searched in three ways(Search by name, arohanam and avarohanam) and Talas(by name and aksharas)",
            "url":"https://ragatalasearch.pythonanywhere.com/"
            }
            ,
            {
                "image":aarogyasevaview,
            "title":"Aarogya Seva",
            "desc":"A MERN stack application to connect healthcare providers, volunteers and users",
            "url":"https://github.com/ik159/Antrix-ArogyaSeva"
            }
            ,
            {
                "image":pra,
                "title":"Page Replacement Algorithms Visualizer",
                "desc":"A django web application that visualizes 3 page replacement algorithms for given reference string and frame size",
                "url":"https://pagereplacement.herokuapp.com/"
            },
            {
                "image":musicpage,
            "title":"My Music and art portfolio",
            "desc":"I have used html, css and javascript to create this page. This page is the result of my love for music, art and coding...",
            "url":"https://divyashreedivya.github.io/music-art-portfolio/"
            },
            {
                "image":colorview,
            "title":"Color memory game",
            "desc":"A simple memory game in React Js where points are obtained by clicking on a color not more than once.",
            "url":"https://divyashreedivya.github.io/color-memory-game/"
            },
            // {
            //     "image":musicpage,
            // "title":"My Music and art portfolio",
            // "desc":"I have used html, css and javascript to create this page. This page is the result of my love for music, art and coding..."
            // },
            // {
            //     "image":colorview,
            // "title":"Color memory game",
            // "desc":"A simple memory game where points are obtained by clicking on a color not more than once."
            // },

            ];

    const showMore= ()=>{
        if(itemsToShow===3){
            setItemsToShow(works.length)
            setExpanded(true)
        }
        else{
            setItemsToShow(3);
            setExpanded(false);
        }
    }

        return(
            <Container fluid className="worksBody">
<h1>Works</h1>
                <Row>
                {works.slice(0,itemsToShow).map((work,key)=>(
                   
                    <Col md={4} key={key}className="workInfo">
                         <Zoom>
                            <h5>{work.title}</h5>
                            <a href={work.url} target="_blank" rel="noopener noreferrer">
                                <img className="workPic" src={work.image} alt="Work pic"></img>
                            </a>
                            <p>{work.desc}</p>
                            </Zoom>
                    </Col>
                    ))}
                </Row>
            <Button className="showmore" onClick={showMore}>
                {expanded?(
                <span>Show Less</span>):
                (<span>Show More</span>)}
            </Button>
            </Container>
                
        )
}