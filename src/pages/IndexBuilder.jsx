/**
 * IndexBuilder.jsx
 *
 * Page for building a custom index by selecting stocks and assigning weights.
 * Allows users to define rebalance frequency and trigger calculation logic.
 * Uses Redux for persistent state and reusable component logic.
 */

import React, { useState } from 'react';
import TickerInputList from '../components/indexBuilder/TickerInputList';
import RebalanceSelector from '../components/indexBuilder/RebalanceSelector';
import GenerateButton from '../components/indexBuilder/GenerateButton';
import CumulativeChart from '../components/indexBuilder/CumulativeChart';

import { generateDummyReturns } from '../utils/generateDummyReturns';

import "../App.css"

import { useSelector, useDispatch } from 'react-redux';
import {
  setTickers,
  setRebalanceFreq,
  setReturnData,
  setError
} from '../redux/indexBuilderSlice';

function IndexBuilder() {
  const dispatch = useDispatch();
  const {tickers, rebalanceFreq, returnData, error } = useSelector(
    (state) => state.indexBuilder
  )

  // Local UI state
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);

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
    const total = tickers.reduce((sum, t) => sum + parseFloat(t.weight || 0), 0)
    if (total !== 100) {
      dispatch(setError("Weights must sum to 100%"));
      dispatch(setReturnData(null))
    }

    setLoading(true);

    // TODO: fetch historical data and calculate index returns
    dispatch(setError(""));
    const dummy = generateDummyReturns();
    dispatch(setReturnData(dummy));
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
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>

      {returnData && (
        <div style={{ marginTop: "2rem" }}>
          <CumulativeChart data={returnData} />
        </div>
      )}

      {/* Loading spinner while fetching */}
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default IndexBuilder;
