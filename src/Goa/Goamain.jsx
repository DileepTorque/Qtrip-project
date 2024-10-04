import React, { Component } from "react";
import Goa from "./Thrdpage";
import GoaCards from "./Goa-cards";
import Fstdiv from "../Bengal/Fstdiv";
import "../Bengal/bengalcs.css";
import Scnddiv from "../Bengal/Scnddiv";
import Thrdpage from "./Thrdpage";
import { Link } from "react-router-dom";
export default class Goamain extends Component{
render(){
    return(
     <>
     <Fstdiv/>
     <Scnddiv/> 
  
   <div className="Bnglr">
      {Goa.map((goat)=>{
                return(
                   <Link to={goat.link}> <GoaCards pto={goat.imag} place={goat.place} dura={goat.time}/></Link>
                )
            })}
      </div> 
  
     </>
    )
}
}