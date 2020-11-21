import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, Form, Button } from "react-bootstrap";
import { isAuth }  from '../../actions/actions';

function Register() {
    const dispatch = useDispatch();
    const [toRedirect, setToRedirect] = useState(false);
    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: ''
    });

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitHandler(e) {
        e.preventDefault();
        let res = await axios.post(process.env.REACT_APP_ACC + "/register", form);
        if(res.status === 200) {
            localStorage.setItem('token', res.data.token);
            setToRedirect(true);
            dispatch(isAuth());
        }
    }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
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
      { toRedirect && <Redirect to="/" /> }
    </Container>
  );
}

export default Register;
