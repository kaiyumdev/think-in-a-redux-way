/* eslint-disable no-undef */
const configureStore = require("@reduxjs/toolkit").configureStore;
const counterReducer = require("../features/counter/counterSlice.js");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice.js");

const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
});

module.exports = store;
