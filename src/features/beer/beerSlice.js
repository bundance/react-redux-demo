import { createSlice } from "@reduxjs/toolkit";
import { fetchBeerAPI } from "../../api/brewdogAPI";

const initialState = {
  beers: [],
  error: null,
};

const beerDetails = createSlice({
  name: "beerDetails",
  initialState,
  reducers: {
    fetchBeerSuccess(state, action) {
      state.beers = action.payload;
      state.error = null;
    },
    fetchBeerFailed(state, action) {
      state.beers = [];
      state.error = action.payload;
    },
  },
});

// Action creators
export const { fetchBeerSuccess, fetchBeerFailed } = beerDetails.actions;

// Default reducer
export default beerDetails.reducer;

// Thunks
export const fetchBeer = (food) => async (dispatch, getState) => {
  try {
    const { beers } = getState();
    if (!beers.beers[food]) {
      const newBeers = await fetchBeerAPI(food);

      dispatch(fetchBeerSuccess(newBeers));
    }
  } catch (err) {
    dispatch(fetchBeerFailed(err.toString()));
  }
};
