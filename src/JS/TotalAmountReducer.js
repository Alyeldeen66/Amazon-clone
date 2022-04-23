import { useSelect } from "@mui/base";
import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const totalAmountSlice = createSlice({
  name: "totalamount",
  initialState: {
    value: 0,
  },
  reducers: {
    addToTotalAmount: (state, action) => {
      state.value += action.payload;
    },
    removeFromTotalAmount: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export const { addToTotalAmount, removeFromTotalAmount, getTotalAmount } =
  totalAmountSlice.actions;
export default totalAmountSlice.reducer;
