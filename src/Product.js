import "./Product.css";
import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import photo from "./WhatsApp Image 2022-04-11 at 3.05.39 AM.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "./JS/Reducer";
import { addToCheckOut } from "./JS/CheckoutReducer";
import { addToTotalAmount, getTotalAmount } from "./JS/TotalAmountReducer";
import { loadProducts } from "./Api";

const Product = ({ id, img, title, text, rating, price }) => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.checkout.value);
  const [count, setCount] = useState(0);
  const addToProducts = () => {
    if (count == 0) {
      dispatch(addToCheckOut({ id, img, title, price, rating, text }));
    }
    for (let i = 0; i < count; i++) {
      dispatch(addToCheckOut({ id, img, title, price, rating, text }));
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
        <Card.Text className="product_rating">
          {Array(rating).map((_, i) => (
            <span key={Math.random()}>⭐</span>
          ))}
        </Card.Text>
        <Button
          onClick={() => {
            addToProducts();
            dispatch(addToTotalAmount(price));
            dispatch(increaseCount());
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
