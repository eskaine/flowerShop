import React, { useState } from 'react';
import { withRouter } from "react-router-dom";
import { Row, Col, Form, Image, Button, Container} from "react-bootstrap";
import { useSelector } from 'react-redux';
import AlertModal from '../AlertModal';
import { axiosPost } from "../../helpers/api"

function Product(props) {
    const {product} = props.location.state;
    const { ribbon, wrap } = product.customisation;
    const user = useSelector(state => state.user);
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
                let url = process.env.REACT_APP_CART + `/${user.id}/${product._id}`;
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

    async function addToWishlist(){
        let url = process.env.REACT_APP_WISHLIST+`/${user.id}`;
        await axiosPost(url, {productid: product._id}, user.token);
    }

    function changeHandler(e) {
        setCustom((custom) => ({ ...custom, [e.target.name]: e.target.value }));
    }

    return (
        <Row>
            <Container>
                <Row>
                    <Col xs={12} s={4} md={4} lg={4} >
                        <Row>
                            <Image src={product.img_url} fluid className="product-img" />
                        </Row>
                    </Col>
                    <Col xs={11} s={8} md={8} lg={8} className="mx-auto">
                        <Container className="cart-item py-auto">
                            <h3 className="formLabel">{product.productName}</h3>
                            <p>{product.desc}</p>
                            <Row className="mx-auto">
                                <Col xs={12} s={12} md={12} lg={10}>
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
                                            <Form.Control
                                                className="mx-2 options"
                                                type="Number"
                                                name="count"
                                                min={1}
                                                max={20}
                                                value={custom.count}
                                                onChange={changeHandler}
                                            />
                                            <Button className="button ml-3"
                                                onClick={pushToCart}>
                                                Add To Cart
                                            </Button>
                                            <Button className="button ml-3"
                                                onClick={addToWishlist}>
                                                Add To Wishlist
                                            </Button>
                                        </Form>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <AlertModal 
                show={showModal}
                setShow={setShowModal}
                data={errMsg}
            />
        </Row>
    )
};

export default withRouter(Product);
