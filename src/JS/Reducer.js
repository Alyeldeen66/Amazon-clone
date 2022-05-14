import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increaseCount: (state) => {
      state.count += 1;
    },
    decreaseCount: (state) => {
      state.count -= 1;
    },
    setCount: (state, action) => {
      console.log(action.payload);
      state.count = action.payload;
    },
  },
});

export const { increaseCount, decreaseCount, setCount } = counterSlice.actions;

export default counterSlice.reducer;
