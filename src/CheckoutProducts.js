import { Button } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCheckout,
  setCount,
  removeFromTotalAmount,
  partiallyRemoveFromCheckout,
  addToCheckOut,
  addToTotalAmount,
  increaseCount,
} from "./JS/CheckoutReducer";
import "./CheckoutProducts.css";
import { Rating } from "@mui/material";

const CheckoutProducts = ({ id, img, title, text, rating, price }) => {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector((state) => state.checkout.value);
  const [quantity, setQuantity] = useState(0);
  const ratingNum = parseInt(rating, 10);
  const [counter, setCounter] = useState(0);
  const updateCart = () => {
    if (counter < quantity) {
      const difference = quantity - counter;
      for (let i = 0; i < difference; i++) {
        let index = checkoutProducts.findIndex((item) => item.id === id);
        dispatch(partiallyRemoveFromCheckout(index));
        dispatch(removeFromTotalAmount());
        dispatch(setCount());
      }
      setQuantity((prev) => prev - difference);
    }
    if (counter > quantity) {
      const difference = counter - quantity;
      for (let i = 0; i < difference; i++) {
        dispatch(addToCheckOut({ id, img, title, price, rating, text }));
        dispatch(addToTotalAmount(price));
        dispatch(setCount());
      }
      setQuantity((prev) => prev + difference);
    }
  };
  useEffect(() => {
    let initQuantity = 0;
    for (let i = 0; i < checkoutProducts.length; i++) {
      if (checkoutProducts[i].id === id) {
        initQuantity++;
      }
    }
    setQuantity(initQuantity);
    setCounter(initQuantity);
  }, []);
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={img} />
      <div className="checkoutProduct_circle">
        <p className="checkoutProduct_circle_text">{quantity}</p>
      </div>
      <div className="checkoutProduct_info">
        <span className="checkoutProduct_title">{title}</span> <br></br>
        <span className="checkoutProduct_text">{text}</span> <br></br>
        <span className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <div className="checkoutProduct_rating">
          <Rating
            name="half-rating-read"
            value={ratingNum}
            className="product_rating"
            precision={0.5}
            readOnly
          />
        </div>
        <div
          style={{
            marginTop: "15px",
            marginLeft: "30px",
          }}
        >
          <Button
            onClick={() => {
              if (counter > 0) setCounter((prev) => prev - 1);
            }}
            style={{ backgroundColor: "#F0c14b" }}
          >
            -
          </Button>
          <span style={{ margin: "5px" }}>{counter}</span>
          <Button
            onClick={() => {
              setCounter((prev) => prev + 1);
            }}
            style={{ backgroundColor: "#F0c14b" }}
          >
            +
          </Button>
        </div>
        <Button
          onClick={updateCart}
          style={{
            backgroundColor: "#F0c14b",
            marginTop: "5px",
            width: "150px",
          }}
        >
          Update Cart
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
