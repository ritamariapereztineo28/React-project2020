import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import DataMovie from "../DataMovie/DataMovie";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route
        path="/datamovie"
        render={props => <DataMovie {...props.location.state} />}
      />
      <Redirect to={"/"} />
    </Switch>
  );
}
