import React, { useState, Fragment } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { Form, Button } from "react-bootstrap";

function Login({ setIsAuth }) {
    const [toRedirect, setToRedirect] = useState(false);
    const [ form, setForm ] = useState({
        email: '',
        password: ''
    });

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitHandler(e) {
        e.preventDefault();
        let res = await axios.post(process.env.REACT_APP_ACC + "/login", form);
        if(res.status === 200) {
            localStorage.setItem('token', res.data.token);
            setToRedirect(true);
            setIsAuth(true);
        }
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
      { toRedirect && <Redirect to="/" /> }
    </Fragment>
     

  );
}

export default Login;
