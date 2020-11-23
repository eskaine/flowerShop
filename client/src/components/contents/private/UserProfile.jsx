import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { authHeader } from '../../../helpers/func';

function UserProfile() {
    const user = useSelector(state => state.user);
    const [ form, setForm ] = useState({
        firstname:  '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        address: '',
        contact: ''
    });

    async function fetch() {
        try {
            let res = await axios.get(process.env.REACT_APP_USER + `/profile/${user.id}`, authHeader(user.token));
            if(res.status === 200) {
                setForm({...form, ...res.data.userDetails});
            }
        } catch (err) {
            console.error(err);
        }
    }

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitHandler(e){
        e.preventDefault();
        try {
            let res = await axios.post(process.env.REACT_APP_USER + `/profile/${user.id}`, form, authHeader(user.token));
            if(res.status === 200) {
                setForm({...form, ...res.data.userDetails});
            }
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetch();
    }, []);


    return (
        <Container>
            <Row>
                <Col md={6} s={12}
                    style={{backgroundImage: `url(https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg)`}}
                    >
                </Col>
                <Col md={6} s={12}>
                    <Form onSubmit={submitHandler}>
                    <h3 className="formLabel">Profile</h3>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="text" value={form.username} disabled />
                    </Form.Group>
                    <Form.Group controlId="formFirstname">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control name="firstname" type="text" value={form.firstname} placeholder="First Name" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formLastname">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control name="lastname" type="text" value={form.lastname} placeholder="Last Name" onChange={changeHandler} />
                    </Form.Group>  
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" value={form.email} placeholder="Email" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" value={form.password} placeholder="Password" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" type="text" value={form.address} placeholder="Address" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control name="contact" type="number" value={form.contact} placeholder="Contact Number" onChange={changeHandler} />
                    </Form.Group>
                    <Button id="submit-btn" type="submit">
                        Update
                    </Button>
                    </Form>
                </Col>
            </Row>
      </Container>
    )
};

export default UserProfile;
