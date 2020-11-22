import React, { useState, useEffect } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Button } from "react-bootstrap";
import { isAuth }  from '../../actions/actions';


function Login() {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.user.token);
    // const [toRedirect, setToRedirect] = useState(false);
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
          let token = res.data.token;
            dispatch(isAuth(token));
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
      { authState && <Redirect to="/" /> }
    </Container>
  );
}

export default Login;
