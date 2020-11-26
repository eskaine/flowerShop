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
          <Col key={i} xs={12} s={9} md={6} lg={4} xl={3} className="mx-0 my-2 animate__animated animate__zoomIn">
            <Container className="cart-item product-card">
              <Link
                to={{
                  pathname: `/products/${productUrl(product.productName)}`,
                  state: { product },
                }}
              >
              <Row>
                <Card.Img variant="top" className="mx-auto product-img" src={product.img_url} />
              </Row>
              <Row className="mt-3 mx-auto">
                <Col xs={10} className="p-0" >
                  <h6 className="formLabel prod-name">{product.productName}</h6>
                </Col>
                <Col xs={2} className="p-0">
                  <h5 className="formLabel">S${product.price}</h5>
                </Col>
              </Row>
              </Link>
            </Container>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllProducts;
