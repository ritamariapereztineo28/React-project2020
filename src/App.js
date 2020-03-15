import React from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { containerInformation } from "./utils/functions";
import DataMovie from "./components/DataMovie";
import MovieItem from "./components/MovieItem";
import Search from "./components/Search";

class App extends React.Component {
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
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Search searchInfo={this.searchInformation} />
              {!error && !!results ? (
                results.map(movie => {
                  return (
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
                  );
                })
              ) : (
                <h1 className="message-error">{message}</h1>
              )}
              ,
            </Route>
            <Route
              path="/DataMovie"
              render={props => <DataMovie {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
