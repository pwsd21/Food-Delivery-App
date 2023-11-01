import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    // this reducer is our entire store reducer
    cart: cartReducer, // which contains small reducers of specific slices
  },
});

export default appStore;
