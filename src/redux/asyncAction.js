/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { applyMiddleware, createStore } from "redux";
const thunkMiddleware = require("redux-thunk");
const fetch = require("node-fetch");

//initialState
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const fetchPostsRequested = () => {
  return {
    type: "posts/requested",
  };
};

const fetchPostsSucceeded = (posts) => {
  return {
    type: "posts/succeeded",
    payload: posts,
  };
};

const fetchPostsFailed = (error) => {
  return {
    type: "posts/failed",
    payload: error,
  };
};

//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "posts/requested":
      return {
        ...state,
        leading: true,
      };

    case "posts/succeeded":
      return {
        ...state,
        leading: false,
        error: "",
        posts: action.payload,
      };

    case "posts/failed":
      return {
        ...state,
        leading: false,
        error: action.payload.message,
        posts: [],
      };

    default:
      break;
  }
};

//thunk function
const fetchPosts = () => {
  return async (dispatch) => {
    dispatch(fetchPostsRequested());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      const posts = response.json();
      dispatch(fetchPostsSucceeded(posts));
    } catch (error) {
      dispatch(fetchPostsFailed(error));
    }
  };
};

//create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware.default));

//subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch actions
store.dispatch(fetchPosts);
