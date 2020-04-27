import React, { Component } from "react";

const MoviesContext = React.createContext();

class MoviesProvider extends Component {
  state = {
    favoriteMovies: [],
  };

  setFavoriteMovies = (movie) => {
    const favoriteMovies = [...this.state.favoriteMovies, movie];
    this.setState({ favoriteMovies });
  };

  isFavoriteMovie = (movieTitle) => {
    return this.state.favoriteMovies.some((m) => m.title === movieTitle);
  };

  render() {
    const { children } = this.props;
    const { favoriteMovies } = this.state;
    const { setFavoriteMovies, isFavoriteMovie } = this;
    return (
      <MoviesContext.Provider
        value={{
          favoriteMovies,
          setFavoriteMovies,
          isFavoriteMovie,
        }}
      >
        {children}
      </MoviesContext.Provider>
    );
  }
}

export default MoviesContext;

export { MoviesProvider };
