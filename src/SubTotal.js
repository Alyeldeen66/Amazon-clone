import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./SubTotal.css";
const SubTotal = () => {
  const counter = useSelector((state) => state.counter.count);
  const products = useSelector((state) => state.checkout.value);
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let totalamount = 0;
    for (let i = 0; i < products.length; i++) {
      totalamount += +products[i].price;
    }
    setValue(totalamount);
  }, []);

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p>
              Subtotal ({counter} items): <strong>$ {value}</strong>
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
      <button className="subtotal_button">Proceed to checkout</button>
    </div>
  );
};
export default SubTotal;
