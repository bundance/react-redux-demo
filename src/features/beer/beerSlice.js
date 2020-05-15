import { createSlice } from "@reduxjs/toolkit";
import { fetchBeerAPI } from "../../api/brewdogAPI";

const initialState = {
  beer: [],
  error: null,
};

const beerDetails = createSlice({
  name: "beerDetails",
  initialState,
  reducers: {
    fetchBeerSuccess(state, action) {
      state.beer = action.payload;
      state.error = null;
    },
    fetchBeerFailed(state, action) {
      state.beer = [];
      state.error = action.payload;
    },
  },
});

export const { fetchBeerSuccess, fetchBeerFailed } = beerDetails.actions;

export default beerDetails.reducer;

export const fetchBeer = (food) => async (dispatch) => {
  try {
    const beer = await fetchBeerAPI(food);
    dispatch(fetchBeerSuccess(beer));
  } catch (err) {
    dispatch(fetchBeerFailed(err.toString()));
  }
};
