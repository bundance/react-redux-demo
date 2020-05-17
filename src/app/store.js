import { configureStore } from "@reduxjs/toolkit";
import beerReducer from "../features/beerGrid/beerSlice";

export default configureStore({
  reducer: {
    beers: beerReducer,
  },
});
