import React from "react";
import { Link } from "react-router-dom";
import { containerInformation } from "../../utils/containerInformation";
import MovieItem from "../MovieItem";
import Search from "../Search";
import "./Home.css";

class Home extends React.Component {
  state = {
    results: [],
    error: "",
  };
  
  searchInformation = (search) =>
    containerInformation(search, "s")
      .then((jsonInfo) => {
        if (jsonInfo.Search.length === 0) {
          this.setState({
            error: "No se ha encontrado ningun resultados",
          });
          return;
        }
        this.setState({
          results: jsonInfo.Search,
          error: "",
        });
      })
      .catch((e) => {
        this.setState({
          error: e.message,
        });
      });

  render() {
    const { results, error } = this.state;
    return error ? (
      <h1 className="message-error">{error}</h1>
    ) : (
      <div>
        <Link to="/selectionmovie">
          <button className="btn-selections"> Ir a favoritos </button>
        </Link>
        <Search searchInfo={this.searchInformation} />
        <div className="content-movie">
          {results.map((movie) => (
            <Link
              key={movie.imdbID}
              to={{
                pathname: "/datamovie",
                state: {
                  title: movie.Title,
                  img: movie.Poster,
                  year: movie.Year,
                },
              }}
            >
              <MovieItem
                title={movie.Title}
                year={movie.Year}
                imgUrl={movie.Poster}
              />
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
