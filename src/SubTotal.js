import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SubTotal.css";
const SubTotal = () => {
  const count = useSelector((state) => state.checkout.count);
  const value = useSelector((state) => state.checkout.price);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  // useEffect(() => {
  //   let totalamount = 0;
  //   for (let i = 0; i < products.length; i++) {
  //     totalamount += +products[i].price;
  //   }
  //   setValue(totalamount);
  // }, []);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({count} items): <strong>$ {value}</strong>
            </p>
            <small className="subtotal_gift">
              <input style={{ marginRight: "5px" }} type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={() => navigate("/payment")} className="subtotal_button">
        Proceed to checkout
      </button>
    </div>
  );
};
export default SubTotal;
