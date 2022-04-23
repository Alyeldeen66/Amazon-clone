import { createSlice } from "@reduxjs/toolkit";

const filteredProductsSlice = createSlice({
  name: "filteredproducts",
  initialState: {
    value: [],
  },
  reducers: {
    setFilteredProducts: (state, action) => {
      state.value = action.payload;
    },
    filterProducts: (state, action) => {
      state.value = state.value.filter((product) =>
        product.product_title
          .toLowerCase()
          .includes(action.payload.toLowerCase())
      );
    },
  },
});

export default filteredProductsSlice.reducer;
export const { setFilteredProducts, filterProducts } =
  filteredProductsSlice.actions;
