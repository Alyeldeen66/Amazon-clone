import { createSlice } from "@reduxjs/toolkit";
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    value: [],
    quantity: 0,
    count: 0,
    price: 0,
  },
  reducers: {
    addToCheckOut: (state, action) => {
      console.log(state, action);
      state.value.push(action.payload);
    },
    emptyBasket: (state) => {
      state.value = [];
    },
    removeFromCheckout: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
    partiallyRemoveFromCheckout: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    setCount: (state) => {
      state.count = state.value.length;
    },
    increaseCount: (state) => {
      state.count += 1;
    },
    setQuantity: (state, action) => {
      let initQuantity = 0;
      for (let i = 0; i < state.value.length; i++) {
        if (state.value[i].id === action.payload) {
          initQuantity++;
        }
      }
      state.quantity = initQuantity;
    },
    removeFromTotalAmount: (state) => {
      let productsprice = 0;
      for (let i = 0; i < state.value.length; i++) {
        let amount = parseInt(state.value[i].price);
        productsprice += amount;
      }
      state.price = productsprice;
    },
    addToTotalAmount: (state, action) => {
      const amount = parseInt(action.payload);
      state.price += amount;
    },
  },
});
export const {
  addToCheckOut,
  removeFromCheckout,
  setQuantity,
  setCount,
  increaseCount,
  removeFromTotalAmount,
  addToTotalAmount,
  partiallyRemoveFromCheckout,
  emptyBasket,
} = checkoutSlice.actions;
export default checkoutSlice.reducer;
