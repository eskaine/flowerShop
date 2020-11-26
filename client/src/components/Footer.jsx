import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
              <a href="mailto:debsgenes@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
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
                  <a className="footer-icons p-0" href="https://github.com/debjeanlee" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                  <a className="footer-icons p-0" href="https://www.linkedin.com/in/debjeanlee/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Col>
            </Col>
            <Col md={4} className="d-flex justify-content-around">
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <p className="mt-2">Eskaine</p>
                </Col>
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <a className="footer-icons p-0" href="https://github.com/eskaine" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                  <a className="footer-icons p-0" href="https://www.linkedin.com/in/eskaine/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Col>
            </Col>
            <Col md={4} className="d-flex justify-content-around">
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <p className="mt-2">Tyrone</p>
                </Col>
                <Col md={6} className="d-flex align-middle justify-content-around">
                  <a className="footer-icons p-0" href="https://github.com/TyroneTang" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                  </a>
                  <a className="footer-icons p-0" href="https://www.linkedin.com/in/tyronetangxi/" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </Col>
            </Col>
        </Row>
      </Container>
      <Row className="footer mx-auto" style={{width: "100vw"}}/>
        <Container>
          <Row className="d-flex justify-content-around p-0 footer-btm">
            <Col xs={4} md={2} lg={2}>
              <div className="nav-link nav-item p-2 mb-0">Copyright mumsworkshop</div>
            </Col>
            <Col xs={4} md={2} lg={2}>
              <Link to="/about" className="nav-link nav-item">About</Link>
            </Col>
            <Col xs={4} md={2} lg={2}>
              <Link to="/disclaimer" className="nav-link nav-item">Disclaimer</Link>
            </Col>
            <Col xs={4} md={2} lg={2}>
              <Link to="/faq" className="nav-link nav-item">F.A.Q.</Link>
            </Col>
            <Col xs={4} md={2} lg={2}>
              <Link to="/privacypolicy" className="nav-link nav-item">Privacy Policy</Link>
            </Col>
            <Col xs={4} md={2} lg={2}>
              <Link to="/admin" className="nav-link nav-item">Admin</Link>
            </Col>
          </Row>
        </Container>
      </Row>
  );
}

export default Footer;
