import React, { Component } from "react";
import Kcards from "./kcards";
import Kolkata from "./kdata";
import Fstdiv from "../Bengal/Fstdiv";
import Scnddiv from "../Bengal/Scnddiv";
import "../Bengal/bengalcs.css";
import { Link } from "react-router-dom";
export default class Kolkmain extends Component{
    render(){
        return(
    <>
     <Fstdiv/>
     <Scnddiv/> 
    <Link to="/" className="linking">
    <div className="Bnglr">
       {Kolkata.map((y)=>{
        return(
          <Kcards pto={y.imag} place={y.place} dura={y.time}/>
        )
       })}
        
      </div>
    </Link>
    </>
        )
    }}