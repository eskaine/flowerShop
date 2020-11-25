import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { axiosPut } from "../../../helpers/api";
import { useSelector } from "react-redux";

function ChangePassword({ setShow }) {
  const user = useSelector((state) => state.user);
  const [passwords, setPasswords] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function changeHandler(e) {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  }

  async function passwordHandler(e) {
    e.preventDefault();
    let url = process.env.REACT_APP_USER + `/${user.id}/password`;
    let data = await axiosPut(url, passwords, user.token);
    if (data) {
      setShow(false);
    }
  }

  return (
    <Form onSubmit={passwordHandler}>
      <Form.Group controlId="formPassword">
        <Form.Label>Old Password</Form.Label>
        <Form.Control
          name="oldPassword"
          type="password"
          value={passwords.oldPassword}
          placeholder="Old Password"
          onChange={changeHandler}
        />
      </Form.Group>
      <Row>
        <Col md={6}>
          <Form.Group controlId="formPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control
              name="newPassword"
              type="password"
              value={passwords.newPassword}
              placeholder="New Password"
              onChange={changeHandler}
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formPassword">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control
              name="confirmPassword"
              type="password"
              value={passwords.confirmPassword}
              placeholder="Confirm New Password"
              onChange={changeHandler}
            />
          </Form.Group>
        </Col>
      </Row>
      <Button className="button" type="submit">
        Change Password
      </Button>
    </Form>
  );
}

export default ChangePassword;
