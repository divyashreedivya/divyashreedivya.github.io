import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
// import
// {
// BrowserRouter as Router,
// Route,Switch
// } from "react-router-dom";
import Navigationbar from '../components/Navigationbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import MyWorks from './MyWorks';
import Skills from './Skills';

export default class App extends React.Component {
   render() {

    return (
//       <Router>
//       <div className="App">
//         <Navigationbar />
//         <Route exact path="/" component={Home}>
//         </Route>
//         <Route path="/About" component={About}>
//          </Route>
//          <Route path="/Skills" component={Skills}>
//     </Route>
//         <Route path="/MyWorks" component={MyWorks}>
//     </Route>          
//          <Route path="/Contact" component={Contact}>
//         </Route>
//         {/* <Home/>
//         <About/>
//         <Skills/>
//         <MyWorks/>
//         <Contact /> */}
//         </div>
// </Router>
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
