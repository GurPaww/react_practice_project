/**
 * RebalanceSelector.jsx
 *
 * Dropdown select for choosing how often to rebalance the custom index.
 * Supports daily, monthly, quarterly, and annually.
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRebalanceFreq } from '../../redux/indexBuilderSlice';

function RebalanceSelector() {
  const dispatch = useDispatch();
  const rebalanceFreq = useSelector((state) => state.indexBuilder.rebalanceFreq);

  const handleChange = (e) => {
    dispatch(setRebalanceFreq(e.target.value));
  };

  return (
    <div className="rebalance-group">
      <label>Rebalance Frequency:</label>
      <select value={rebalanceFreq} onChange={handleChange}>
        <option value="daily">Daily</option>
        <option value="monthly">Monthly</option>
        <option value="quarterly">Quarterly</option>
        <option value="annually">Annually</option>
      </select>
    </div>
  );
}

export default RebalanceSelector;
