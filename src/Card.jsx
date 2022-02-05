import React from 'react';
import UBA from "./images/UBA.png"

import "./Card.css";
const Card = (props) => {
    return <>
                        <div className="col-md-4 col-10 mx-auto">
                        <div className="card" >
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{props.text}</p>
  </div>
</div>
 </div>
 
    </>
};

export default Card;
