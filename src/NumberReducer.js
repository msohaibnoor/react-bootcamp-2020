const NumberReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return ++state;
    case "DECREMENT":
      return --state;
  }
};

export default NumberReducer;
