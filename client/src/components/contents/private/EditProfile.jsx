import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { axiosAuthPut } from "../../../helpers/api";
import { setUserInfo } from "../../../actions/actions";

function EditProfile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    address: "",
    phone: "",
  });

  function changeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submitHandler(e) {
    e.preventDefault();
    let url = process.env.REACT_APP_USER + `/${user.id}`;
    let data = await axiosAuthPut(url, form, user.token);
    if (data) dispatch(setUserInfo(data.updatedData));
  }

  useEffect(() => {
    setForm({ ...user });
  }, []);
  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="formFirstname">
        <Form.Label>First Name:</Form.Label>
        <Form.Control
          name="firstname"
          type="text"
          value={form.firstname}
          placeholder="First Name"
          onChange={changeHandler}
        />
      </Form.Group>
      <Form.Group controlId="formLastname">
        <Form.Label>Last Name:</Form.Label>
        <Form.Control
          name="lastname"
          type="text"
          value={form.lastname}
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
      <Button id="submit-btn" type="submit">
        Update
      </Button>
    </Form>
  );
}

export default EditProfile;
