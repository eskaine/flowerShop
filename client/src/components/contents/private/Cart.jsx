import React, { useState, Fragment, useEffect } from "react";
import { Row, Col, Card, Form, Image, Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { axiosGet, axiosPut, axiosDel } from "../../../helpers/api";

function Cart() {
  const [displayCart, setDisplayCart] = useState([]);
  const [quantity, setQuantity] = useState({});
  const [total, setTotal] = useState(0)
  const user = useSelector(state => state.user); 
  
  async function getCart() {
    let url = process.env.REACT_APP_CART + `/${user.id}`;
    let res = await axiosGet(url, user.token);
    setDisplayCart(res.userCart);
    calcCart(res.userCart);
  }
  
  async function updateQuantity() {
    let url = process.env.REACT_APP_CART + `/${user.id}`;
    await axiosPut(url, quantity, user.token);
    getCart();
  }
  
  async function removeItem(e) { 
    let url = process.env.REACT_APP_CART + `/${user.id}/${e.target.id}`;
    await axiosDel(url, user.token);
    getCart();
  }

  function calcCart(price){
    let sum = 0;
    price.forEach(item=>(
      sum += item.totalPrice
    ))
    setTotal(sum)
  }

  function changeHandler(e) {
    setQuantity((quantity) => ({
      ...quantity,
      cartid: e.target.id,
      [e.target.name]: e.target.value,
      userid: user.id,
    }));
  }

  useEffect(() => {
    getCart();
  }, []);
  
  return (
    <Fragment>
      <Container className="mt-5">
        <Row>
          <Col s={12} md={5} className="d-flex justify justify-content-center">
            <h3 className="formLabel">Your Cart</h3>
          </Col>
          <Col s={12} md={7} className="d-flex justify-content-center">
            {displayCart.length > 0 && 
            <Link
              className="button"
              to={{
                pathname: `/checkout`,
                state: { displayCart },
              }}
            >
              Check Out
            </Link> }
            <Link className="button ml-5" to={{ pathname: `/browse` }}>
              Continue Browsing
            </Link>
          </Col>
        </Row>
        <Container>
          {displayCart.map((cart, index) => (
            <Container key={index} className="cart-item">
              <Container className="my-auto">
                <Row>
                  <Col xs={12} s={10} md={2} lg={2} >
                    <Row>
                      <Image src={cart.cartItem.img_url} fluid className="cart-img" />
                    </Row>
                  </Col>
                  <Col s={10} md={10} lg={10}>
                    <Row className="p-2">
                      <Col xs={10} s={10} className="justify-content-start">
                        <Card.Title className="my-auto formLabel">
                          {cart.cartItem.productName}
                        </Card.Title>
                      </Col>
                      <Col
                        xs={2}
                        s={2}
                        className="p-0 d-flex justify-content-end"
                      >
                        <Button
                          id={cart._id}
                          onClick={removeItem}
                          className="del-button"
                        >
                          x
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col s={10} md={6} lg={6}>
                        <p>{cart.cartItem.desc}</p>
                      </Col>
                      <Col s={8} md={2} lg={2}>
                        <p>
                          <span className="formLabel">Ribbon:</span>{" "}
                          {cart.ribbon}
                        </p>
                        <p>
                          <span className="formLabel">Wrapper:</span>{" "}
                          {cart.wrap}
                        </p>
                      </Col>
                      <Col s={8} md={2} lg={2}>
                        <p><span className="formLabel">Price:</span> SGD$ {cart.totalPrice}</p>
                      </Col>
                      <Col s={8} md={2} lg={2}>
                        <p>
                          <span className="formLabel">Quantity:</span>{" "}
                          {cart.count}
                        </p>
                        <Form.Control
                          type="Number"
                          name="count"
                          id={cart._id}
                          min={1}
                          placeholder={cart.count}
                          onChange={changeHandler}
                        />
                        <Button className="button" onClick={updateQuantity}>
                          Update
                        </Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          ))}
          {displayCart.length > 0 ?
            <Container className="cart-item mt-5">
              <Container className="my-auto">
                <Row>
                  <Col xs={12} s={10} md={2} lg={2}>
                  </Col>
                  <Col s={10} md={10} lg={10}>
                    <Row className="p-2">
                      <Col xs={10} s={10} className="justify-content-start">
                      </Col>
                    </Row>
                    <Row>
                      <Col s={10} md={6} lg={6}>
                      </Col>
                      <Col s={8} md={6} lg={6} >
                        <p><span className="font-weight-bold">Grand Total:</span> SGD$ {total}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
          </Container> 
          :
          <Container className="cart-item mt-5 p-5 text-center">
            <h2 className="my-5">Your cart is empty!</h2>
            <Link className="button" to={{ pathname: `/browse` }}>
                Browse Products
            </Link>
          </Container>
          }
        </Container>
        {displayCart.length > 5 && (
          <Row className="mt-3">
            <Col s={12} md={5}></Col>
            <Col s={12} md={7} className="d-flex justify-content-center">
              <Link
                className="button"
                to={{
                  pathname: `/checkout`,
                  state: { displayCart },
                }}
              >
                Check Out
              </Link>
              <Link className="button ml-5" to={{ pathname: `/browse` }}>
                Continue Browsing
              </Link>
            </Col>
          </Row>
        )}
      </Container>
    </Fragment>
  );
}

export default Cart;
