// store.js

import { combineReducers, createStore } from "redux";

const storedCount = localStorage.getItem("count");
const initialState = storedCount ? parseInt(storedCount, 10) : 0;

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      const incrementedState = state + 1;
      localStorage.setItem("count", incrementedState); // Store the updated count
      return incrementedState;
    case "DECREMENT":
      const decrementedState = state - 1;
      localStorage.setItem("count", decrementedState); // Store the updated count
      return decrementedState;
    default:
      return state;
  }
};
const storedName = localStorage.getItem("name");
const initialStateOfName = storedName ? storedName : "anonymous";
const nameReducer = (state = initialStateOfName, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      localStorage.setItem("name", action.name);
      return action.name;
    default:
      return state;
  }
};
const combinedReducers = combineReducers({
  count: counterReducer,
  name: nameReducer,
});
export const store = createStore(combinedReducers);
