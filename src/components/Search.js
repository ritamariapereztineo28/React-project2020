import React, { Component } from "react";
import "../App.css";

class Search extends Component {
    constructor(){
        super();
        this.state={
            message:''
        }
    }
  buttonClick = () => {
    this.setState({
        value: 'Button is pressed'
    })
    this.setState({
        message: this.state.value
    })
  }

  render() {
    return (
      <div>
        <input placeholder="Search movies"></input>
        <h1>{this.state.message}</h1>
        <button onClick={this.buttonClick}> Search </button>
      </div>
    );
  }
}
export default Search;
