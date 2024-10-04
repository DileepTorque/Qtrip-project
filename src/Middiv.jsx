import React, { Component } from "react";
// import "./navb.css";
export default class Middiv extends Component{
   render(){
    return(
        <>
        <div className="innerconetent">
          <div className="textdiv">
          <h1 id="heading">Welcome To QTrip</h1>
           <p className=" par">Explore the world with fantastic places to venture around</p>
           <form action="" >
            <input type="text" className="btn" placeholder="Search a city" />
           </form>
          </div>
        </div>
        </>
    )
   }
}