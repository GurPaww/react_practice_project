/**
 * TickerInputList.jsx
 *
 * Renders a dynamic list of ticker-weight input rows using react-select.
 * Each row allows selecting a stock and assigning a weight.
 * Also provides buttons to add or remove tickers.
 */

import React from 'react';
import Select from 'react-select';
import './TickerInputList.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTickers } from '../../redux/indexBuilderSlice';

// Hardcoded list of mega-cap tickers for selection
const TICKERS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'BRK.B', 'UNH', 'JPM'
];

// Transform into react-select option format
const options = TICKERS.map(ticker => ({ label: ticker, value: ticker }));

function TickerInputList() {
  const dispatch = useDispatch();
  const tickers = useSelector((state) => state.indexBuilder.tickers);

  // Handles changes to ticker or weight input fields
  const handleChange = (index, field, value) => {
    const newTickers = tickers.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    dispatch(setTickers(newTickers));
  };

  // Add a new empty row for ticker + weight
  const addTicker = () => {
    dispatch(setTickers([...tickers, { symbol: '', weight: '' }]));
  };

  // Remove a ticker row by index
  const removeTicker = (index) => {
    const updated = tickers.filter((_, i) => i !== index);
    dispatch(setTickers(updated));
  };

  return (
    <div className="ticker-input-list">
      <h4>Stocks and Weights:</h4>
      {tickers.map((entry, index) => (
        <div key={index} className="ticker-row">
          <Select
            options={options}
            placeholder="Select Ticker"
            value={options.find(opt => opt.value === entry.symbol) || null}
            onChange={(selected) =>
              handleChange(index, 'symbol', selected ? selected.value : '')
            }
            isClearable
            isSearchable
            className="ticker-select"
          />
          <input
            type="number"
            placeholder="Weight (%)"
            value={entry.weight}
            onChange={(e) => handleChange(index, 'weight', e.target.value)}
          />
          <button onClick={() => removeTicker(index)}>Remove</button>
        </div>
      ))}
      <button className="add-button" onClick={addTicker} title="Add another stock">+</button>
    </div>
  );
}

export default TickerInputList;
