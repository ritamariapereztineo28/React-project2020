import React, { Component } from "react";
import "./DataMovie.css";

class DataMovie extends Component {
  render() {
    return (
      <div className="data-movie">
        <h1 className="title-movie">Title</h1>
        <img className="image-movie" src="https://lumiere-a.akamaihd.net/v1/images/homepage_hero_mobile_insideout_streetmessageupdate_span_0aea4bd0.jpeg?region=0%2C0%2C480%2C750" />
          <p className=".review-movie">-----</p>
      </div>
    );
  }
}

export default DataMovie;
