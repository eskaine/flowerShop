import React, { Fragment, useState, useEffect } from 'react';
import { Card, Accordion, Col, Container, Row, Image, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { axiosGet } from "../../../helpers/api";



function Checkout() {
    const user = useSelector(state => state.user);
    const [orders, setOrders] = useState([]);
    let shipping = ["Self-pickup", "SingPost", "Ninja-van"];
    
    async function fetchCheckOut(){
        let url = process.env.REACT_APP_CART + `/${user.id}`;
        let res = await axiosGet(url, user.token);
        setOrders(res.userCart)

    }


    useEffect(() => {
        fetchCheckOut();
    },[])


    console.log(user)

    return (
        <Fragment>
            <Accordion defaultActiveKey="1">
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                        <div className="d-flex justify-content-between align-items-center">
                            <div><h4>ORDER SUMMARY</h4></div> 
                            <div><text className="text-muted">click to expand</text></div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="border">
                            {orders.map(order=>(
                                            <Container className="cart-item">
                                            <Container className="my-auto">
                                              <Row>
                                                <Col xs={12} s={10} md={2} lg={2} >
                                                  <Row>
                                                    <Image 
                                                    src={order.cartItem.img_url} 
                                                    fluid className="cart-img" />
                                                  </Row>
                                                </Col>
                                                <Col s={10} md={10} lg={10}>
                                                  <Row className="p-2">
                                                    <Col xs={10} s={10} className="justify-content-start">
                                                      <Card.Title className="my-auto formLabel">
                                                        {order.cartItem.productName}
                                                      </Card.Title>
                                                    </Col>
                                                  </Row>
                                                  <Row>
                                                    <Col s={10} md={6} lg={6}>
                                                      <p>
                                                          {order.cartItem.desc}
                                                          </p>
                                                    </Col>
                                                    <Col s={8} md={2} lg={2}>
                                                      <p>
                                                        <span className="formLabel">Ribbon:</span>{" "}
                                                        {order.ribbon}
                                                      </p>
                                                      <p>
                                                        <span className="formLabel">Wrapper:</span>{" "}
                                                        {order.wrap}
                                                      </p>
                                                    </Col>
                              
                                                    <Col s={8} md={2} lg={2}>
                                                      <p><span className="formLabel">Price:</span> SGD$ 
                                                      {order.totalPrice}
                                                      </p>
                              
                                                    </Col>
                                                    <Col s={8} md={2} lg={2}>
                                                      <p>
                                                        <span className="formLabel">Quantity:</span>{" "}
                                                        {order.count}
                                                      </p>
                                                    </Col>
                                                  </Row>
                                                </Col>
                                              </Row>
                                            </Container>
                                          </Container>
                            ))}

                        </Card.Body>
                    </Accordion.Collapse>
            </Accordion>
            <Accordion defaultActiveKey="1">
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                        <div className="d-flex justify-content-between align-items-center">
                            <div><h4>DELIVERY ADDRESS - USER INFORMATION</h4></div> 
                            <div><text className="text-muted">click to expand</text></div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="border">
                            <Card.Text>
                                <text className="font-weight-bold" >Address:</text> <br/>
                                {user.address}
                            </Card.Text>
                            <Card.Text>
                                <h5 className="font-weight-bold">Contact</h5>
                            </Card.Text>
                            <Card.Text>
                            <text className="font-weight-bold">E-mail:</text> <br/>
                                {user.email}
                            </Card.Text>
                            <Card.Text>
                            <text className="font-weight-bold" >Phone Number:</text><br/>
                                +65 {user.phone}
                            </Card.Text>
                        </Card.Body>
                    </Accordion.Collapse>
            </Accordion>
            <Accordion defaultActiveKey="1" >
                    <Accordion.Toggle as={Card.Header} eventKey="0" >
                        <div className="d-flex justify-content-between align-items-center">
                            <div><h4>SHIPPING OPTIONS</h4></div> 
                            <div><text className="text-muted">click to expand</text></div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="border">


                        <Form className="mt-3" inline>
                                <Form.Control
                        as="select"
                        className="my-1 mr-sm-2 options"
                        id="inlineFormCustomSelectPref"
                        custom
                        name="ribbon"
                        // onChange={changeHandler}
                      >
                        <option>Choose Shipping</option>
                        {shipping.map((shipping, index) => (
                          <option key={index} value={shipping}>
                            {shipping}
                          </option>
                        ))}
                      </Form.Control>
                            </Form>


                        </Card.Body>
                    </Accordion.Collapse>
            </Accordion>
        </Fragment>
    )
};

export default Checkout;
