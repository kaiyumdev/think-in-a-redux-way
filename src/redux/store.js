/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewares/myLogger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(myLogger, logger));

export default store;
