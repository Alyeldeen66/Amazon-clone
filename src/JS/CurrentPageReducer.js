import { createSlice } from "@reduxjs/toolkit";

const currentPage = createSlice({
  name: "currentpage",
  initialState: 1,
  reducers: {
    setPage: (state, action) => {
      state = action.payload;
    },
  },
});

export default currentPage.reducer;
export const { setPage } = currentPage.actions;
