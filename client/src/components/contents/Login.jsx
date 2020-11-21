import React, { useState, Fragment } from "react";
import { Container, Form, Button } from "react-bootstrap";

function Login() {
    const [ form, setForm ] = useState({
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
    <Fragment>
      
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" value={form.email} placeholder="Email" onChange={changeHandler} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" value={form.password} placeholder="Password" onChange={changeHandler} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Fragment>
  );
}

export default Login;
