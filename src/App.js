import "./App.css";
import MovieItem from "./components/MovieItem";
import React from "react";
import Search from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      results: [],
      error: false
    };
    this.searchInformation = this.searchInformation.bind(this);
  }

  searchInformation(search) {
    var key = "3c255e54";
    var url = `http://www.omdbapi.com/?s=${search}&apikey=${key}`;
    fetch(url)
      .then(Response => {
        return Response.json();
      })
      .then(jsonInfo => {
        this.setState({
          results: jsonInfo.Search,
          error: false
        });
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { results, error } = this.state;
    return (
      <div>
        <Search searchInfo={this.searchInformation} />
        {!error
          ? results.map((movie, i) => {
              return (
                <MovieItem
                  key={i}
                  title={movie.Title}
                  year={movie.Year}
                  imgUrl={movie.Poster}
                />
              );
            })
          : null}
      </div>
    );
  }
}

export default App;
