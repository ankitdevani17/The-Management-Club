import React from 'react';

import Home from './Home';
import About from "./About";
import Events from "./Events";
import Contact from "./Contact";
import Navb from './Navb';
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
