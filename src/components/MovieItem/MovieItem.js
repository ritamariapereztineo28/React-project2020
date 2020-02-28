import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    return (
      <div className="container-movieItem">
        <h1 className="title-movie">{this.props.title}</h1>
        <img src={this.props.imgUrl} alt="imagen" />
        <h2 className="year">{this.props.year}</h2>
      </div>
    );
  }
}

MovieItem.propTypes = {
  title: PropTypes.string,
  year: PropTypes.number,
  imgUrl: PropTypes.any.isRequired
};

export default MovieItem;
