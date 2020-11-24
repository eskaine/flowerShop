import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faUser,
  faHeart,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { enableSidebar, isNotAuth } from "../actions/actions";

function Navibar() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  function sidebarHandler() {
    dispatch(enableSidebar());
  }

  function logoutHandler() {
    dispatch(isNotAuth());
  }

  return (
    <div className="d-flex m-0 mt-1 p-0">
      <Navbar
        id="navi-bar"
        style={{ width: "100vw", height: "3em" }}
        className="justify-content-end bg-light p-2"
      >
        <div className="container-fluid">
          <div className="mr-auto d-flex">
              <div className="nav-link nav-item"
                id="sidebarCollapse"
                onClick={sidebarHandler}
              >
                <FontAwesomeIcon icon={faBars} />          
              </div>
              <NavLink to="/" className="logo">
              <span>mumsworkshop</span>
              </NavLink>
          </div>


          {token && (
            <Fragment>
                <NavLink to="/cart" className="nav-link nav-item" id="hide">
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </NavLink>
                <NavLink to="/wishlist" className="nav-link nav-item" id="hide">
                  <FontAwesomeIcon icon={faHeart} /> Wishlist
                </NavLink>
                <NavLink to="/profile" className="nav-link nav-item" id="hide">
                  <FontAwesomeIcon icon={faUser} /> Account
                </NavLink>
                <NavLink to="/" className="nav-link nav-item" id="hide" onClick={logoutHandler}>
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </NavLink>
            </Fragment>
          )}

          {token ? (
            ""
          ) : (
            <Fragment>
              <div className="nav-link nav-item" id="hide">
                <NavLink to="/register">Register</NavLink>
              </div>
              <div className="nav-link nav-item" id="hide">
                <NavLink to="/login">Login</NavLink>
              </div>
            </Fragment>
          )}
        </div>
      </Navbar>
    </div>
  );
}

export default Navibar;
