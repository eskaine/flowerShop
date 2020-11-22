import React from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  Button,
  Container
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Navibar({ toggleNav }) {
  

  return (
    <div className="d-flex m-0 p-0">
      <Navbar 
        style={{width: '100vw', height: '3em'}}
        className="justify-content-end bg-light"
        >
          <div className="container-fluid">
            <div className="mr-auto nav-link nav-item">
              <Container id="sidebarCollapse" className="btn" onClick={() => {toggleNav(true)}}>
                <FontAwesomeIcon icon={faBars} />
              </Container>
            </div>
            <div className="nav-link nav-item">
              <NavLink to="/cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </NavLink>
            </div>
            <div className="nav-link nav-item">
              <NavLink to="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </NavLink>
            </div>
            <NavLink to="/register">
              <Button variant="primary">register</Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="secondary">Login</Button>
            </NavLink>
          </div>
      </Navbar>
    </div>
  
  );
}

export default Navibar;
