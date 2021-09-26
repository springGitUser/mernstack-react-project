import React from "react";
import { Card } from "react-bootstrap";
import RatingComponent from "./RatingComponent";
const ProductComponent = ({ product }) => {
  return (
    <div>
      <Card className="my-3 py-3 rounded">
        <a href={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top"></Card.Img>
        </a>
        <Card.Body>
          <a href={`/product/${product.__id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
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
