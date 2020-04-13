import React, { Component } from "react";
import PropsType, { checkPropTypes } from "prop-types";
import "./DataMovie.css";
import { containerInformation } from "../../utils/containerInformation";
import ReactLoading from "react-loading";
import { AppContext, MyContext } from "../../App";
import MovieItem from "../MovieItem";
import { FaBuromobelexperte } from "react-icons/fa";
import UserContext from "../../UserContext";

export default class DataMovie extends Component {
  static contextType = UserContext;

  state = {
    year: "",
    actors: "",
    plot: "",
    director: "",
    runtime: "",
    error: "",
    loading: true,
    check: true
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
          year: jsonInfo.Year,
          error: "",
          loading: true
        });
      })
      .catch(e => {
        this.setState({
          loading: false,
          error: e.message
        });
      });
  }
  // handleChange = e => {
  //   this.setState({ check: e.target.checked });
  // };

  checkValue () {
    this.setState({
      check: !this.state.check
    });
  }

  searchSelections = (value, title) => {
    if (value.movie) {
      value.movie.map(data => {
        if (data[0].title === title) {
          value.check = true;
          return;
        } else {
          value.check = false;
        }
      });
    }
  };
  render() {
    const { title, img, year } = this.props;
    const pruebaArray = [];
    const pruebaObj = {
      title: title,
      image: img,
      year: year,
      check: this.state.check
    };
    const { selectionsMovies, setUser } = this.context;

    const { loading, error } = this.state;
    if (!loading) {
      return (
        <div className="message-loading">
          <ReactLoading
            type={"spokes"}
            color={"#000"}
            width={"20%"}
          ></ReactLoading>
        </div>
      );
    }
    if (error) {
      return <div className="message-error">{error}</div>;
    }
    return (
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
            <div>
              <input
                onChange={() => {
                  const selectionsMovies = {
                    movie: [],
                    check: this.state.check
                  };

                  setUser(selectionsMovies);
                  this.checkValue(selectionsMovies.check);
                }}
                type="checkbox"
                checked={selectionsMovies.check}
              />
              {this.searchSelections(selectionsMovies, title)}

              {pruebaArray.push(pruebaObj)}

              {selectionsMovies.check
                ? selectionsMovies.movie.push(pruebaArray)
                : console.log("CHECK ES FALSO")}
            </div>
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
