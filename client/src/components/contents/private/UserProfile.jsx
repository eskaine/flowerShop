import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Form, Button, Row, Col, Image } from "react-bootstrap";
import { axiosAuthGet } from "../../../helpers/api";
import { setUserInfo } from "../../../actions/actions";

function UserProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  async function fetch() {
    let data = await axiosAuthGet(
      process.env.REACT_APP_USER + `/${user.id}`,
      user.token
    );
    if (data) dispatch(setUserInfo(data.userDetails));
  }

  useEffect(() => {
    fetch();
  }, []);

    return (
        <Container>
            <Row>
                <Col md={6} s={12} id="profile"
                    // style={{backgroundImage: `url(https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg)`}}
                    >
                        <Image src="https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg" fluid/>
                </Col>
                <Col md={6} s={12}>
                    <h3 className="formLabel">Profile</h3>
                        <Form.Label>Username: {user.username}</Form.Label><br />
                        <Link
                            to={{
                                pathname: `/profile/editpassword`,
                                state: { user },
                            }} >
                                <Button className="button">
                                    Change Password
                                </Button>
                            </Link>
                    
                    <Form>
                    <Form.Group controlId="formFirstname">
                        <Form.Label>First Name:</Form.Label>
                        {user.firstname}
                    </Form.Group>
                    <Form.Group controlId="formLastname">
                        <Form.Label>Last Name:</Form.Label>
                        {user.lastname}
                    </Form.Group>  
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        {user.email}
                    </Form.Group>
                    <Form.Group controlId="formAddress">
                        <Form.Label>Address</Form.Label>
                        {user.address}
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Contact No.</Form.Label>
                        {user.phone}
                    </Form.Group>
                    <Link
                            to={{
                                pathname: `/profile/update`,
                                state: { user },
                            }} >
                                <Button className="button">
                                    Update Profile
                                </Button>
                            </Link>
                    </Form>
                </Col>
            </Row>
      </Container>
    )
};


export default UserProfile;
