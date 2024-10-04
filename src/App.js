
import React, { Component } from "react";
import Cards from "./Cards";
import Middiv from "./Middiv";
import Navq from "./Navq";
import api from "./Qtrip";
import "./Qcss.css";
import "./navb.css"


import { Link } from "react-router-dom";
export default class App extends Component{
  render(){
    return(
     <>
       <Navq/>
      <Middiv/>
      <div className="DIleep2">
      {api.map((x)=>{
                return(
                    <Link style={{textDecoration:"none"}} to={x.link}><Cards image={x.srcImg} firsthead={x.Head} dhead={x.smallHead}/></Link>
                )
            })}
      </div> 
   
      
     </>
    )
  }
}