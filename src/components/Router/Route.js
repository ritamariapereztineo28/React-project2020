import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "../Home";
import DataMovie from "../DataMovie/DataMovie";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/DataMovie" render={props => <DataMovie {...props} />} />
      <Redirect to={"/"} />
    </Switch>
  );
}
