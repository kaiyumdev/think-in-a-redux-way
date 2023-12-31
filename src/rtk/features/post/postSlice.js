/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

//initialState
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

//create async thunk
const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts = response.json();
  return posts;
});

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

module.exports = postSlice.reducer;
module.exports.fetchPosts = fetchPosts;
