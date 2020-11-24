import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { isAuth }  from '../../actions/actions';

function Login() {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.user.token);
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
        console.log(res);
        if(res.status === 200) {
          let token = res.data.token;
            dispatch(isAuth(token));
        }
    }
  return (
    <Container>
      <Row>
        <Col md={6} s={12}
        className="cart-item"
          style={{
            height: '60vh',
            backgroundImage: `url(https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg)`
          }}
            >
        </Col>
        <Col md={6} s={12}>
          <Form onSubmit={submitHandler} className="cart-item">
            <h3 className="formLabel">Log In</h3>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" value={form.email} placeholder="Email" onChange={changeHandler} />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" value={form.password} placeholder="Password" onChange={changeHandler} />
            </Form.Group>
            <Button className="button" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
        { authState && <Redirect to="/" /> }
    </Container>
  );
}

export default Login;
