import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers";

const store = configureStore({
  cart: cartReducer,
});

export default store;
