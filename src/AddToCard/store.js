import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CardSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store
