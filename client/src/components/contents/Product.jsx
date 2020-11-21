import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Row, Col, Container, Card, Form, Image, Button} from "react-bootstrap";
import Axios from "axios";


function Product() {
    const [productData, setProductData] = useState([])
    let {productId} = useParams();


useEffect(() => {
    getProducts();
    
},[])


async function getProducts(){
    try {
        //note: always include "REACT_APP_XXXX" before custom name, its a react rule
        let response = await Axios.get(process.env.REACT_APP_API_URL+`/temp/products`)
        let product = response.data.products.find((el)=>(el._id == productId))
        setProductData(product)
    }catch (error){
        console.log(error)
    }
}

console.log(productData)

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
                <Form inline>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    name="ribbon"
                    >
                    <option value="0">Choose a ribbon</option>
                    <option value="{productData.customisation.ribbon[0]}">Black</option>
                    <option value="{productData.customisation.ribbon[1]}">White</option>
                </Form.Control>
                <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                    name="wrap"
                    >
                    <option value="0">Choose a wrap</option>
                    <option value="{productData.customisation.wrap[0]}">Brown</option>
                    <option value="{productData.customisation.wrap[1]}">Black</option>
                    <option value="{productData.customisation.wrap[2]}">Pink</option>
                </Form.Control>
                
                </Form>
                <Form inline>
                <Button className="mx-2">Add to Cart</Button>
                <Form.Control className="mx-2" type="Number" placeholder="quantity" />
                </Form>
            </Col>
        </Row>
    )
};

export default Product;
