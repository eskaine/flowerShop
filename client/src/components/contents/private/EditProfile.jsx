import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { axiosPut } from "../../../helpers/api";
import { setUserInfo } from "../../../helpers/actions";

function EditProfile({ setShow }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    address: '',
    phone: '',
  });

  function changeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    let url = process.env.REACT_APP_USER + `/${user.id}`;
    let data = await axiosPut(url, form, user.token);
    if (data) {
        dispatch(setUserInfo(data.updatedData));
        setShow(false);
    };
  }

  useEffect(() =>{
    console.log(user)
    setForm({...user});
  }, []);

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formFirstname">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          name="firstName"
          type="text"
          value={form.firstName}
          placeholder="First Name"
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group controlId="formLastname">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          name="lastName"
          type="text"
          value={form.lastName}
          placeholder="Last Name"
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          name="email"
          type="email"
          value={form.email}
          placeholder="Email"
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group controlId="formAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          name="address"
          type="text"
          value={form.address}
          placeholder="Address"
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group controlId="formPhone">
        <Form.Label>Contact No.</Form.Label>
        <Form.Control
          name="phone"
          type="number"
          value={form.phone}
          placeholder="Contact Number"
          onChange={changeHandler}
        />
      </Form.Group>
      <Button className="button" type="submit">
        Update
      </Button>
    </Form>
  );
}

export default EditProfile;
