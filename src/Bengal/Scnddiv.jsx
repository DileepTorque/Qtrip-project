import React from "react";
import { Component } from "react";
export default class Scnddiv extends Component{
render(){
    return(
        <>
        <div className="mainall">
        <h1  className="explore">Explore All The Adventures</h1>
        <p >Here's a list of places that you can explore in city</p>
        <hr />
        <div className="Filters">
        <span id="fil1">Filters:   | </span>
        <button id="frstbtn">Filter By Duration(Hours)</button>
        <span id="fil2">Clear    |</span>
        <button id="scndbtn">Add Category</button>
        <span id="fil3">Clear    |</span>
        <input type="text"  placeholder="Search Adventures "  id="box"/>
        <span id="fil4">Clear    |</span>
        </div>
        <hr />
        </div>

        </>
    )
}
}