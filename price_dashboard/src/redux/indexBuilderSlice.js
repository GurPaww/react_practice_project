/**
 * indexBuilderSlice.js
 *
 * Redux slice for managing the state of the custom index builder.
 * Holds an array of ticker-weight objects and the rebalance frequency.
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tickers: [{ symbol: '', weight: '' }],
  rebalanceFreq: 'monthly',
};

const indexBuilderSlice = createSlice({
  name: 'indexBuilder',
  initialState,
  reducers: {
    // Replace the entire list of tickers
    setTickers: (state, action) => {
      state.tickers = action.payload;
    },
    // Set the rebalancing frequency (e.g. monthly, quarterly)
    setRebalanceFreq: (state, action) => {
      state.rebalanceFreq = action.payload;
    },
  },
});

export const {
  setTickers,
  setRebalanceFreq,
} = indexBuilderSlice.actions;

export default indexBuilderSlice.reducer;
