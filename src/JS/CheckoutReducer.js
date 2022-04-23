import { createSlice } from "@reduxjs/toolkit";
const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    value: [],
  },
  reducers: {
    addToCheckOut: (state, action) => {
      state.value.push(action.payload);
    },
    removeFromCheckout: (state, action) => {
      state.value = state.value.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});
export const { addToCheckOut, removeFromCheckout } = checkoutSlice.actions;
export default checkoutSlice.reducer;
