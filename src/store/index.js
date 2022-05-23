import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../store/slices/todoSlice";

const reducer = combineReducers({
  todo: todoReducer,
});

const store = configureStore({
  reducer,
});

export default store;
