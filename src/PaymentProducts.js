import { Rating } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./PaymentProducts.css";
const PaymentProducts = ({ id, img, title, text, rating, price }) => {
  const ratingNum = parseInt(rating, 10);
  const [quantity, setQuantity] = useState(0);
  const checkoutProducts = useSelector((state) => state.checkout.value);
  useEffect(() => {
    let initQuantity = 0;
    for (let i = 0; i < checkoutProducts.length; i++) {
      if (checkoutProducts[i].id === id) {
        initQuantity++;
      }
    }
    setQuantity(initQuantity);
  }, []);
  return (
    <div className="payment_products">
      <img className="paymentProduct_image" src={img} />
      <div className="paymentProduct_circle">
        <p className="paymentProduct_circle_text">{quantity}</p>
      </div>
      <div className="paymentProduct_info">
        <span className="paymentProduct_title">{title}</span> <br></br>
        <span className="paymentProduct_text">{text}</span> <br></br>
        <span className="paymentProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </span>
        <div className="paymentProduct_rating">
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
        ></div>
      </div>
    </div>
  );
};
export default PaymentProducts;
