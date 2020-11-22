import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ isAuth, component: Component, ...rest }) {
  return (
    <Route {...rest}>
      {isAuth ? <Component {...rest} /> : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;
