/* eslint-disable no-undef */
const store = require("./app/store");
// const { counterActions } = require("./features/counter/counterSlice");
// const { dynamicCounterActions } = require("./features/counter/counterSlice");
const { fetchPosts } = require("./features/post/postSlice");

//initialState
console.log(store.getState());

//subscribe to state changes
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch actions
// store.dispatch(counterActions.increment());
// store.dispatch(counterActions.increment());

// store.dispatch(counterActions.decrement());

//dispatch actions
// store.dispatch(dynamicCounterActions.increment(3));
// store.dispatch(dynamicCounterActions.increment(4));

// store.dispatch(dynamicCounterActions.decrement(2));
store.dispatch(fetchPosts());
