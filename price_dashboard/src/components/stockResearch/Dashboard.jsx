/**
 * Dashboard.jsx
 *
 * Main container for the Stock Research tool.
 * Allows users to select tickers and a date range, then fetch and display
 * historical price data via an API.
 * Uses Redux to manage selectedTickers, dateRange, and chartData state.
 */

import React, { useState } from 'react';
import StockSelector from './StockSelector';
import DateRangePicker from './DateRangePicker';
import SubmitButton from './SubmitButton';
import ChartDisplay from './ChartDisplay';
import ValidationModal from './ValidationModal';
import LoadingSpinner from './LoadingSpinner';
import { fetchEquityData } from '../../utils/fetchEquityData';

import { useDispatch, useSelector } from 'react-redux';
import {
  setChartData
} from '../../redux/stockResearchSlice';

function Dashboard() {
  const dispatch = useDispatch();

  // Access relevant state from Redux
  const { selectedTickers, dateRange, chartData } = useSelector(
    (state) => state.stockResearch
  );

  // Local UI state
  const [modalMessage, setModalMessage] = useState('');
  const [loading, setLoading] = useState(false);

  /**
   * Validates ticker selection and date range.
   * Returns an object with `isValid` boolean and `message` if invalid.
   */
  const validateInputs = (tickers, dateRange) => {
    if (!tickers || tickers.length === 0) {
      return { isValid: false, message: 'Please select at least one stock ticker.' };
    }

    if (!dateRange.start || !dateRange.end) {
      return { isValid: false, message: 'Please select both a start and end date.' };
    }

    if (dateRange.start > dateRange.end) {
      return { isValid: false, message: 'Start date cannot be after end date.' };
    }

    return { isValid: true };
  };

  /**
   * Handles the submit button click.
   * Validates inputs, fetches historical data, and updates chart.
   */
  const handleSubmit = async () => {
    const validation = validateInputs(selectedTickers, dateRange);

    if (!validation.isValid) {
      setModalMessage(validation.message); // Trigger modal with error
      return;
    }

    setLoading(true);

    try {
      // Fetch historical data for selected tickers within date range
      const data = await fetchEquityData(selectedTickers, dateRange);
      dispatch(setChartData(data));
    } catch (error) {
      console.error('Error fetching data:', error);
      setModalMessage('Failed to fetch data from API. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard">
      {/* Multi-select dropdown for stock tickers */}
      <StockSelector />

      {/* Date range picker component */}
      <DateRangePicker />

      {/* Submit button */}
      <SubmitButton onClick={handleSubmit} />

      {/* Line chart for displaying historical prices */}
      <ChartDisplay data={chartData} />

      {/* Error modal for validation and fetch errors */}
      <ValidationModal message={modalMessage} onClose={() => setModalMessage('')} />

      {/* Loading spinner while fetching */}
      {loading && <LoadingSpinner />}
    </div>
  );
}

export default Dashboard;