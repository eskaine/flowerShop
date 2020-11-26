import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Row, Col, Image } from "react-bootstrap";
import { axiosGet } from "../../../helpers/api";
import { setUserInfo } from "../../../helpers/actions";
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
            <h2 className="formLabel">Profile</h2>
            <h5>Username: {user.username}</h5>
            <h5>First Name: {user.firstName}</h5>
            <h5>Last Name: {user.lastName}</h5>
            <h5>Email: {user.email}</h5>
            <h5>Address: {user.address}</h5>
            <h5>Contact No.: {user.phone}</h5>
            <Row className="d-flex justify-content-around">
              <Button className="button" onClick={() => handleShow(1)}>
                Update Profile
              </Button>
              <Button className="button" onClick={() => handleShow(0)}>
                Change Password
              </Button>
            </Row>
          </Container>
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
