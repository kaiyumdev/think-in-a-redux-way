/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// import { applyMiddleware, createStore } from "redux";
// import rootReducer from "./rootReducer";
// import myLogger from "./middlewares/myLogger";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(myLogger, logger))
// );

// export default store;
// const { createStore, combineReducers } = require("redux");
// const counterReducer = require("./counter/reducer");
// const dynamicCounterReducer = require("./dynamicCounter/reducer");

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dynamicCounterReducer,
});

const store = createStore(rootReducer);

module.exports = store;
