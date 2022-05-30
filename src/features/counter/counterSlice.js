import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    number: 0,
  },
  reducers: {
    plus: (state, action) => {
      state.number += 1;
    },
    minus: (state, action) => {
      state.number -= 1;
    },
  },
});

export const { minus, plus } = counterSlice.actions;
export default counterSlice.reducer;
