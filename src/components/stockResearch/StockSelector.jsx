/**
 * StockSelector.jsx
 *
 * Multi-select dropdown component for choosing stock tickers.
 * Uses react-select for rich UI behavior.
 * Reads and updates selected tickers from Redux store.
 */

import React from 'react';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedTickers } from '../../redux/stockResearchSlice';

// Hardcoded list of mega-cap US stock tickers
const TICKERS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'BRK.B', 'UNH', 'JPM'
];

// Format for react-select
const options = TICKERS.map(ticker => ({ label: ticker, value: ticker }));

// Custom react-select styles for a consistent look
const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: '40px',
    fontSize: '1rem'
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: '#4e73df22',
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: '#2e59d9',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#f1f3f5' : 'white',
    color: '#333',
    cursor: 'pointer',
  }),
};

function StockSelector() {
  const dispatch = useDispatch();

  // Grab current tickers from Redux store
  const selectedTickers = useSelector(state => state.stockResearch.selectedTickers);

  // Update Redux state on change
  const handleChange = (selectedOptions) => {
    const values = selectedOptions ? selectedOptions.map(option => option.value) : [];
    dispatch(setSelectedTickers(values));
  };

  return (
    <div className="form-group">
      <label>Select Stocks:</label>
      <Select
        options={options}
        isMulti
        value={options.filter(opt => selectedTickers.includes(opt.value))}
        onChange={handleChange}
        styles={customStyles}
        closeMenuOnSelect={false}
        placeholder="Choose tickers..."
      />
    </div>
  );
}

export default StockSelector;
