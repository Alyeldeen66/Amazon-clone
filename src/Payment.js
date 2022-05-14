import { useDispatch, useSelector } from "react-redux";
import PaymentProducts from "./PaymentProducts";
import "./Payment.css";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import { useNavigate } from "react-router-dom";
import {
  emptyBasket,
  removeFromTotalAmount,
  setCount,
} from "./JS/CheckoutReducer";
import { Alert, Button } from "react-bootstrap";

const Payment = () => {
  const value = useSelector((state) => state.checkout.price);
  const checkoutBasket = useSelector((state) => state.checkout.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uniqueCheckoutBasket = Array.from(
    new Set(checkoutBasket.map((item) => item.id))
  ).map((id) => {
    return {
      id: id,
      key: checkoutBasket.find((item) => item.id === id).id,
      img: checkoutBasket.find((item) => item.id === id).img,
      title: checkoutBasket.find((item) => item.id === id).title,
      text: checkoutBasket.find((item) => item.id === id).text,
      rating: checkoutBasket.find((item) => item.id === id).rating,
      price: checkoutBasket.find((item) => item.id === id).price,
    };
  });
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch(emptyBasket());
        dispatch(setCount());
        dispatch(removeFromTotalAmount());
        setShow(true);
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  useEffect(() => {
    const getClientSecret = async () => {
      const respone = await axios({
        method: "post",
        url: `/payments/create?total=${value * 100}`,
      });
      setClientSecret(respone.data.clientSecret);
    };
    getClientSecret();
  }, [checkoutBasket]);
  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Successful Payment</Alert.Heading>
        <p>Thanks for your purchase, we would like to see you again</p>
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
      <div className="payment">
        <h1 className="payment_no">Checkout ({checkoutBasket.length})</h1>
        <div className="payment_container">
          <div className="payment_section">
            <div className="payment_title">
              <h3>Delivery Address:</h3>
            </div>
            <div className="payment_address">
              <p>77 React Street</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment_items">
              {uniqueCheckoutBasket.length > 0 ? (
                uniqueCheckoutBasket.map((item) => (
                  <div>
                    <PaymentProducts
                      key={item.id}
                      img={item.img}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      rating={item.rating}
                      price={item.price}
                    />
                  </div>
                ))
              ) : (
                <h5>Empty Cart</h5>
              )}
            </div>
          </div>
          <div className="payment_section">
            <div className="payment_title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment_details">
              {/* Payment Details Stripe    */}
              <form onSubmit={handleSubmit}>
                <CardElement onChange={handleChange} />
                <div className="payment_priceContainer">
                  <CurrencyFormat
                    renderText={() => (
                      <>
                        <p>
                          Order Total: <strong>$ {value}</strong>
                        </p>
                      </>
                    )}
                    decimalScale={2}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <button
                    className="payment_button"
                    disabled={processing || disabled || succeeded}
                  >
                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                  </button>
                  {error && <div>{error}</div>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
