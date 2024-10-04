import React, { Component } from "react";
export default class GoaCards extends Component{
  constructor(props){
    super(props)
  }
    render(){
        return(
          <>
          <div className="bngcard">
          <img src={this.props.pto}   className="tripimg"/>
              <h1 >{this.props.place}</h1>
             <h3 >{this.props.time}</h3>
          </div>
         </>
        )
    }
}