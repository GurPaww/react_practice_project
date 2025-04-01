/**
 * store.js
 *
 * Central Redux store configuration.
 * Combines all feature slices and provides to the app via <Provider>.
 */

import { configureStore } from '@reduxjs/toolkit';
import stockResearchReducer from './stockResearchSlice';
import indexBuilderReducer from './indexBuilderSlice';

const store = configureStore({
  reducer: {
    stockResearch: stockResearchReducer,
    indexBuilder: indexBuilderReducer,
  },
});

export default store;
