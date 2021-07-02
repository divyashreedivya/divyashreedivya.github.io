import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import Navigationbar from '../components/Navigationbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MyWorks from './MyWorks';
import Skills from './Skills';

export default class App extends React.Component {
   render() {

    return (
<div className="App">
<Navigationbar />
<section id="home">
<Home/>
</section>
<section id="about">
<About/>
</section>
<section id="skills">
<Skills/>
</section>
<section id="myworks">
<MyWorks/>
</section>
<section id="contact">
<Contact/>
</section>

</div>
    );
  }

};
