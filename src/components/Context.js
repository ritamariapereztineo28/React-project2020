import React, { Component } from "react";

const MoviesContext = React.createContext();

class MoviesProvider extends Component {
  // Context state
  state = {
    favoriteMovies: [],
  };

//   checkValue = () => {
//     this.setState({
//       check: !this.state.check
//     });
//   }

  // Method to update state
  setFavoriteMovies = (movie) => {
    const favoriteMovies = [...this.state.favoriteMovies, movie];
    this.setState({ favoriteMovies });
  };

  isFavoriteMovie = (movieId) => {
    //   console.log(this.state.favoriteMovies)
    return this.state.favoriteMovies.some((m) => m.id === movieId);
    
  };
  

  render() {
    const { children } = this.props;
    const { favoriteMovies } = this.state;
    const { setFavoriteMovies,isFavoriteMovie } = this;
    // console.log(favoriteMovies, "ESTE ES EL FAV MOVIE")

    return (
      <MoviesContext.Provider
        value={{
          favoriteMovies,
          setFavoriteMovies,
          isFavoriteMovie
        }}
      >
        {children}
      </MoviesContext.Provider>
    );
  }
}

export default MoviesContext;

export { MoviesProvider };
