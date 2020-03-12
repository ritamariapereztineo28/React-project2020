import React, { Component } from "react";
import "./DataMovie.css";
import PropsType from "prop-types";

class DataMovie extends Component {
  state = {
    actors: "",
    plot: "",
    director: "",
    runtime: ""
  };

  movieInformation() {
    const { title, img } = this.props.location.state;
    var key = "3c255e54";
    var url = `http://www.omdbapi.com/?t=${title}&apikey=${key}`;

    fetch(url)
      .then(Response => {
        return Response.json();
      })
      .then(jsonInfo => {
        this.setState({
          actors: jsonInfo.Actors,
          plot: jsonInfo.Plot,
          director: jsonInfo.Director,
          runtime: jsonInfo.Runtime
        });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { title, img } = this.props.location.state;
    return (
      <div className="info-movie">
        <h1 className="title-movie">{title}</h1>
        <div className="general-data-movie">
          <img className="image-movie" src={img} />
          {this.movieInformation()}

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
    );
  }
}

DataMovie.propsType = {
  title: PropsType.string,
  img: PropsType.string
};

export default DataMovie;
