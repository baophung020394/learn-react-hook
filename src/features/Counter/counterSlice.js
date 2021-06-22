import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increase(state) {
      return state + 1;
    },
    decrease(state) {
      return state - 1;
    },
  },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions; // named export
export default reducer; // default export
