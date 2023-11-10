/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const createSlice = require("@reduxjs/toolkit").createSlice;

//initialState
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.counter++;
    },
    decrement: (state, action) => {
      state.counter--;
    },
  },
});

module.exports = counterSlice.reducer;
module.exports.counterActions = counterSlice.actions;
