import { React, useState, useEffect } from "react";
// import product from "../products";
import { Row, Col } from "react-bootstrap";
import ProductComponent from "../components/ProductComponent";
import axios from "axios";
const HomeScreen = () => {
  //Declaring the Empty array in set State hook
  const [product, setProducts] = useState([]);

  //Calling a Get Api call in ComponentWIllMount lifecycle event
  //useEffect is same in Functional Components

  useEffect(() => {
    //Calling api/products in express server
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    //Calling the FetchProducts method to get the products data from server...
    fetchProducts();
  }, []);
  return (
    <>
      <h3>Latest Products</h3>
      <Row>
        {product.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductComponent product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
