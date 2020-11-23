import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
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
    <div className="d-flex m-0 p-0">
      <Navbar
        id="navi-bar"
        style={{ width: "100vw", height: "3em" }}
        className="justify-content-end bg-light p-2"
      >
        <div className="container-fluid">
          <div className="mr-auto nav-link nav-item">
            <div
              id="sidebarCollapse"
              onClick={sidebarHandler}
            >
              <FontAwesomeIcon icon={faBars} />
            </div>
          </div>


          {token && (
            <Fragment>
              <div className="nav-link nav-item">
                <NavLink to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} /> Cart
                </NavLink>
              </div>
              <div className="nav-link nav-item">
                <NavLink to="/wishlist">
                  <FontAwesomeIcon icon={faHeart} /> Wishlist
                </NavLink>
              </div>
              <div className="nav-link nav-item">
                <NavLink to="/account/:username">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </div>
              <div className="nav-link nav-item" onClick={logoutHandler}>
                <NavLink to="/">Logout</NavLink>
              </div>
            </Fragment>
          )}

          {/* ----------- SHOW BEFORE LOGGIN IN ----------- */}
          {token ? (
            ""
          ) : (
            <Fragment>
              <div className="nav-link nav-item">
                <NavLink to="/register">Register</NavLink>
              </div>
              <div className="nav-link nav-item">
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
