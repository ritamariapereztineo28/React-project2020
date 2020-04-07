import React, { Component } from "react";
import { AppContext } from "../../App";
import "./SelectionMovie.css";
import DataMovie from "../DataMovie/DataMovie";
import MovieItem from "../MovieItem/MovieItem";

class SelectionMovie extends Component {
  state={
    
  }
  render() {
    return (
      <AppContext>
        {(value) => (
          <div className="selections-favorite-movie">
            {value.selectionMovie.map((data) => (
              <MovieItem 
              title={data[0].title}
              imgUrl={data[0].image}
              year={data[0].year}
              />
            ))}
          </div>
        )}
      </AppContext>
    );
  }
}

export default SelectionMovie;
