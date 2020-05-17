import { createSlice } from "@reduxjs/toolkit";
import { fetchBeerAPI } from "../../api/brewdogAPI";

const initialState = {
  beersList: [],
  error: null,
};

const beerDetails = createSlice({
  name: "beerDetails",
  initialState,
  reducers: {
    fetchBeerSuccess(state, action) {
      state.beersList = action.payload;
      state.error = null;
    },
    fetchBeerFailed(state, action) {
      state.beersList = [];
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
    const beers = await fetchBeerAPI(food);
    dispatch(fetchBeerSuccess(beers));
  } catch (err) {
    dispatch(fetchBeerFailed(err.toString()));
  }
};
