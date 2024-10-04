import React, { Component } from "react";
import Fstdiv from "./Fstdiv"
import "./bengalcs.css";
// import Scnddiv from "./Scnddiv";
import Axis from "./Axioos";
// import Thrdiv from "./Thrdiv";
// import bngl from "./Data";
// import { Link } from "react-router-dom";
export default class Bangloremain extends Component{
    
    render(){
        return(
            <>
            <Fstdiv/>
            {/* <Scnddiv/> */}
            {/* <Link  to="/northgoa" className="linking">
            <div className="Bnglr">
      {bngl.map((bng)=>{
                return(
                    <Thrdiv pto={bng.imag} place={bng.place} dura={bng.time}/>
                )
            })}
      </div>
            </Link> */}
            <Axis/>
            </>
        )
    }
}
