import React from 'react'
import {
    Navbar,
    Row,
  } from "react-bootstrap";
  import { NavLink } from "react-router-dom";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faBars, faUser, faArrowLeft, faCalculator } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { isAuth } from '../actions/actions'

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
            <div className="nav-link nav-item ml-auto" onClick={() => {toggleNav(false)}}>
              <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/" >
                    Home
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/products" >
                    Products
            </NavLink>
        </Row>
        <div style={{height: '2rem'}} />


        { isAuth && 
        <>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/cart" >
                     <FontAwesomeIcon className="mx-2" icon={faShoppingCart} />Cart
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/wishlist" >
                     <FontAwesomeIcon className="mx-2" icon={faHeart} />Wishlist
            </NavLink>
        </Row>
        <div style={{height: '2rem'}} />
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/account/username" >
                     <FontAwesomeIcon className="mx-2" icon={faUser} />Account
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/logout" >
                    Logout
            </NavLink>
        </Row>
        </> }
       
       { isAuth ? "" : 
       <>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/register" >
                    Register
            </NavLink>
        </Row>
        <Row onClick={() => {toggleNav(false)}}>
            <NavLink
                className="nav-link nav-item" 
                to="/login" >
                    Login
            </NavLink>
        </Row>
        </> }
    </Navbar>

    )
}

export default SideNav
