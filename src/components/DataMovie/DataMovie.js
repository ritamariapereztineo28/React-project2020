import React, { Component } from "react";
import PropsType from "prop-types";
import "./DataMovie.css";
import { containerInformation } from "../../utils/containerInformation";
import ReactLoading from "react-loading";

class DataMovie extends Component {
  state = {
    actors: "",
    plot: "",
    director: "",
    runtime: "",
    loading: true
  };

  componentDidMount() {
    const { title } = this.props;
    containerInformation(title, "t")
      .then(jsonInfo => {
        this.setState({
          actors: jsonInfo.Actors,
          plot: jsonInfo.Plot,
          director: jsonInfo.Director,
          runtime: jsonInfo.Runtime,
          loading: true
        });
      })
      .catch(() => {
        this.setState({
          loading: false
        });
      });
  }

  render() {
    const { title, img } = this.props;
    const loading = this.state;
    return !loading ? (
      <div className="message-loading">
        <ReactLoading
          type={"spokes"}
          color={"#000"}
          width={"20%"}
        ></ReactLoading>
      </div>
    ) : (
      <div className="info-movie">
        <h1 className="title-movie">{title}</h1>
        <div className="general-data-movie">
          <img className="image-movie" src={img} alt="img" />

          {this.state.plot && (
            <p className="review-movie">
              Review: <br />
              {this.state.plot}
            </p>
          )}

          <div className="data-movie">
            {this.state.director && (
              <p className="director-movie">Director: {this.state.director}</p>
            )}
            {this.state.runtime && (
              <p className="runtime-movie">Runtime: {this.state.runtime}</p>
            )}
            {this.state.actors && (
              <p className="actors-movie">Actors: {this.state.actors}</p>
            )}
          </div>
        </div>
      </div>
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
