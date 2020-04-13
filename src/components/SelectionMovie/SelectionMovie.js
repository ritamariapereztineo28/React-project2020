import React, { Component } from "react";
import { AppContext } from "../../App";
import "./SelectionMovie.css";
import DataMovie from "../DataMovie/DataMovie";
import MovieItem from "../MovieItem/MovieItem";
import UserContext from "../../UserContext";

class SelectionMovie extends Component {
  static contextType = UserContext;

  render() {
    const { selectionsMovies, setUser } = this.context;
    return (
      <div className="selections-favorite-movie">
        {selectionsMovies.movie
          ? selectionsMovies.movie.map(data => (
              <MovieItem
                title={data[0].title}
                imgUrl={data[0].image}
                year={data[0].year}
              />
            ))
          : null}
      </div>
    );
  }
}

export default SelectionMovie;
