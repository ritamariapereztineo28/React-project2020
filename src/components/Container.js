import React, { Component } from "react";
import "./Container_style.css";
class Container extends Component {
  render() {
    return (
      <div id="container">
        <h1>Titulo</h1>
        <div id="image">
          <img src="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-latest-movie-free-to-see-poster-design-image_164089.jpg" />
        </div>
        <h2>Año</h2>
      </div>
    );
  }
}
export default Container;
