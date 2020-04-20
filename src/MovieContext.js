import React, { Component } from 'react'

const MovieContext = React.createContext()

class MovieProvider extends Component {
  state = {
    selectionsMovies:{},
  }

  setMovie = selectionsMovies => {
    this.setState(prevState =>  ({ selectionsMovies }))
  }

  render() {
    const { children } = this.props
    const { selectionsMovies } = this.state
    const { setMovie} = this

    return (
      <MovieContext.Provider
        value={{
        selectionsMovies,
        setMovie,
        }}
      >
        {children}
      </MovieContext.Provider>
    )
  }
}

export default MovieContext

export { MovieProvider }
