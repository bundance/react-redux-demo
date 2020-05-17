import { configureStore } from "@reduxjs/toolkit";
import beerReducer from "../features/beer/beerSlice";

export default configureStore({
  reducer: {
    beers: beerReducer,
  },
});
