import React from "react";
import Search from "./components/Search/Search.js";
import MovieItem from "./components/MovieItem/MovieItem.js";
import "./App.css";

function App() {
  return (
    <div>
      <Search />
      <MovieItem title="Titulo" years="2000" imgUrl="https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-latest-movie-free-to-see-poster-design-image_164089.jpg"/>
    </div>
  );
}

export default App;
