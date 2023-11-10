/* eslint-disable no-undef */
const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice.js");

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

module.exports = store;
