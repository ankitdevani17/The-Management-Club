import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';
import Home from "./"
const Navbar = () => {
  return (<>
<nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>    
    </ul>
  </div>  
</nav>
  </>
  );
};

export default Navbar;
{/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">The Management Club</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
 <NavLink exact activeclassname = "active_clas " to ='/'>Home</NavLink>
      </li>
      <li className="nav-item active">
 <NavLink activeclassname = "active_clas " to ='/events'>Events</NavLink>
      </li>
      <li className="nav-item active">
 <NavLink activeclassname = "active_clas " to ='/contact'>Contact</NavLink>
      </li>


    </ul>

  </div>
</nav> */}