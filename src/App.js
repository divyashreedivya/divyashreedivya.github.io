import React from 'react';
import './App.css';
import
{
BrowserRouter as Router,
Route,
} from "react-router-dom";
import Navigationbar from './components/Navigationbar';
import Home from './contents/Home';
import About from './contents/About';
import Contact from './contents/Contact';
import MyWorks from './contents/MyWorks';


export default class App extends React.Component {
   render() {

    return (
      <Router>
      <div className="App">
        <Navigationbar />
        <Route exact path="/">
        <Home />
        </Route>
        <Route path="/about">
         <About />
         </Route>
        <Route path="/myworks">
           <MyWorks/>
    </Route>          
         <Route path="/contact">
         <Contact />
        </Route>


      </div>
      </Router>
    );
  }

};
