import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faComment, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (   
      <Row className="mt-2 mx-0">
        <Container>
          <Row>
            <Col xs={4} s={4} md={2} lg={2} className="footer-icons d-flex justify-content-around p-3">
              <p className="my-auto">Follow us:</p>
            </Col>
            <Col xs={4} s={4} md={2} lg={2} className="footer-icons d-flex justify-content-around border-right my-auto">
              <FontAwesomeIcon icon={faFacebookSquare} />
              <FontAwesomeIcon icon={faInstagram} />
            </Col>
            <Col xs={4} s={4} md={2} lg={2} className="footer-icons d-flex justify-content-around my-auto">
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faEnvelope} />
            </Col>
            <Col xs={12} s={12} md={6} lg={6} className="d-flex p-3">
              <Form.Group>
                <Form.Label><small>Sign up for our newsletter!</small></Form.Label>
                <Row></Row>
                <Form.Control placeholder="Email" />
              </Form.Group>
          
              <Button className="button my-auto ml-4">Subscribe!</Button>
            </Col>
          </Row>
        </Container>
          <Row className="footer mt-2 mx-auto p-3">
          </Row>
          <Container>
            <Row>
              <Col md={12}>
                <Row className="d-flex">
                  <Link className="nav-link" to="https://github.com/debjeanlee">deborah</Link>
                  <Link className="nav-link" to="https://github.com/eskaine">eskaine</Link>
                  <Link className="nav-link" to="https://github.com/TyroneTang">tyrone</Link> 
                  <Link className="nav-link" to="https://github.com/eskaine/flowerShop">
                    github repo
                  </Link>
                </Row>
              </Col>
            </Row>
          </Container>
          <Col md={12} className="footer-btm d-flex justify-content-around">
            <a href="#">Copyright mumsworkshop</a>
            <a href="#">About</a>
            <a href="#">Disclaimer</a>
            <a href="#">F.A.Q.</a>
            <a href="#">Privacy Policy</a>
          </Col>
      </Row>
  );
}

export default Footer;
