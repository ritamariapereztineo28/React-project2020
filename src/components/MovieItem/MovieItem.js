import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    const { id, title, imgUrl, year} = this.props;
    return (
      <div className="container-movieItem" key={id}>
        <h1 className="title-movie">{title}</h1>
        <img src={imgUrl} alt="imagen" />
        <h2 className="year">{year}</h2>
      </div>
    );
  }
}

MovieItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  year: PropTypes.string,
  imgUrl: PropTypes.any.isRequired
};

export default MovieItem;
