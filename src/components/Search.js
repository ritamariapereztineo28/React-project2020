import React, { Component } from "react";
import "../App.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  buttonClick = () => {
    this.setState({
      value: "Button is pressed",
      message: "message"
    });
  };

  render() {
    return (
      <div>
        <input placeholder="Search movies"></input>
        
        <button onClick={this.buttonClick}> Search </button>
        <h1>{this.state.message}</h1>
      </div>
      
    );
  }
}
export default Search;
