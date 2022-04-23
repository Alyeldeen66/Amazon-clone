import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { filterProducts } from "./JS/FilteredProductsReducer";
import { setFilteredProducts } from "./JS/FilteredProductsReducer";
import { productsSearch } from "./JS/ProductsReducer";

const Header = () => {
  const count = useSelector((state) => state.counter.count);
  const products = useSelector((state) => state.products.value);
  const checkoutProducts = useSelector((state) => state.checkout.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://media-exp1.licdn.com/dms/image/C5616AQF5l9QNL0pA2w/profile-displaybackgroundimage-shrink_200_800/0/1624078119890?e=1654732800&v=beta&t=d8QrqoO9mZYrOhs4q2_RvdE6lN6SV2vshhLFKI3ntLA"
        ></img>
      </Link>
      <div className="header_search">
        <input
          onChange={(e) => {
            dispatch(productsSearch(e.target.value));
            dispatch(setFilteredProducts(products));
            dispatch(filterProducts(e.target.value));
          }}
          className="header_searchInput"
          type="text"
        />
        <span
          style={{ marginBottom: 3 }}
          // onClick={}
        >
          <SearchIcon className="header_searchIcon" />
        </span>
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header_basketCount">
              {checkoutProducts.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
