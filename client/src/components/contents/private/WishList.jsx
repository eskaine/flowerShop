import React, { useState, Fragment, useEffect } from 'react';
import { Row, Col, Card, Form, Image, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from 'react-redux';
import { axiosAuthGet, axiosAuthPost, axiosAuthDel } from "../../../helpers/api";

function WishList() {
    const [wishList, setWishList] = useState([]);
    const [custom, setCustom] = useState({count: 1})
    const user = useSelector(state => state.user); 
    console.log(user)

    async function fetchWishList(){
            let data = await axiosAuthGet(process.env.REACT_APP_WISHLIST + `/${user.id}`, user.token)
            if(data) setWishList(data.wishList)
    }

    async function removeFromList(e){
            let data = await axiosAuthDel(process.env.REACT_APP_WISHLIST + `/${user.id}/${e.target.value}`, user.token)
            fetchWishList();
    }


    async function pushToCart(e) {
        e.stopPropagation();
        let data = await axiosAuthPost(process.env.REACT_APP_CART + `/${user.id}/${e.target.value}`, custom, user.token);
    }


    function changeHandler(e) {
        setCustom((custom) => ({ ...custom, [e.target.name]: e.target.value }));
    }
    
    console.log(custom)



    console.log(wishList)
    useEffect(() => {
        fetchWishList();
    },[])
    
    return (
        <Fragment>
      <Row className="no-gutters">
        <Col md={8}>
          Wishlist
          {wishList.map((wishList, index) => (
            <Row key={index} className="no-gutters">
              <Col md={6}>
                <Image src={wishList.img_url} fluid className="img-thumbnail" />
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
      </Row>
    </Fragment>
    )
};

export default WishList;
