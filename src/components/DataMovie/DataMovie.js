import React, { Component } from "react";
import "./DataMovie.css";

class DataMovie extends Component {
  render() {
    const {title, img} = this.props.location.state
    return (
      <div className="data-movie">
        <h1 className="title-movie">{title}</h1>
        <img
          className="image-movie"
          src={img}
        />
        
        <p className=".review-movie">----</p>
      </div>
    );
  }
}

export default DataMovie;
