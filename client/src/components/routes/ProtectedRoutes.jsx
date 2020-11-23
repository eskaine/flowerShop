import React, { Fragment } from "react";
import PrivateRoute from "./PrivateRoute";
import Cart from "../contents/private/Cart";
import WishList from "../contents/private/WishList";
import UserProfile from "../contents/private/UserProfile";

function ProtectedRoutes() {
  return (
    <Fragment>
      <PrivateRoute exact path="/profile" component={UserProfile} />
      <PrivateRoute exact path="/cart" component={Cart} />
      <PrivateRoute exact path="/wishlist" component={WishList} />
    </Fragment>
  );
}

export default ProtectedRoutes;