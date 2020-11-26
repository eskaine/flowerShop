import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import AllProducts from "../contents/AllProducts";
import Home from "../contents/Home";
import Product from "../contents/Product";
import Login from "../contents/Login";
import Register from "../contents/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function MainRoutes() {
  return (
    <Fragment>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <div>
          about us 
        </div>
      </Route>
      <Route exact path="/contact">
        <div>
          contact us
        </div>
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/products">
        <AllProducts />
      </Route>
      <Route exact path="/products/:productName">
        <Product />
      </Route>
      <ProtectedRoutes />
    </Switch>
    </Fragment>
  );
}

export default MainRoutes;