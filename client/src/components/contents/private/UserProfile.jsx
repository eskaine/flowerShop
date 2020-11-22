import React, {useState} from 'react';
import { Container, Form, Button, Row, Col, Jumbotron } from 'react-bootstrap';

function UserProfile() {

    const [ form, setForm ] = useState({
        username: '',
        email: '',
        password: ''
    });

    function changeHandler(e) {
        setForm({...form, [e.target.name]: e.target.value});
    }

    async function submitHandler(){
        // fill in function here
    }


    return (
        <Container>
            <Row>
                <Col md={6} s={12}
                    style={{backgroundImage: `url(https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg)`}}
                    >
                        <div className="text-center m-5">
                            <h3>Update Your Profile</h3>
                        </div>
                </Col>
                <Col md={6} s={12}>
                    <Form onSubmit={submitHandler}>
                    <Form.Group controlId="formFirstname">
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control name="firstname" type="text" value={form.firstname} placeholder="First Name" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formLastname">
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control name="lastname" type="text" value={form.lastname} placeholder="Last Name" onChange={changeHandler} />
                    </Form.Group>
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
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" type="text" value={form.address} placeholder="Address" onChange={changeHandler} />
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control name="phone" type="number" value={form.phone} placeholder="Contact Number" onChange={changeHandler} />
                    </Form.Group>
                    <Button id="submit-btn" type="submit">
                        Update Profile
                    </Button>
                    </Form>
                </Col>
            </Row>
      </Container>
    )
};

export default UserProfile;
