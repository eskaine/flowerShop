import React, { useState, Fragment, useEffect } from 'react';
import { Row, Col, Card, Image, Button, Form, Container } from "react-bootstrap";
import { useSelector } from 'react-redux';
import { axiosGet, axiosPost, axiosDel } from "../../../helpers/api";
import { Link } from 'react-router-dom';
import AlertModal from '../../AlertModal';

function WishList() {
    const [wishList, setWishList] = useState([]);
    const [custom, setCustom] = useState({count: 1})
    const user = useSelector(state => state.user); 
    const [showModal, setShowModal] = useState(false);
    const [errMsg, setErr] = useState({});

    function setModalData(x) {
      switch(x) {
          case 1:
              setErr({message: "Please select a ribbon and wrap!"});
              break;
          case 2: 
              setErr({message: "Please select a ribbon!"});
              break;
          case 3: 
              setErr({message: "Please select a wrap!"});
              break;
          default:
              setErr({});
      }
    }
  
  
    function handleShow(n) {
      setModalData(n);
      setShowModal(true);
    }


  async function fetchWishList() {
    let url = process.env.REACT_APP_WISHLIST + `/${user.id}`;
    let data = await axiosGet(url, user.token);
    if (data) setWishList(data.wishList);
  }


  async function removeFromList(e) {
    let url = process.env.REACT_APP_WISHLIST + `/${user.id}/${e.target.id}`;
    await axiosDel(url, user.token);
    fetchWishList();
  }


    async function pushToCart(e) {
        e.stopPropagation();
        if (custom.wrap && custom.ribbon){
          try {
              let url = process.env.REACT_APP_CART + `/${user.id}/${e.target.id}`;
              await axiosPost(url, custom, user.token);
          } catch (error) {
              console.log(error);
          }
      } else if (!custom.wrap && !custom.ribbon){
          await handleShow(1);
      } else if (custom.ribbon === undefined){
          await handleShow(2);
      } else if (custom.wrap === undefined){
          await handleShow(3);
      } 
    }


    function changeHandler(e) {
        setCustom((custom) => ({ ...custom, [e.target.name]: e.target.value }));
    }

    useEffect(() => {
        fetchWishList();
    },[])
    
    return (
      <Fragment>
        <Container>
          <Row>
          <Col xs={6} s={6} md={5} className="d-flex justify justify-content-center">
            <h3 className="formLabel" >Wishlist</h3>
          </Col>
          <Col xs={6} s={6} md={7} className="d-flex justify-content-center">
            <Link className="button"
              to={{ pathname: `/products` }} >
                    Continue Browsing
            </Link>
          </Col>
          </Row>

          <Container>
            {wishList.map((wishList, index) => (
              <Container className="cart-item">
                <Container className="my-auto">
                  <Row>
                  <Col xs={12} s={10} md={2} lg={2} >
                    <Row>
                      <Image src={wishList.img_url} fluid className="cart-img" />
                    </Row>
                  </Col>
                  <Col s={10} md={10} lg={10}>
                    <Row className="p-2">
                      <Col xs={10} s={10} className="justify-content-start">
                        <Card.Title className="my-auto formLabel">{wishList.productName}</Card.Title>
                      </Col>
                      <Col xs={2} s={2} className="p-0 d-flex justify-content-end">
                        <Button id={wishList._id} onClick={removeFromList} className="del-button">
                          x
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col s={10} md={6} lg={6}>
                        <p>{wishList.desc}</p>
                      </Col>
                      <Col s={8} md={3} lg={3}>
                        <p><span className="formLabel">Price:</span> SGD$ {wishList.price}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Form.Group className="mx-auto">
                      <Form className="mt-3" inline>
                          <Form.Control
                              as="select"
                              className="my-1 mr-sm-2 options"
                              id="inlineFormCustomSelectPref"
                              custom
                              name="ribbon"
                              onChange={changeHandler}
                          >
                              <option>Choose a ribbon</option>
                              {wishList.customisation.ribbon.map((ribbon, index) => (
                                  <option
                                      key={index}
                                      value={ribbon}
                                  >{ribbon}</option>
                              ))}
                          </Form.Control>
                          <Form.Control
                              as="select"
                              className="my-1 mr-sm-2 options"
                              id="inlineFormCustomSelectPref"
                              custom
                              name="wrap"
                              onChange={changeHandler}
                          >
                              <option>Choose a wrap</option>
                              {wishList.customisation.wrap.map((wrap, index) => (
                                  <option
                                      key={index}
                                      value={wrap}
                                  >{wrap}</option>
                              ))}
                          </Form.Control>
                          <Form.Label className="formLabel ml-3">Quantity:</Form.Label>
                          <Form.Control
                              className="mx-2 options"
                              type="Number"
                              name="count"
                              min={1}
                              max={20}
                              placeholder="1"
                              onChange={changeHandler}
                          />
                          <Button className="button"
                              id={wishList._id}
                              onClick={pushToCart}
                              >
                              Add To Cart
                          </Button>
                          </Form>
                          </Form.Group>
                    </Row>
                  </Col>
                  </Row>
                </Container>
              </Container>
            ))}
          </Container>
          <AlertModal 
                show={showModal}
                setShow={setShowModal}
                data={errMsg}
            />      
        </Container>

{/* 
        <Row className="no-gutters">
          <Col md={8}>
            Wishlist
            {wishList.map((wishList, index) => (
              <Row key={index} className="no-gutters">
                <Col md={6}>
                  <Image src={(wishList.img_url == null) ? "" : wishList.img_url} fluid className="img-thumbnail" />
                </Col>
                <Col md={6}>
                  <Card>
                    <Card.Title>{wishList.productName}</Card.Title>
                    <Card.Body>
                      <Card.Text>{wishList.desc}</Card.Text>
                      <Card.Text>
                        Price : S${wishList.price} <br />
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                  <Form.Group>
                      <Form className="mt-3" inline>
                          <Form.Control
                              as="select"
                              className="my-1 mr-sm-2 options"
                              id="inlineFormCustomSelectPref"
                              custom
                              name="ribbon"
                              onChange={changeHandler}
                          >
                              <option>Choose a ribbon</option>
                              {wishList.customisation.ribbon.map((ribbon, index) => (
                                  <option
                                      key={index}
                                      value={ribbon}
                                  >{ribbon}</option>
                              ))}
                          </Form.Control>
                          <Form.Control
                              as="select"
                              className="my-1 mr-sm-2 options"
                              id="inlineFormCustomSelectPref"
                              custom
                              name="wrap"
                              onChange={changeHandler}
                          >
                              <option>Choose a wrap</option>
                              {wishList.customisation.wrap.map((wrap, index) => (
                                  <option
                                      key={index}
                                      value={wrap}
                                  >{wrap}</option>
                              ))}
                          </Form.Control>
                      </Form>
                      <Form inline>
                          <Form.Control
                              className="mx-2 options"
                              type="Number"
                              name="count"
                              min={1}
                              max={20}
                              value={custom.count}
                              onChange={changeHandler}
                          />


                          <Button id="submit-btn" className="ml-3"
                              value={wishList._id}
                              onClick={pushToCart}
                              >
                              Add To Cart
                          </Button>
                          <Button id="submit-btn" className="ml-3"
                              value={wishList._id}
                              onClick={removeFromList}
                              >
                              Remove from Wishlist
                          </Button>
                      </Form>
                  </Form.Group>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            ))}
          </Col>
          <Col md={4} className="border">
            <Button>Continue Browsing</Button>
          </Col>
        </Row> */}
      </Fragment>
    )
};


export default WishList;
