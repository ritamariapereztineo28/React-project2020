import React, { Component } from "react";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      message: ""
    };
    this.handlerInput = this.handlerInput.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
  }
  
  handlerInput = (event) => {
    const {name, value}= event.target
    this.setState({
      [name]: value
    });
  };
  buttonClick = () => { 
   return this.state.message
  }

  render() {
    return (
      <div>
        <form >
        <input name="message" placeholder="Search movies" value={this.state.value} onChange={this.handlerInput} ></input>
        <button onClick={this.buttonClick}> Search </button>
        <h1>{this.state.message}</h1>
        </form>
      </div>
      
    );
  }
}
export default Search;
