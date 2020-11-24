import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Card, Form, Image, Button} from "react-bootstrap";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { addToCart }  from '../../actions/actions';

function Product(props) {
    const dispatch = useDispatch();
    const {product} = props.location.state;
    const { ribbon, wrap } = product.customisation;
    const userid = useSelector(state => state.user.id);
    const [custom, setCustom] = useState({count: 1})

    async function pushToCart(e) {
        e.stopPropagation();
        try {
            let payload = { ...custom, id: product._id };
            dispatch(addToCart(payload));
            console.log(userid, product._id)
           let data = await axios.post(process.env.REACT_APP_CART + `/${userid}/${product._id}`, custom);
        } catch (error) {
            console.log(error)
        }
    }

    async function addToWishlist(){
        //to update, im unauthorised
        try {
            let id = product._id;
            let data = await axios.post(process.env.REACT_APP_USER+`/wishlist/${userid}`)
            console.log(id,data)
        }catch (error){
            console.log(error)
        }
    }

    function changeHandler(e) {
        setCustom((custom) => ({ ...custom, [e.target.name]: e.target.value }));
    }

    return (
        <Row>
            <Col md={6}>
                <Image src={product.img_url} fluid />
            </Col>
            <Col md={6}>
                <Card>
                    <Card.Body>
                        <Card.Title>
                            {product.productName}
                        </Card.Title>
                        <Card.Text>
                            {product.desc}
                        </Card.Text>
                    </Card.Body>
                </Card>
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
                            {ribbon.map((ribbon, index) => (
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
                            {wrap.map((wrap, index) => (
                                <option
                                    key={index}
                                    value={wrap}
                                >{wrap}</option>
                            ))}
                        </Form.Control>
                    </Form>
                    <Form inline>
    {/* -------------------- UPDATED THIS PART, min is one, set default value to 1 -------------------- */}
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
                            onClick={pushToCart}>
                            Add To Cart
                        </Button>
                        <Button id="submit-btn" className="ml-3"
                            onClick={addToWishlist}>
                            Add To Wishlist
                        </Button>
                    </Form>
                </Form.Group>
            </Col>
        </Row>
    )
};

export default withRouter(Product);
