import React, { useState, Fragment, useEffect } from "react";
import { Row, Col, Card, Form, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { axiosGet, axiosPost, axiosDel } from "../../../helpers/api";

function WishList() {
  const [wishList, setWishList] = useState([]);
  const [custom, setCustom] = useState({ count: 1 });
  const user = useSelector((state) => state.user);

  async function fetchWishList() {
    let url = process.env.REACT_APP_WISHLIST + `/${user.id}`;
    let data = await axiosGet(url, user.token);
    if (data) setWishList(data.wishList);
  }

  async function removeFromList(e) {
    let url = process.env.REACT_APP_WISHLIST + `/${user.id}/${e.target.value}`;
    let data = await axiosDel(url, user.token);
    fetchWishList();
  }

  async function pushToCart(e) {
    e.stopPropagation();
    let url = process.env.REACT_APP_CART + `/${user.id}/${e.target.value}`;
    let data = await axiosPost(url, custom, user.token);
  }

  function changeHandler(e) {
    setCustom((custom) => ({ ...custom, [e.target.name]: e.target.value }));
  }

  console.log(custom);

  console.log(wishList);
  useEffect(() => {
    fetchWishList();
  }, []);

  return (
    <Fragment>
      <Row className="no-gutters">
        <Col md={8}>
          Wishlist
          {wishList.map((wishList, index) => (
            <Row key={index} className="no-gutters">
              <Col md={6}>
                <Image
                  src={wishList.img_url == null ? "" : wishList.img_url}
                  fluid
                  className="img-thumbnail"
                />
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
                          {wishList.customisation.ribbon.map(
                            (ribbon, index) => (
                              <option key={index} value={ribbon}>
                                {ribbon}
                              </option>
                            )
                          )}
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
                            <option key={index} value={wrap}>
                              {wrap}
                            </option>
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

                        <Button
                          id="submit-btn"
                          className="ml-3"
                          value={wishList._id}
                          onClick={pushToCart}
                        >
                          Add To Cart
                        </Button>
                        <Button
                          id="submit-btn"
                          className="ml-3"
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
      </Row>
    </Fragment>
  );
}

export default WishList;
