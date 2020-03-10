import React, { Component } from "react";
import "./DataMovie.css";

class DataMovie extends Component {
  state = {
    actors: "",
    plot: "",
    director: "",
    runtime: ""
  };

  MovieInformation() {
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
      <div className="data-movie">
        {this.MovieInformation()}
        <h1 className="title-movie">{title}</h1>
        <img className="image-movie" src={img} />

        <p className="director-movie">{this.state.director}</p>
        <p className="runtime-movie">{this.state.runtime}</p>
        <p className="actors-movie">{this.state.actors}</p>
        <p className="review-movie">{this.state.plot}</p>
      </div>
    );
  }
}

export default DataMovie;
