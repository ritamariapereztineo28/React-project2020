import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    const { id, title, imgUrl, year} = this.props;
    return (
      <div className="container-movieItem" key={id}>
        {title && <h1 className="title-movie">{title}</h1>}
        {imgUrl && <img src={imgUrl} alt="imagen" />}
        {year && <h2 className="year">{year}</h2>}
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
