import React from 'react';
import Card from './Card';
import Sdata from './Sdata';
import "./Events.css"
const Events = () => {
  return (<>
      <div className = "my-5">
         <h1 className = "text-center">
           Events 2021-22
         </h1>
      </div>
      <div className ="container-fluid mb-5">
        <div className="row">
          <div className = "col-10 mx-auto">
          <div className = "row gy-4"> 
        {
           Sdata.map((val,ind) =>{
             return  <Card key ={ind}  imgsrc = {val.imgsrc} text={val.text}/>
           })
       }
          </div>
          </div> 
        </div>
      </div>
</>
  )};

export default Events;
