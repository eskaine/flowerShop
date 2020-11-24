import React, { useState } from 'react'
import axios from 'axios';
import { Container, Form, Button, Row, Col, Image } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import { authHeader } from '../../../helpers/func';

function EditProfile({location}) {
    const {user} = location;
    const [ form, setForm ] = useState({
        firstname:  '',
        lastname: '',
        username: '',
        email: '',
        address: '',
        phone: ''
    });

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }


    async function submitHandler(e){
        e.preventDefault();
        try {
            let res = await axios.put(process.env.REACT_APP_USER + `/${user.id}`, form, authHeader(user.token));
            if(res.status === 200) {
                setForm({...form, ...res.data.userDetails});
            }
        } catch (err) {
            console.error(err);
        }
    }
    return (
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
    )
}

export default withRouter(EditProfile)
