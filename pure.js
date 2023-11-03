const state = {
  value: 5,
};

const impure = () => {
  state.value = 6;
};

impure();
