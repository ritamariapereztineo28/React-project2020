import React, { Component } from "react";
import "./MovieItem.css";

class MovieItem extends Component {
  render() {
    return (
      <div className="container-movieItem">
        <h1 className="title">{this.props.title}</h1>
        <img src={this.props.imgUrl} alt="imagen" />
        <h2 className="year">{this.props.year}</h2>
      </div>
    );
  }
}

export default MovieItem;
