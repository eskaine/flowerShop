import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Register() {
    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: ''
    });

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submitHandler(e) {
        e.preventDefault();
        //to be updated with axios call
    }

  return (
    <Container>
      <Form>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control name="username" type="text" value={form.username} placeholder="Username" onChange={changeHandler} />
      </Form.Group>
      <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" value={form.email} placeholder="Email" onChange={changeHandler} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" value={form.password} placeholder="Password" onChange={changeHandler} />
        </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      </Form>
    </Container>
  );
}

export default Register;
