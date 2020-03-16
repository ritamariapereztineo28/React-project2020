import React from "react";
import { Link } from "react-router-dom";
import { containerInformation } from "../../utils/functions";
import MovieItem from "../MovieItem";
import Search from "../Search";
import "./Home.css";

class Home extends React.Component {
  state = {
    results: [],
    error: false,
    message: "Algo esta mal"
  };

  searchInformation = search =>
    containerInformation(search, "s").then(jsonInfo => {
      this.setState({
        results: jsonInfo.Search,
        error: false
      });
    });

  render() {
    const { results, error, message } = this.state;
    return (
      <div>
        <Search searchInfo={this.searchInformation} />
        {!error && !!results ? (
          results.map(movie => (
            <Link
              key={movie.imdbID}
              to={{
                pathname: "/DataMovie",
                state: {
                  title: movie.Title,
                  img: movie.Poster
                }
              }}
            >
              <MovieItem
                title={movie.Title}
                year={movie.Year}
                imgUrl={movie.Poster}
              />
            </Link>
          ))
        ) : (
          <h1 className="message-error">{message}</h1>
        )}
      </div>
    );
  }
}

export default Home;
