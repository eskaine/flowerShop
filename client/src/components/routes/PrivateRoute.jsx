import React from "react";
import { useSelector } from 'react-redux';
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = useSelector(state => state.isAuth);
  
  return (
    <Route {...rest}>
      {isAuth ? <Component {...rest} /> : <Redirect to="/login" />}
    </Route>
  );
}

export default PrivateRoute;
