import React from "react";
import product from "../products";
import { Row, Col } from "react-bootstrap";
import ProductComponent from "../components/ProductComponent";
const HomeScreen = () => {
  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {product.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductComponent product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
