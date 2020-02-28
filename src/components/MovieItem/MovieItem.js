import React, { Component } from "react";
import "./MovieItem_style.css";
class MovieItem extends Component {
  render() {
    return (
      <div className="container">
        <h1>Titulo</h1>
          <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-latest-movie-free-to-see-poster-design-image_164089.jpg" />
        <h2>Año</h2>
      </div>
    ); 
  }
}

export default MovieItem;
