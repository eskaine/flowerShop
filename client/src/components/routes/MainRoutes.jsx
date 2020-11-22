import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../contents/Home";
import Product from "../contents/Product";
import Login from "../contents/Login";
import Register from "../contents/Register";
import Cart from "../contents/private/Cart";
import WishList from "../contents/private/WishList";

function MainRoutes({ auth }) {
  return (
    <Container className="border px-0 mt-5">
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/register">
        <Register auth={auth} />
      </Route>
      <Route exact path="/login">
        <Login auth={auth} />
      </Route>
      // Individual Product
      <Route exact path="/products/:productName/:productId">
        <Product />
      </Route>
      <Route exact path="/cart">
        <Cart />
      </Route>
      <Route exact path="/wishlist">
        <WishList />
      </Route>
    </Switch>
    </Container>
  );
}

export default MainRoutes;