import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      lastMessage: ""
    };
    this.handlerInput = this.handlerInput.bind(this);
    this.buttonClick = this.buttonClick.bind(this);
  }

  handlerInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  buttonClick = () => {
    this.setState({
      lastMessage: this.state.message
    });
  };

  render() {
    return (
      <div>
        <div className="search-movie">
          <input
            className="input-search"
            name="message"
            placeholder="Search movies"
            onChange={this.handlerInput}
          ></input>
          <button className="btn-search" onClick={this.buttonClick}> Search </button>
        </div>
          <p className="message">{this.state.lastMessage}</p>
      </div>
    );
  }
}

export default Search;
