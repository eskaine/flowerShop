import React, { useState, Fragment, useEffect } from "react";
import { Row, Col, Card, Form, Image, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Cart() {
  const [displayCart, setDisplayCart] = useState([]);
  const [quantity, setQuantity] = useState({});
  const user = useSelector(state => state.user); 


  async function getCart() {
    try {
      let response = await axios.get(
        process.env.REACT_APP_CART + `/${user.id}`
      );
      // console.log(response.data.userCart);
      setDisplayCart(response.data.userCart);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateQuantity() {
    try {
      let response = await axios.put(
        process.env.REACT_APP_CART + `/${user.id}`,
        quantity
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  }

  async function removeItem(e) {
    try {
      // let data = { cartid: e.target.id, userid: user.id };
      // console.log("data:",data);
      let response = await axios.delete(
        process.env.REACT_APP_CART + `/${user.id}/${e.target.id}`);
        console.log(response);
      getCart();
    } catch (error) {}
  }

  function changeHandler(e) {
    setQuantity((quantity) => ({
      ...quantity,
      cartid: e.target.id,
      [e.target.name]: e.target.value,
      userid: user.id,
    }));
    console.log(quantity);
  }

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Fragment>
      <Container> 
      <Row>
        <Col s={12} md={5} className="d-flex justify justify-content-center">
          <h3 className="formLabel" >Your Cart</h3>
        </Col>
        <Col s={12} md={7} className="d-flex justify-content-center">
        <Link className="button"
          to={{
              pathname: `/checkout`,
              state: { displayCart },
          }} >
                Check Out
          </Link>
        <Link className="button ml-5"
          to={{ pathname: `/products` }} >
                Continue Browsing
          </Link>
        </Col>
      </Row>


      <Container>

          {displayCart.map((cart, index) => (
            <Container className="cart-item">
              <Container className="my-auto">
                <Row>
                  <Col xs={12} s={10} md={2} lg={2} >
                    <Image src={cart.cartItem.img_url} fluid className="cart-img" />
                  </Col>
                  <Col s={10} md={10} lg={10}>
                    <Row className="p-2">
                      <Col xs={10} s={10} className="justify-content-start">
                        <Card.Title className="my-auto formLabel">{cart.cartItem.productName}</Card.Title>
                      </Col>
                      <Col xs={2} s={2} className="p-0 d-flex justify-content-end">
                        <Button id={cart._id} onClick={removeItem} className="del-button">
                          x
                        </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col s={10} md={6} lg={6}>
                        <p>{cart.cartItem.desc}</p>
                      </Col>
                      <Col s={8} md={2} lg={2}>
                        <p><span className="formLabel">Ribbon:</span> {cart.ribbon}</p>
                        <p><span className="formLabel">Wrapper:</span> {cart.wrap}</p>
                      </Col>
                      <Col s={8} md={2} lg={2} className="px-1">
                      <p><span className="formLabel">Price:</span> SGD$ {cart.totalPrice}</p>
                      </Col>
                      <Col s={8} md={2} lg={2}>
                        <p><span className="formLabel">Quantity:</span> {cart.count}</p>
                        <Form.Control
                          type="Number"
                          name="count"
                          id={cart._id}
                          min={1}
                          placeholder={cart.count}
                          onChange={changeHandler}
                        />
                        <Button className="button" onClick={updateQuantity}>Update</Button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Container>
          ))}
          </Container>
          
          { (displayCart.length > 5 &&
          <Row className="mt-3">
            <Col s={12} md={5}>
            </Col>
            <Col s={12} md={7} className="d-flex justify-content-center">
            <Link className="button"
              to={{
                  pathname: `/checkout`,
                  state: { displayCart },
              }} >
                    Check Out
              </Link>
            <Link className="button ml-5"
              to={{ pathname: `/products` }} >
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

