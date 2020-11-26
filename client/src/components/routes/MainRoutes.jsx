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
      <Route exact path="/admin">
        <h1>
          Admin Login - coming soon
        </h1>
      </Route>
      <Route exact path="/about">
        <h1>
          About Us: <br />
          Ninja Warriors
        </h1>
      </Route>
      <Route exact path="/contact">
        <h1>
          The real flower shop is here: <br />
          <a href="https://www.carousell.sg/mumsworkshop/" rel="noopener noreferrer" target="_blank">https://www.carousell.sg/mumsworkshop/</a>
        </h1>
      </Route>
      <Route exact path="/disclaimer">
        <h1>
          This site is only half done. Don't tell anyone.
        </h1>
      </Route>
      <Route exact path="/faq">
        <h1>
          If you want to buy some flowers head <a href="https://www.carousell.sg/mumsworkshop/" rel="noopener noreferrer" target="_blank">HERE</a>.
        </h1>
      </Route>
      <Route exact path="/disclaimer">
        <h1>
          This site is only half done. Don't tell anyone.
        </h1>
      </Route>
      <Route exact path="/privacypolicy">
        <h1>
          There is nothing private on the internet.
        </h1>
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/browse">
        <AllProducts />
      </Route>
      <Route exact path="/browse/:productName">
        <Product />
      </Route>
      <ProtectedRoutes />
    </Switch>
    </Fragment>
  );
}

export default MainRoutes;