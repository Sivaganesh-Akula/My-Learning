import {
  combineReducers,
  configureStore,
  legacy_createStore,
} from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
import { counterReducer, legacyCounterReducer } from "./counterSlice";
import todoReducer, { legacyTodoReducer } from "./todoSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    count: counterReducer,
    legacyCount: legacyCounterReducer,
    todos: todoReducer,
    legacyTodos: legacyTodoReducer,
  },
});
export default appStore;

/**
 * legacy redux impementation
 */
const reducers = combineReducers({
  count: legacyCounterReducer,
  todos: legacyTodoReducer,
});
export const legacyStore = legacy_createStore(reducers);

legacyStore.subscribe(() => console.log(legacyStore.getState()));
