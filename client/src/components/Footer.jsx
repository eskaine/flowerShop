import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
      <Row className="footer mx-auto"/>
      <Container className="mt-3">
        <Row>
            <Col md={4} className="d-flex justify-content-around">
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <p className="mt-2">Deborah</p>
                </Col>
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <Link className="footer-icons p-0" to="https://github.com/debjeanlee">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Link>
                  <Link className="footer-icons p-0" to="https://www.linkedin.com/in/debjeanlee/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </Col>
            </Col>
            <Col md={4} className="d-flex justify-content-around">
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <p className="mt-2">Eskaine</p>
                </Col>
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <Link className="footer-icons p-0" to="https://github.com/eskaine">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Link>
                  <Link className="footer-icons p-0" to="https://www.linkedin.com/in/eskaine/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </Col>
            </Col>
            <Col md={4} className="d-flex justify-content-around">
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <p className="mt-2">Tyrone</p>
                </Col>
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <Link className="footer-icons p-0" to="https://github.com/TyroneTang">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </Link>
                  <Link className="footer-icons p-0" to="https://www.linkedin.com/in/tyronetangxi/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </Col>
            </Col>
        </Row>
      </Container>
      <Row className="footer mx-auto" style={{width: "100vw"}}/>
        <Container className="d-flex justify-content-around p-0" >
          <p className="nav-link nav-item p-2 mb-0">Copyright mumsworkshop</p>
          <Link to="/about" className="nav-link nav-item">About</Link>
          <Link to="/about" className="nav-link nav-item">Disclaimer</Link>
          <Link to="/about" className="nav-link nav-item">F.A.Q.</Link>
          <Link to="/about" className="nav-link nav-item">Privacy Policy</Link>
        </Container>
      </Row>
  );
}

export default Footer;
