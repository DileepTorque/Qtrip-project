import React, { Component } from "react";
import Bngl from "./Data";
export default class Cards extends Component{
  constructor(props){
    super(props)
  }
    render(){
        return(
          <>
          <div className="bngcard">
          <img src={this.props.pto}   className="tripimg"/>
              <h1 >{this.props.place}</h1>
             <h3 >{this.props.dura}</h3>
          </div>
         </>
        )
    }
}