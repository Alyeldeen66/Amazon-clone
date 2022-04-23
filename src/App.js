import "./App.css";
import Header from "./Header";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { loadProducts } from "./Api";
import { useDispatch } from "react-redux";
import { setProducts } from "./JS/ProductsReducer";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts(1));
  }, []);
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
