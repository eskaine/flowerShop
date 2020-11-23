import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBars,
  faUser,
  faHeart
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
    <div className="d-flex m-0 p-0">
      <Navbar
        id="navi-bar"
        style={{ width: "100vw", height: "3em" }}
        className="justify-content-end bg-light p-2"
      >
        <div className="container-fluid">
          <div className="mr-auto d-flex">
            <div className="nav-link nav-item">
              <div
                id="sidebarCollapse"
                onClick={sidebarHandler}
              >
                <FontAwesomeIcon icon={faBars} />          
              </div>
            </div>
              <NavLink to="/" className="nav-link nav-item logo">
              <span>mumsworkshop</span>
              </NavLink>
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
                <NavLink to="/profile">
                  <FontAwesomeIcon icon={faUser} />
                </NavLink>
              </div>
              <div className="nav-link nav-item" onClick={logoutHandler}>
                <NavLink to="/">Logout</NavLink>
              </div>
            </Fragment>
          )}

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
