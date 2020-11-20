import React from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function Navibar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <NavLink to="/">flowerPower</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </Nav>
          <Form inline>
            <NavLink to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </NavLink>
            <NavLink to="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </NavLink>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <NavLink to="/register">
              <Button variant="primary">register</Button>
            </NavLink>
            <NavLink to="/login">
              <Button variant="secondary">Login</Button>
            </NavLink>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navibar;
