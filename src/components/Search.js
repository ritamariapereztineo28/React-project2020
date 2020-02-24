import React, { Component } from "react";
import './Search_style.css';
class Search extends Component {
  constructor() {
    super();
    this.state = {
      message: "",
      showMessage: false
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
      showMessage: !this.state.showMessage
    });
  };

  render() {
    return (
      <div>
        <div id="form">
          <input
            name="message"
            placeholder="Search movies"
            value={this.state.value}
            onChange={this.handlerInput}
          ></input>
          <button onClick={this.buttonClick}> Search </button>
        </div>
        {this.state.showMessage && <p>{this.state.message}</p>}

      </div>
      
    );
  }
}
export default Search;
