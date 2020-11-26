import React, { Fragment, useState, useEffect } from 'react';
import { Card, Accordion, Col, Container, Row, Image, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { showAlert } from "../../../helpers/actions"
import { axiosGet } from "../../../helpers/api";

function Checkout() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [orders, setOrders] = useState([]);
    const [total, setTotal] = useState(0);
    const [accHeader, setAccHeader] = useState(
      {
        header1: true,
        header2: true,
        header3: true
      }
    );
    
    let shipping = ["Self-pickup", "SingPost", "Ninja-van"];
    
    async function fetchCheckOut(){
        let url = process.env.REACT_APP_CART + `/${user.id}`;
        let res = await axiosGet(url, user.token);
        setOrders(res.userCart)
        calcCart(res.userCart);
    }

    function calcCart(price){
      let sum = 0;
      price.forEach(item=>(
        sum += item.totalPrice
      ))
      setTotal(sum)
    }

    function clickState(e){
      let id = e.target.id
      if(id == 1) {  
        (accHeader.header1 === true) ? setAccHeader({...accHeader, header1: false}) : setAccHeader({...accHeader, header1: true})
      } else if ( id == 2) {
        (accHeader.header2 === true) ? setAccHeader({...accHeader, header2: false}) : setAccHeader({...accHeader, header2: true})
      } else if ( id == 3) {
        (accHeader.header3 === true) ? setAccHeader({...accHeader, header3: false}) : setAccHeader({...accHeader, header3: true})
      }
    }

    function submitHandler(){
      dispatch(showAlert({ variant: "success", message: "Thank you for your order!"}));
    }

    useEffect(() => {
        fetchCheckOut();
    },[])

    return (
        <Fragment>
            <Accordion defaultActiveKey="1">
                    <Accordion.Toggle 
                    as={Card.Header} 
                    eventKey="0" 
                    onClick={clickState}
                    id={1}
                    >
                        <div 
                        onClick={clickState}
                        id={1}
                        className="d-flex justify-content-between align-items-center">
                            <div 
                            onClick={clickState}
                            id={1}>
                              <h4
                              onClick={clickState}
                              id={1}>
                              ORDER SUMMARY</h4></div> 
                            <div
                            onClick={clickState}
                            id={1}
                            ><text className="text-muted">{(accHeader.header1 === true) ? "click to expand" : "click to collapse"}</text></div>
                        </div>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="border">
                        <Container className="cart-item">
                                    <Container className="my-auto px-0">
                                      <Row>
                                      <Col s={10} md={6} lg={6}>
                                      </Col>
                                      <Col s={8} md={6} lg={6} >
                                        <p className="m-0"><span className="font-weight-bold">Grand Total:</span> SGD${total}</p>
                                      </Col>
                                          </Row>
                                    </Container>
                                  </Container>
                            {orders.map((order, i)=>(
                                            <Container className="cart-item" key={i}>
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
                    <Accordion.Toggle 
                    as={Card.Header} 
                    eventKey="0" 
                    onClick={clickState}
                        id={2}
                        >
                        <div 
                        onClick={clickState}
                        id={2}
                        className="d-flex justify-content-between align-items-center">
                            <div
                            onClick={clickState}
                            id={2}
                            ><h4
                            onClick={clickState}
                            id={2}
                            >DELIVERY ADDRESS - USER INFORMATION</h4></div> 
                            <div
                            onClick={clickState}
                            id={2}
                            ><text className="text-muted">{(accHeader.header2 === true) ? "click to expand" : "click to collapse"}</text></div>
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
                    <Accordion.Toggle 
                    as={Card.Header} 
                    eventKey="0" 
                    onClick={clickState}
                        id={3}>
                        <div 
                        className="d-flex justify-content-between align-items-center"
                        onClick={clickState}
                        id={3}
                        >
                            <div
                            onClick={clickState}
                            id={3}
                            ><h4
                            onClick={clickState}
                            id={3}
                            >SHIPPING OPTIONS</h4></div> 
                            <div
                            onClick={clickState}
                            id={3}
                            ><text className="text-muted">{(accHeader.header3 === true) ? "click to expand" : "click to collapse"}</text></div>
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
            <Row className="mt-5">
          <Col s={12} md={5} className="d-flex justify justify-content-center">
          </Col>
          <Col s={12} md={7} className="d-flex justify-content-center">
            <Link onClick={submitHandler}
            to="/profile"
              className="button nav-item nav-link"
            >
              Place Order
            </Link>
          </Col>
        </Row>
        </Fragment>
    )
};

export default Checkout;
