import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import DataMovie from "../DataMovie/DataMovie";
import SelectionMovie from "../SelectionMovie/SelectionMovie";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/selectionmovie" component={SelectionMovie} />
      <Route
        path="/datamovie"
        render={props => <DataMovie {...props.location.state} />}
      />
      <Redirect to={"/"} />
    </Switch>
  );
}
