import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Row, Col, Container, Card, Form, Image, Button, Select} from "react-bootstrap";
import axios from "axios";
import {decode} from "jsonwebtoken";

function Product() {
    const [productData, setProductData] = useState([])
    const [ribbons, setRibbons] = useState([])
    const [wraps, setWraps] = useState([])
    const [cart, setCart] = useState({})
    let {productId} = useParams();
    console.log(productId)//gets the current product id

useEffect(()=>{
    getProducts();
},[])


async function getProducts(){
    try {
        //note: always include "REACT_APP_XXXX" before custom name, its a react rule
        let response = await axios.get(process.env.REACT_APP_PRODUCTS);
        let product = response.data.products.find((el)=>(el._id == productId));
        setProductData(product);
        setRibbons(product.customisation.ribbon);
        setWraps(product.customisation.wrap);
    }catch (error){
        console.log(error)
    }
}


function changeHandler(e){
    setCart((cart)=>({...cart,[e.target.name]: e.target.value}));
}

async function addToCart(){
    try {
        
        // await axios.put(process.env.REACT_APP_PRODUCTS)
    } catch (error){

    }
}


console.log(addToCart)

    return (
        <Row>
            <Col md={6}>
                 <Image src={productData.img_url} fluid/>
            </Col>
            <Col md={6}>
                <Card>
                <Card.Body>
                    <Card.Title>
                    {productData.productName}
                    </Card.Title>
                    <Card.Text>
                    {productData.desc}
                    </Card.Text>
                </Card.Body>
                </Card>
                <Form.Group>
                <Form inline>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    name="ribbon"
                    onChange={changeHandler}
                    >
                    <option>Choose a ribbon</option>
                    {ribbons.map((ribbon,index)=>(
                        <option 
                        value={ribbon}
                        >{ribbon}</option>
                    ))}
                </Form.Control>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    name="wrap"
                    onChange={changeHandler}
                    >
                    <option>Choose a wrap</option>
                    {wraps.map((wrap,index)=>(
                        <option 
                        value={wrap}
                        >{wrap}</option>
                    ))}
                </Form.Control>
                </Form>
                <Form inline>
                
                <Form.Control 
                className="mx-2" 
                type="Number" 
                name="count" 
                placeholder="Quantity" 
                onChange={changeHandler}
                />
                
                
                <Button 
                className="mx-2"
                onClick={addToCart}
                >Add to Cart</Button>
                </Form>
                </Form.Group>
            </Col>
        </Row>
    )
};

export default Product;
