import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: "",
  reducers: {
    setUserName: (state, action) => (state = action.payload),
  },
});

export const { setUserName } = loginSlice.actions;
export default loginSlice.reducer;
