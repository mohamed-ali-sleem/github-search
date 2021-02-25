import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
const Routes: React.SFC = () => (
  <div>
    <Switch>
      <Route exact path="/search" render={() => (<Search />)} />
    </Switch>
    <Route exact path="/" component={() => <Redirect to="/search" /> } />

  </div>
);

export default Routes;
