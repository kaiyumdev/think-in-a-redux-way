/* eslint-disable no-unused-vars */
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
    type: "posts/succeeded",
    payload: error,
  };
};
