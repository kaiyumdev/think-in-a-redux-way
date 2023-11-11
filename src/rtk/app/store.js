/* eslint-disable no-undef */
const configureStore = require("@reduxjs/toolkit").configureStore;
const { createLogger } = require("redux-logger");
// const { getDefaultMiddleware } = require("@reduxjs/toolkit");
const counterReducer = require("../features/counter/counterSlice.js");
const dynamicCounterReducer = require("../features/dynamicCounter/dynamicCounterSlice.js");

const logger = createLogger();
const store = configureStore({
  reducer: {
    counter: counterReducer,
    dynamicCounter: dynamicCounterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
