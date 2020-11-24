import React, {Fragment} from 'react'
import { Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { disableSidebar } from '../actions/actions'
import { useSelector, useDispatch } from "react-redux";

function SideNav() {
    const dispatch = useDispatch();
    const navOpen = useSelector((state) => state.navToggle);
    const auth = useSelector((state) => state.user)
    let classes;

    function sidebarHandler(){
        dispatch(disableSidebar());
    }

    if (navOpen) {
        classes = "d-flex flex-column align-items-start wrapper active"
    } else {
        classes = "d-flex flex-column align-items-start wrapper"
    }

    return (
        <Navbar 
            id="sidebar"
            bg="light" 
            className={classes}>
            <p className="mt-3 mb-0">Welcome to</p>
        <Row style={{width: '100%'}}>
            <h4 className="logo ml-3 mt-0">mumsworkshop</h4>
            <div className="nav-link nav-item ml-auto" onClick={sidebarHandler}>
              <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Row>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/" >
                    Home
            </NavLink>
        </Row>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/products" >
                    Products
            </NavLink>
        </Row>
        <div style={{height: '2rem'}} />


        { auth ?  
        <Fragment>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/cart" >
                     <FontAwesomeIcon className="mx-2" icon={faShoppingCart} />Cart
            </NavLink>
        </Row>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/wishlist" >
                     <FontAwesomeIcon className="mx-2" icon={faHeart} />Wishlist
            </NavLink>
        </Row>
        <div style={{height: '2rem'}} />
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/profile" >
                     <FontAwesomeIcon className="mx-2" icon={faUser} />Account
            </NavLink>
        </Row>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/" >
                    Logout
            </NavLink>
        </Row>
        </Fragment> 
       : 
       <Fragment>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/register" >
                    Register
            </NavLink>
        </Row>
        <Row onClick={sidebarHandler}>
            <NavLink
                className="nav-link nav-item" 
                to="/login" >
                    Login
            </NavLink>
        </Row>
        </Fragment> }
    </Navbar>

    )
}

export default SideNav
