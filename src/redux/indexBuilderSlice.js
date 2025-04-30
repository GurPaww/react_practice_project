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
  returnData: null,
  error: '',
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
    // set the cumulative return data for index
    setReturnData: (state, action) => {
      state.returnData = action.payload
    },
    // set the error message
    setError: (state,action) => {
      state.error = action.payload
    }
  },
});

export const {
  setTickers,
  setRebalanceFreq,
  setReturnData,
  setError
} = indexBuilderSlice.actions;

export default indexBuilderSlice.reducer;
