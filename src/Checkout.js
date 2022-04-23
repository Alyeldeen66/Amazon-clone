import React from "react";
import { useSelector } from "react-redux";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import SubTotal from "./SubTotal";

const Checkout = () => {
  const checkoutBasket = useSelector((state) => state.checkout.value);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://content26.com/wp-content/uploads/amazon-advertising-1024x207.png"
        />
        <div>
          {checkoutBasket.length > 0 ? (
            <h3 className="checkout_title">Your Shopping Cart</h3>
          ) : (
            <></>
          )}
        </div>
        <div>
          {checkoutBasket.length > 0 ? (
            checkoutBasket.map((item) => (
              <div>
                <CheckoutProducts
                  key={item.id}
                  img={item.img}
                  id={item.id}
                  title={item.title}
                  text={item.text}
                  rating={item.rating}
                  price={item.price}
                />
                <hr></hr>
              </div>
            ))
          ) : (
            <h3>Your Shopping Cart is empty</h3>
          )}
        </div>
      </div>
      <div className="checkout_right">
        <SubTotal />
      </div>
    </div>
  );
};

export default Checkout;
