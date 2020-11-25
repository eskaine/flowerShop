import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { isAuth }  from '../../actions/actions';
import { axiosPost } from "../../helpers/api";


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
        let url = process.env.REACT_APP_ACC + "/login";
        let data = await axiosPost(url, form);
        if(data) dispatch(isAuth(data.token));
    }
  return (
    <Container className="cart-item">
      <Row>
        <Col md={6} xs={6} >
          <Container className="d-flex justify-content-center m-0 p-0">
            <Col md={12} xs={12} className="p-0">
              <div className="mx-auto p-0">
                <Image src="https://res.cloudinary.com/dfqx6m8lw/image/upload/v1606290888/mumsworkshop/product-images/website/frantz-eric-celestin-SUa1Y8Md608-unsplash_j0tc8n.jpg" fluid />
              </div>
            </Col>  
          </Container>
        </Col>
        <Col xs={6} s={6} md={6} className="d-flex align-middle m-0 p-0">
          <Container className="my-auto">
            <Form onSubmit={submitHandler} >
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
          </Container>
        </Col>
      </Row>
        { authState && <Redirect to="/" /> }
    </Container>
  );
}

export default Login;
