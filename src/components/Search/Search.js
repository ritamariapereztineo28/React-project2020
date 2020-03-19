import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  state = {
    title: ""
  };

  handlerInput = event => {
    const { value } = event.target;
    this.setState({
      title: value
    });
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <div className="header" />
        <div className="search-movie">
          <input
            className="input-search"
            placeholder="Search movies"
            onChange={this.handlerInput}
          ></input>
          <button
            className="btn-search"
            onClick={() => this.props.searchInfo(title)}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  searchInfo: PropTypes.func
};

export default Search;
