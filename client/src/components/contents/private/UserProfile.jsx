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
        address: '',
        phone: ''
    });

    const [ passwords, setPasswords ] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    async function fetch() {
        try {
            console.log(user);
            let res = await axios.get(process.env.REACT_APP_USER + `/profile/${user.id}`, authHeader(user.token));
            console.log(res);
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

    function pChangeHandler(e) {
        setPasswords({...form, [e.target.name]: e.target.value});
    }

    async function submitHandler(e){
        e.preventDefault();
        try {
            let res = await axios.put(process.env.REACT_APP_USER + `/profile/${user.id}`, form, authHeader(user.token));
            if(res.status === 200) {
                setForm({...form, ...res.data.userDetails});
            }
        } catch (err) {
            console.error(err);
        }
    }

    async function passwordHandler(e){
        e.preventDefault();
        try {
            let res = await axios.put(process.env.REACT_APP_USER + `/profile/${user.id}/password`, passwords, authHeader(user.token));
            if(res.status === 200) {
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
                    <h3 className="formLabel">Profile</h3>
                        <Form.Label>Username: {form.username}</Form.Label>
                    <Form onSubmit={passwordHandler}>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Old Password</Form.Label>
                            <Form.Control name="oldPassword" type="password" value={passwords.oldPassword} placeholder="Old Password" onChange={pChangeHandler} />
                        </Form.Group>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>New Password</Form.Label>
                                    <Form.Control name="newPassword" type="password" value={passwords.newPassword} placeholder="New Password" onChange={pChangeHandler} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formPassword">
                                    <Form.Label>Confirm New Password</Form.Label>
                                    <Form.Control name="confirmPassword" type="password" value={passwords.confirmPassword} placeholder="Confirm New Password" onChange={pChangeHandler} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button id="submit-btn" type="submit">
                            Change Password
                        </Button>
                    </Form>
                    <Form onSubmit={submitHandler}>
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
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" type="text" value={form.address} placeholder="Address" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Contact No.</Form.Label>
                        <Form.Control name="phone" type="number" value={form.phone} placeholder="Contact Number" onChange={changeHandler} />
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
