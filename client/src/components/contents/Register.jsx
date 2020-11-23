import React, { useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { isAuth }  from '../../actions/actions';

function Register() {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.user.token);
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
          let token = res.data.token;
          dispatch(isAuth(token));
        }
    }

  return (
    <Container>
      <Row>
      <Col md={6} s={12}
        style={{
          height: '60vh',
          backgroundImage: `url(https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg)`
        }}
          >
              <div className="text-center m-5">
                  <h3>Sign Up</h3>
              </div>
      </Col>
      <Col md={6} s={12}>
        <Form onSubmit={submitHandler} >
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
        { authState && <Redirect to="/" /> }
      </Col>
      </Row>
    </Container>
  );
}

export default Register;
