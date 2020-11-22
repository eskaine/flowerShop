import React from 'react'
import {
    Navbar,
    Row,
  } from "react-bootstrap";
  import { NavLink } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function SideNav(props) {
    const { toggleNav, open } = props;
    let classes;

    if (open) {
        classes = "d-flex flex-column align-items-start wrapper active"
    } else {
        classes = "d-flex flex-column align-items-start wrapper"
    }


    return (
        <Navbar 
            id="sidebar"
            bg="light" 
            className={classes}>
        <Row style={{width: '100%'}}>
            <p className="m-3">Welcome to Flower Power</p>
            <div className="btn ml-auto" id="dismiss" onClick={() => {toggleNav(false)}}>
            {/* <NavLink to="/"> */}
              <FontAwesomeIcon icon={faArrowLeft} />
            {/* </NavLink> */}
          </div>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/"
                >
                    Home
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/products"
                >
                    Products
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/cart"
                >
                    Cart
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/wishlist"
                >
                    Wishlist
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/register"
                >
                    Register
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/login"
                >
                    Login
            </NavLink>
        </Row>
    </Navbar>

    )
}

export default SideNav
