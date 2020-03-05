import "./MovieItem.css";
import PropTypes from "prop-types";
import React, { Component } from "react";

class MovieItem extends Component {
  render() {
    return (
      <div className="container-movieItem" key={this.props.id}>
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
