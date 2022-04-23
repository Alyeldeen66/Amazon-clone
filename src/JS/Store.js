import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import counterReducer from "./Reducer";
import checkoutReducer from "./CheckoutReducer";
import productsReducer from "./ProductsReducer";
import totalAmountReducer from "./TotalAmountReducer";
import filteredProductsReducer from "./FilteredProductsReducer";
import currentPageReducer from "./CurrentPageReducer";

const store = configureStore(
  {
    reducer: {
      counter: counterReducer,
      checkout: checkoutReducer,
      totalamount: totalAmountReducer,
      products: productsReducer,
      filteredproducts: filteredProductsReducer,
      currentpage: currentPageReducer,
    },
  },
  applyMiddleware(thunk)
);

export default store;
