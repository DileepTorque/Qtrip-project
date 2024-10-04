import React, { Component } from "react";
export default class Navq1 extends Component{
    render(){
        return(
            <>
            <ul className="navib">
               <li id="qtrip">Qtrip</li>
              <div className="home">
              <li>home</li>
               <li>reservations</li>
               <li id="orange">Login here</li>
               <li>
                <button> Register</button>
               </li>
              </div>
            </ul>
            </>
        )
    }
}