import React, { useEffect, useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { filterProducts } from "./JS/FilteredProductsReducer";
import { setFilteredProducts } from "./JS/FilteredProductsReducer";
import { productsSearch } from "./JS/ProductsReducer";
import { setUserName } from "./JS/LoginReducer";
import { signOut } from "firebase/auth";
import { auth } from "./firebase";
const Header = () => {
  const count = useSelector((state) => state.counter.count);
  const products = useSelector((state) => state.products.value);
  const checkoutProducts = useSelector((state) => state.checkout.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector((state) => state.login);
  const userSignOut = () => {
    signOut(auth).then(() => {
      dispatch(setUserName(""));
      navigate("/");
    });
  };
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
          <span className="header_optionLineOne">
            Hello{" "}
            {userName.length > 0 ? (
              <span className="header_optionLineOne">{userName}</span>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <span className="header_optionLineOne">Guest</span>
              </Link>
            )}
          </span>

          <span className="header_optionLineTwo">
            {userName.length > 0 ? (
              <Link
                onClick={userSignOut}
                style={{ textDecoration: "none" }}
                to="/"
              >
                <span className="header_optionLineTwo">Sign Out</span>
              </Link>
            ) : (
              <Link style={{ textDecoration: "none" }} to="/login">
                <span className="header_optionLineTwo">Sign In</span>
              </Link>
            )}
          </span>
        </div>
        <div className="header_option">
          <div className="header_optionLineOne">Returns</div>
          <div className="header_optionLineTwo">Orders</div>
        </div>
        <div className="header_option">
          <div className="header_optionLineOne">Your</div>
          <div className="header_optionLineTwo">Prime</div>
        </div>
        <Link style={{ textDecoration: "none" }} to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <div className="header_optionLineTwo header_basketCount">
              {checkoutProducts.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
