import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Card, Form, Image, Button} from "react-bootstrap";
import axios from "axios";
import { useSelector } from 'react-redux';
import AlertModal from '../AlertModal';

function Product(props) {
    const {product} = props.location.state;
    const { ribbon, wrap } = product.customisation;
    const userid = useSelector(state => state.user.id);
    const [custom, setCustom] = useState({count: 1})
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

    async function pushToCart(e) {
        e.stopPropagation();

        if (custom.wrap && custom.ribbon){
            try {
                let data = await axios.post(process.env.REACT_APP_CART + `/${userid}/${product._id}`, custom);
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

    async function addToWishlist(){
        try {
            let productid = product._id;
            console.log(productid)
            let data = await axios.post(process.env.REACT_APP_WISHLIST+`/${userid}`, {productid: product._id});
            console.log(data)
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
                            <option>Choose A Ribbon</option>
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
                            <option>Choose A Wrap</option>
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
            <AlertModal 
                show={showModal}
                setShow={setShowModal}
                data={errMsg}
            />
        </Row>
    )
};

export default withRouter(Product);
