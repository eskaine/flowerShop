import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <Navbar fixed="bottom" bg="light" variant="dark">
      <Container>
        <Link to="https://github.com/debjeanlee">deborah</Link>,
        <Link to="https://github.com/eskaine">eskaine</Link>,
        <Link to="https://github.com/TyroneTang">tyrone</Link> @
        <Link to="https://github.com/eskaine/flowerShop">
          mumsworkshop
        </Link>2020
      </Container>
    </Navbar>
  );
}

export default Footer;
