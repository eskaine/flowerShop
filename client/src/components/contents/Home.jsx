import React, {useEffect, useState} from 'react';
import {Row, Col, Container, Card, CardDeck} from "react-bootstrap";
import {Link} from "react-router-dom"
import Axios from "axios";

function Home() {
    console.log('home token', localStorage.getItem('token'));
const [products, setProducts] = useState([])

useEffect(() => {
    getProducts();
},[])

async function getProducts(){
    try {
        //note: always include "REACT_APP_XXXX" before custom name, its a react rule
        let response = await Axios.get(process.env.REACT_APP_API_URL+`/temp/products`)
        setProducts(response.data.products);
        
    }catch (error){
        console.log(error)
    }
}

console.log(products)

    return (
       
            <CardDeck>  
                <Row className="d-flex justify-content-center no-gutters">
                    {products.map((product,index)=>(
                        
                        <Col md={3} className="mx-0 my-2">
                            <Link 
                            style={{ textDecoration: 'none', color: "black" }}
                            to={`/products/${product.productName}/${product._id}`}
                            >
                            <Card className="border">
                            <Card.Img variant="top"src={product.img_url}/>
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
