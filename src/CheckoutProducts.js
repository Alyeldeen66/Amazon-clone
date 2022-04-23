import { Button } from "react-bootstrap";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCheckout } from "./JS/CheckoutReducer";
import { decreaseCount } from "./JS/Reducer";
import "./CheckoutProducts.css";
import { removeFromTotalAmount } from "./JS/TotalAmountReducer";

const CheckoutProducts = ({ id, img, title, text, rating, price }) => {
  const dispatch = useDispatch();

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={img} />
      <div className="checkoutProduct_info">
        <span className="checkoutProduct_title">{title}</span> <br></br>
        <span className="checkoutProduct_text">{text}</span> <br></br>
        <span className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <div className="checkoutProduct_rating">
          {Array(parseInt(rating))
            .fill()
            .map((_, i) => (
              <span>⭐</span>
            ))}
        </div>
        <Button
          style={{ backgroundColor: "#F0c14b" }}
          onClick={() => {
            dispatch(removeFromCheckout(id));
            dispatch(decreaseCount(price));
            dispatch(removeFromTotalAmount(price));
          }}
        >
          Remove From Cart
        </Button>
      </div>
    </div>
  );
};

export default CheckoutProducts;
