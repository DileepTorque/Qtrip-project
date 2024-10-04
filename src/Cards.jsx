import React, { Component } from "react";
// import "../Qtrips/cards.css";
// import api from "./Qtrip";
export default class Cards extends Component{
  constructor(props){
    super(props)
  }
    render(){
        return(
          <>
          <div className="dileep">
          <img src={this.props.image}  className="cards" />
              <h1 className="insidetext">{this.props.firsthead}</h1>
             <h3 className="insidetext2">{this.props.dhead}</h3>
          </div>
         </>
        )
    }
}