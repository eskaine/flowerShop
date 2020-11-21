import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Form, Button } from "react-bootstrap";
import axios from "axios";
import {useSelector, useDispatch} from 'react-redux';
import {isAuth}  from '../../actions/actions';

function Login() {
    const [toRedirect, setToRedirect] = useState(false);
    const [ form, setForm ] = useState({
        email: '',
        password: ''
    });

    const dispatch = useDispatch();

    const newState = useSelector(state => {
        console.log("store 2", state);
      });

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitHandler(e) {
        e.preventDefault();
        let res = await axios.post(process.env.REACT_APP_ACCOUNT + "/login", form);
        console.log(res);
        if(res.status === 200) {
            localStorage.setItem('token', res.data.token);
            setToRedirect(true);
            dispatch(isAuth());
        }
    }

  return (
    <Container>
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
    </Container>
  );
}

export default Login;
