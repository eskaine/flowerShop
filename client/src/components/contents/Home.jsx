import React, { useEffect, useState } from 'react';
import { Row, Col, Card, CardDeck } from "react-bootstrap";
import { Link } from "react-router-dom"
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { loadState } from '../../helpers/localStorage';



function Home() {
    const [products, setProducts] = useState([]);
    const authState = useSelector(state => {
        console.log('store', state);
        console.log('localStorage', loadState());

    });



    async function getProducts() {
        try {
            //note: always include "REACT_APP_XXXX" before custom name, its a react rule
            let response = await axios.get(process.env.REACT_APP_PRODUCTS)
            setProducts(response.data.products);

        } catch (error) {
            console.log(error)
        }
    }

    function clickHandler() {

    }


    useEffect(() => {
        getProducts();
    }, [])


    return (

        <CardDeck>
            <Row className="d-flex justify-content-center no-gutters">
                {products.map((product, index) => (

                    <Col md={3} className="mx-0 my-2">
                        <Link style={{ textDecoration: 'none', color: "black" }} to={{pathname: `/products/${product.productName}`, state: {product}}} >
                        {/* <Link 
                            style={{ textDecoration: 'none', color: "black" }}
                            to={`/products/${product.productName}`}
                            state= {{product}}
                        > */}
                            <Card className="border">
                                <Card.Img variant="top" src={product.img_url} />
                                <Card.Body>
                                    <Card.Title>
                                        {product.productName}
                                    </Card.Title>
                                    <Card.Text>
                                        {product.desc}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <div className="text-muted">Price: S${product.price}</div>
                                </Card.Footer>
                            </Card>
                        </Link>
                    </Col>

                ))}
            </Row>
        </CardDeck>
    )
};

export default Home;
