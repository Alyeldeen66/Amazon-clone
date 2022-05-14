import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import { loadProducts } from "./Api";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { setProducts } from "./JS/ProductsReducer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./Payment";
import Login from "./Login";
import { auth } from "./firebase";
import { setUserName } from "./JS/LoginReducer";
function App() {
  const pageNum = useSelector((state) => state.currentpage);
  const promise = loadStripe(
    "pk_test_51KxVIXHHeWXsQnXDNoTfIzgZTijjLvhrFqkZcYkmKURVg7uhUGrip8ACSZ1iEHiZen9e3uIoQwnxXg7tBOMdbJgW00h8k0yESV"
  );
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadProducts(pageNum));
  // }, []);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUserName(authUser.email));
      } else {
        dispatch(setUserName(""));
      }
    });
  }, []);
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <Home />
            </div>
          }
        />
        <Route
          path="/checkout"
          element={
            <div>
              <Header />
              <Checkout />
            </div>
          }
        />
        <Route path="/login" element={<Login />} />

        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              <Header />
              <Payment />
            </Elements>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
