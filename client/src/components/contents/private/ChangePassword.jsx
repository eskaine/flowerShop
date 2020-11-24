import React, { useState } from 'react'
import axios from 'axios';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import { authHeader } from '../../../helpers/func';


function ChangePassword({location}) {
    const {user} = location;
    console.log(user);
    const [ passwords, setPasswords ] = useState({
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    });

    function changeHandler(e) {
        setPasswords({...passwords, [e.target.name]: e.target.value});
    }

    async function passwordHandler(e){
        console.log("passwords", passwords);
        e.preventDefault();
        try {
            let res = await axios.put(process.env.REACT_APP_USER + `/${user.id}/password`, passwords, authHeader(user.token));
            if(res.status === 200) {
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Form onSubmit={passwordHandler}>
            <Form.Group controlId="formPassword">
                <Form.Label>Old Password</Form.Label>
                <Form.Control name="oldPassword" type="password" value={passwords.oldPassword} placeholder="Old Password" onChange={changeHandler} />
            </Form.Group>
            <Row>
                <Col md={6}>
                    <Form.Group controlId="formPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control name="newPassword" type="password" value={passwords.newPassword} placeholder="New Password" onChange={changeHandler} />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Confirm New Password</Form.Label>
                        <Form.Control name="confirmPassword" type="password" value={passwords.confirmPassword} placeholder="Confirm New Password" onChange={changeHandler} />
                    </Form.Group>
                </Col>
            </Row>
            <Button id="submit-btn" type="submit">
                Change Password
            </Button>
        </Form>
    )
}

export default withRouter(ChangePassword)
