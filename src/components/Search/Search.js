import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD:src/components/Search/Search.js
      title: "",
      year: "",
      image: ""
=======
      message: "",
      lastMessage: ""
>>>>>>> master:src/components/Search.js
    };
  }
  handlerInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <div className="search-movie">
          <input
            className="input-search"
<<<<<<< HEAD:src/components/Search/Search.js
            name="title"
            placeholder="Search movies"
            onChange={this.handlerInput}
          ></input>
          <button
            className="btn-search"
            onClick={() => this.props.searchInfo(this.state.title)}
          >
            Search
          </button>
        </div>
=======
            name="message"
            placeholder="Search movies"
            onChange={this.handlerInput}
          ></input>
          <button className="btn-search" onClick={this.buttonClick}> Search </button>
        </div>
          <p className="message">{this.state.lastMessage}</p>
>>>>>>> master:src/components/Search.js
      </div>
    );
  }
}

export default Search;
