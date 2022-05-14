import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./Reducer";
import checkoutReducer from "./CheckoutReducer";
import productsReducer from "./ProductsReducer";
import filteredProductsReducer from "./FilteredProductsReducer";
import currentPageReducer from "./CurrentPageReducer";
import loginReducer from "./LoginReducer";

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      checkout: checkoutReducer,
      products: productsReducer,
      filteredproducts: filteredProductsReducer,
      currentpage: currentPageReducer,
      login: loginReducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
