import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
  }
  buttonClick = () => {
    this.setState({
      message: "Search movies"
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
