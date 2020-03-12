import "./App.css";
import MovieItem from "./components/MovieItem";
import React from "react";
import Search from "./components/Search";
import DataMovie from "./components/DataMovie";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import { containerInformation } from "./functions";

class App extends React.Component {
  state = {
    results: [],
    error: false
  };

  searchInformation = search =>
    containerInformation(search, "s").then(jsonInfo => {
      this.setState({
        results: jsonInfo.Search,
        error: false
      });
    });

  render() {
    const { results, error } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Search searchInfo={this.searchInformation} />
              {!error && !!results
                ? results.map(movie => {
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
                : null}
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
