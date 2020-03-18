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
    message: "Resultado no encontrado"
  };

  searchInformation = search =>
    containerInformation(search, "s").then(jsonInfo => {
      this.setState({
        results: jsonInfo.Search,
        error: ""
      });
    });

  render() {
    const { results, error, message } = this.state;
    return !error ? (
      <div>
        <Search searchInfo={this.searchInformation} />
        <div className="content-movie">
          {!!results ? 
            results.map(movie => (
              <Link
                key={movie.imdbID}
                to={{
                  pathname: "/datamovie",
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
          : (
            <h1 className="message-error">{message}</h1>
          )}
        </div>
      </div>
    ) : (
      <h2>Ha ocurrido un error ...</h2>
    );
  }
}

export default Home;
