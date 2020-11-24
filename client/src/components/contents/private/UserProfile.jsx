import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { axiosGet } from "../../../helpers/api";
import { setUserInfo } from "../../../actions/actions";
import SettingsModal from "./SettingsModal";
import EditProfile from "./EditProfile";
import ChangePassword from "./ChangePassword";

function UserProfile() {
  const [showModal, setShowModal] = useState(false);
  const [modalForm, setModalForm] = useState(0);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  function setModalData() {
    return modalForm
      ? {
          title: "Update Profile",
          component: EditProfile,
        }
      : {
          title: "Change Password",
          component: ChangePassword,
        };
  }

  function handleShow(n) {
    setModalForm(n);
    setShowModal(true);
  }

  async function fetch() {
    let url = process.env.REACT_APP_USER + `/${user.id}`;
    let data = await axiosGet(url, user.token);
    if (data) dispatch(setUserInfo(data.userDetails));
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <Container>
      <Row>
        <Col
          md={6}
          s={12}
          id="profile"
          // style={{backgroundImage: `url(https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg)`}}
        >
          <Image
            src="https://media.karousell.com/media/photos/products/2017/08/30/wedding_bridal_bouquet_fresh_flowers_hydrangeas_and_roses_1504082166_c902161b.jpg"
            fluid
          />
        </Col>
        <Col md={6} s={12}>
          <h3 className="formLabel">Profile</h3>
          <div>Username: {user.username}</div>
          <div>First Name: {user.firstName}</div>
          <div>Last Name: {user.lastName}</div>
          <div>Email: {user.email}</div>
          <div>Address: {user.address}</div>
          <div>Contact No.: {user.phone}</div>
          <Button className="button" onClick={() => handleShow(1)}>
            Update Profile
          </Button>
          <br />
          <Button className="button" onClick={() => handleShow(0)}>
            Change Password
          </Button>
        </Col>
      </Row>
      <SettingsModal
        show={showModal}
        setShow={setShowModal}
        data={setModalData()}
      />
    </Container>
  );
}

export default UserProfile;
