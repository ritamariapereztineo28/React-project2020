import "./Search.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class Search extends Component {
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
      </div>
    );
  }
}

Search.propTypes = {
  title: PropTypes.string,
};

export default Search;
