import "./Product.css";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { increaseCount } from "./JS/CheckoutReducer";
import {
  addToCheckOut,
  setQuantity,
  addToTotalAmount,
} from "./JS/CheckoutReducer";
import { Alert } from "react-bootstrap";
import { loadProducts } from "./Api";
import { Rating } from "@mui/material";

const Product = ({ id, img, title, text, rating, price }) => {
  const dispatch = useDispatch();
  const firstNum = rating.split(" ")[0];
  const ratingNum = parseInt(firstNum, 10);
  const [count, setCount] = useState(0);

  const addToProducts = () => {
    if (count == 0) {
      dispatch(addToCheckOut({ id, img, title, price, rating, text }));
      dispatch(addToTotalAmount(price));
      dispatch(increaseCount());
    }
    for (let i = 0; i < count; i++) {
      dispatch(addToCheckOut({ id, img, title, price, rating, text }));
      dispatch(addToTotalAmount(price));
      dispatch(increaseCount());
    }
    setCount(0);
  };
  return (
    <Card className="product">
      <Card.Img variant="top" className="product_image" src={img} />
      <Card.Body className="product_body">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>
          <small>$</small>
          <strong>{price}</strong>
        </Card.Text>
        <div>
          <Rating
            name="half-rating-read"
            value={ratingNum}
            className="product_rating"
            precision={0.5}
            readOnly
          />
        </div>
        <Button
          onClick={() => {
            addToProducts();
            dispatch(setQuantity(id));
          }}
          style={{ backgroundColor: "#F0c14b" }}
        >
          Add To Cart
        </Button>

        <Card.Text style={{ paddingTop: "5px" }}>
          <Button
            onClick={() => {
              if (count > 0) setCount((prev) => prev - 1);
            }}
            style={{ backgroundColor: "#F0c14b" }}
          >
            -
          </Button>
          <span style={{ margin: "5px" }}>{count}</span>
          <Button
            onClick={() => setCount((prev) => prev + 1)}
            style={{ backgroundColor: "#F0c14b" }}
          >
            +
          </Button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
