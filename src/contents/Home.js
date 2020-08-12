import React from 'react';
import profilepic from '../img/profilepic.png';
import Social from '../components/Social.js';



export default class Home extends React.Component {
  render() {
    return(
    <div className="condiv">
    <h1>Hello There!</h1>
    <img src={profilepic} alt="Profile" className="profilepic"></img>
    <p className="pstyle">I am Divyashree. Welcome to my page!</p>
    <hr></hr>
    <Social/>
    </div>
    )
  }
}
