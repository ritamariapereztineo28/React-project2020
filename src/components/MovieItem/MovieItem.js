import React, { Component } from "react";
import "./MovieItem_style.css";
class MovieItem extends Component {
  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <img src={this.props.imgUrl} />
        <h2>{this.props.years}</h2>
      </div>
    );
  }
}

export default MovieItem;
