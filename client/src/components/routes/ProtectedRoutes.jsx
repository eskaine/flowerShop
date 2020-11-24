import React, { Fragment } from "react";
import PrivateRoute from "./PrivateRoute";
import Cart from "../contents/private/Cart";
import WishList from "../contents/private/WishList";
import UserProfile from "../contents/private/UserProfile";
import ChangePassword from "../contents/private/ChangePassword";
import EditProfile from "../contents/private/EditProfile";

function ProtectedRoutes() {
  return (
    <Fragment>
      <PrivateRoute exact path="/profile" component={UserProfile} />
      <PrivateRoute exact path="/profile/editpassword" component={ChangePassword} />
      <PrivateRoute exact path="/profile/update" component={EditProfile} />
      <PrivateRoute exact path="/cart" component={Cart} />
      <PrivateRoute exact path="/wishlist" component={WishList} />
    </Fragment>
  );
}

export default ProtectedRoutes;
