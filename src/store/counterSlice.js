import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incremented: (state) => {
      return (state += 1);
    },
    decremented: (state) => {
      return (state -= 1);
    },
  },
});

export const incrementAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(incremented());
  }, 2000);
};

export const { incremented, decremented } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;

/**
 * Creating counter slice using legacy redux
 */

const INCREMENT = "legacyCounter/incremented";
const DECREMENT = "legacyCounter/decremented";

export const legacyIncrement = () => {
  return { type: INCREMENT };
};

export const legacyDecrement = () => {
  return { type: DECREMENT };
};

const initialState = 0;
export const legacyCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return (state += 1);
    case DECREMENT:
      return (state -= 1);
    default:
      return state;
  }
};
