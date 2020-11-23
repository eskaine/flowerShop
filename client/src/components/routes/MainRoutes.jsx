import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import AllProducts from "../contents/AllProducts";
import Home from "../contents/Home";
import Product from "../contents/Product";
import Login from "../contents/Login";
import Register from "../contents/Register";
import ProtectedRoutes from "./ProtectedRoutes";

function MainRoutes() {
  return (
    <Container className="border px-0 mt-5">
    <Switch>
      <Route exact path="/">
        <Home />
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
    </Container>
  );
}

export default MainRoutes;