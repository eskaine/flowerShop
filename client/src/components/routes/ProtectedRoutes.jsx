import React, { Fragment } from "react";
import PrivateRoute from "./PrivateRoute";
import Cart from "../contents/private/Cart";
import WishList from "../contents/private/WishList";
import UserProfile from "../contents/private/UserProfile";
import Checkout from "../contents/private/Checkout";

function ProtectedRoutes() {
  return (
    <Fragment>
      <PrivateRoute exact path="/profile" component={UserProfile} />
      <PrivateRoute exact path="/cart" component={Cart} />
      <PrivateRoute exact path="/wishlist" component={WishList} />
      <PrivateRoute exact path="/checkout" component={Checkout} />
    </Fragment>
  );
}

export default ProtectedRoutes;
