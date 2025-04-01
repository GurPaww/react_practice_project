/**
 * IndexBuilder.jsx
 *
 * Page for building a custom index by selecting stocks and assigning weights.
 * Allows users to define rebalance frequency and trigger calculation logic.
 * Uses Redux for persistent state and reusable component logic.
 */

import React from 'react';
import TickerInputList from '../components/indexBuilder/TickerInputList';
import RebalanceSelector from '../components/indexBuilder/RebalanceSelector';
import GenerateButton from '../components/indexBuilder/GenerateButton';

import { useSelector, useDispatch } from 'react-redux';
import {
  setTickers,
  setRebalanceFreq
} from '../redux/indexBuilderSlice';

function IndexBuilder() {
  const dispatch = useDispatch();
  const { tickers, rebalanceFreq } = useSelector((state) => state.indexBuilder);

  /**
   * Updates a ticker's field (symbol or weight)
   */
  const handleTickerChange = (index, field, value) => {
    const newTickers = tickers.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    dispatch(setTickers(newTickers));
  };

  /**
   * Appends a new empty ticker entry
   */
  const addTicker = () => {
    dispatch(setTickers([...tickers, { symbol: '', weight: '' }]));
  };

  /**
   * Removes a ticker from the list
   */
  const removeTicker = (index) => {
    const updated = tickers.filter((_, i) => i !== index);
    dispatch(setTickers(updated));
  };

  /**
   * Placeholder for generating the index (validate & fetch logic TBD)
   */
  const handleSubmit = () => {
    console.log({ tickers, rebalanceFreq });
    // TODO: validate inputs (e.g. total weight = 100)
    // TODO: fetch historical data and calculate index returns
  };

  return (
    <div className="page">
      <h2>Create Your Custom Index</h2>
      <div className="index-form">
        <TickerInputList
          tickers={tickers}
          onChange={handleTickerChange}
          onAdd={addTicker}
          onRemove={removeTicker}
        />
        <RebalanceSelector
          frequency={rebalanceFreq}
          onChange={(val) => dispatch(setRebalanceFreq(val))}
        />
        <GenerateButton onClick={handleSubmit} />
      </div>
    </div>
  );
}

export default IndexBuilder;
