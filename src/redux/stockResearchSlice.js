/**
 * stockResearchSlice.js
 *
 * Redux slice for managing state related to stock research.
 * Includes selected stock tickers, date range, and fetched chart data.
 */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedTickers: [],
  dateRange: { start: '', end: '' },
  chartData: [],
};

const stockResearchSlice = createSlice({
  name: 'stockResearch',
  initialState,
  reducers: {
    // Update selected tickers array
    setSelectedTickers: (state, action) => {
      state.selectedTickers = action.payload;
    },
    // Update the start and end date for data fetching
    setDateRange: (state, action) => {
      state.dateRange = action.payload;
    },
    // Set the chart data after API response
    setChartData: (state, action) => {
      state.chartData = action.payload;
    },
  },
});

export const {
  setSelectedTickers,
  setDateRange,
  setChartData,
} = stockResearchSlice.actions;

export default stockResearchSlice.reducer;
