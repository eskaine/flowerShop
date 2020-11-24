import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Container } from "react-bootstrap";
import { productUrl } from "../../helpers/func";
import { axiosGet } from "../../helpers/api";

function AllProducts() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    let data = await axiosGet(process.env.REACT_APP_PRODUCTS);
    if(data) setProducts(data.products);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Row>
        {products.map((product, i) => (
          <Col key={i} md={6} lg={4} xl={3} className="mx-0 my-2">
            <Link
              to={{
                pathname: `/products/${productUrl(product.productName)}`,
                state: { product },
              }}
            >
              <Card className="border card">
                <Card.Img variant="top" src={product.img_url} />
                <Card.Body className="p-2 mx-auto">
                  <Card.Title id="card-title">{product.productName}</Card.Title>
                  {/* <Card.Text>{product.desc}</Card.Text> */}
                </Card.Body>
                <Card.Footer>
                  <div className="text-muted">Price: S${product.price}</div>
                </Card.Footer>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>

  );
}

export default AllProducts;
