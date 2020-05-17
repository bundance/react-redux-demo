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

export const { fetchBeerSuccess, fetchBeerFailed } = beerDetails.actions;

export default beerDetails.reducer;

export const fetchBeer = (food) => async (dispatch, getState) => {
  try {
    const { beers } = getState();
    console.log({ beers });
    if (!beers.beers[food]) {
      const newBeers = await fetchBeerAPI(food);

      dispatch(fetchBeerSuccess(newBeers));
    }
  } catch (err) {
    dispatch(fetchBeerFailed(err.toString()));
  }
};
