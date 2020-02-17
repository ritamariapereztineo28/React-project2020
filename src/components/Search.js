import React, { Component } from "react";
import "../App.css";

class Search extends Component {
  buttonClick() {
    console.log("click of the button");
  }
  render() {
    return (
      <div>
        <input placeholder="Search movies"></input>
        <button onClick={this.buttonClick}> Search </button>
      </div>
    );
  }
}

export default Search;
