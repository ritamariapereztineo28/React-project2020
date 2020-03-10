import "./App.css";
import MovieItem from "./components/MovieItem";
import React from "react";
import Search from "./components/Search";
import DataMovie from "./components/DataMovie";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";

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
        })
        
      })
      .catch(() => this.setState({ error: true }));
  }

  render() {
    const { results, error } = this.state;
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Search searchInfo={this.searchInformation} />
              {!error && !!results
                ? results.map((movie, i) => {
                    return (
                      <Link key={i}
                        to={{
                          pathname: "/DataMovie",
                          state: {
                            title: movie.Title,
                            img: movie.Poster,
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
