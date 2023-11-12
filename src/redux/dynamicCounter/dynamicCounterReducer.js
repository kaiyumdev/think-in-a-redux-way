import { DDECREMENT, DINCREMENT } from "./actionTypes";
import { INCREMENT } from "../counter/actionTypes";

const initialState = {
  value: 0,
};

const dynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    default:
      return state;
  }
};

export default dynamicCounterReducer;
