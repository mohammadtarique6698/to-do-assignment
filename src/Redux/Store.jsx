import { configureStore } from "@reduxjs/toolkit";
import ReducerFunction from "./reducer.jsx";

const store = configureStore({
  reducer: ReducerFunction,
});

export default store;
