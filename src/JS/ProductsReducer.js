import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    value: [],
    search: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.value = action.payload;
    },
    productsSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default productsSlice.reducer;
export const { setProducts, productsSearch } = productsSlice.actions;
