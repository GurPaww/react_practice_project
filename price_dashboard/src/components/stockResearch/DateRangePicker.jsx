/**
 * DateRangePicker.jsx
 *
 * Two input fields to select start and end dates for fetching historical stock data.
 * Controlled by Redux state from the stockResearch slice.
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDateRange } from '../../redux/stockResearchSlice';

function DateRangePicker() {
  const dispatch = useDispatch();

  // Read the current date range from Redux store
  const dateRange = useSelector((state) => state.stockResearch.dateRange);

  // Handle changes to either start or end date
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Dispatch updated range while preserving the other field
    dispatch(setDateRange({ ...dateRange, [name]: value }));
  };

  return (
    <div className="form-group">
      <label>Start Date:</label>
      <input
        type="date"
        name="start"
        value={dateRange.start}
        onChange={handleChange}
      />

      <label>End Date:</label>
      <input
        type="date"
        name="end"
        value={dateRange.end}
        onChange={handleChange}
      />
    </div>
  );
}

export default DateRangePicker;
