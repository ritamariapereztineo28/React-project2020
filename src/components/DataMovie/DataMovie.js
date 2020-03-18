import React, { Component } from "react";
import PropsType from "prop-types";
import "./DataMovie.css";
import { containerInformation } from "../../utils/containerInformation";

class DataMovie extends Component {
  state = {
    actors: "",
    plot: "",
    director: "",
    runtime: ""
  };

  componentDidMount() {
    const { title } = this.props.location.state;
    console.log(title);
    containerInformation(title, "t").then(jsonInfo => {
      this.setState({
        actors: jsonInfo.Actors,
        plot: jsonInfo.Plot,
        director: jsonInfo.Director,
        runtime: jsonInfo.Runtime
      });
    });
  }

  render() {
    const { title, img, error } = this.props.location.state;
    return !error ? (
      <div className="info-movie">
        <h1 className="title-movie">{title}</h1>
        <div className="general-data-movie">
          <img className="image-movie" src={img} alt="img" />

          <p className="review-movie">
            Review: <br />
            {this.state.plot}
          </p>

          <div className="data-movie">
            <p className="director-movie">Director: {this.state.director}</p>
            <p className="runtime-movie">Runtime: {this.state.runtime}</p>
            <p className="actors-movie">Actors: {this.state.actors}</p>
          </div>
        </div>
      </div>
    ) : (
      <h1>A ocurrido un error ...</h1>
    );
  }
}

DataMovie.propsType = {
  location: PropsType.shape({
    title: PropsType.string,
    img: PropsType.string,
    error: PropsType.string
  })
};

export default DataMovie;
