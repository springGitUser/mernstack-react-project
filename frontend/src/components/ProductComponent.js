import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import RatingComponent from "./RatingComponent";
const ProductComponent = ({ product }) => {
  return (
    <div>
      <Card className="my-3 py-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </Link>
        <Card.Body>
          <Link to={`/product/${product.__id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <div className="my-3">
              <RatingComponent
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">${product.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductComponent;
