import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import Navbar from './Navbar';
import {Route,Routes} from "react-router-dom";

const App = () => {
  return (<>
    <Navbar/>
  <Routes>
  <Route exact path="/" element ={<Home/>}/>
    <Route exact path="/events" element ={<Events/>}/>
    <Route  path="/about" element ={<About/>}></Route>
    <Route  path="/contact" element ={<Contact/>}></Route>
  </Routes>
</>
  )};

export default App;
