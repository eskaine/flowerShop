import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./contents/Home";

function MainRoutes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default MainRoutes;
