import React, { Component } from "react";
import "./Search_style.css";
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
        <div id="form">
          <input
            name="message"
            placeholder="Search movies"
            onChange={this.handlerInput}
          ></input>
          <button onClick={this.buttonClick}> Search </button>
        </div>
        <p>{this.state.lastMessage}</p>
      </div>
    );
  }
}
export default Search;
