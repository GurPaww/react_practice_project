/**
 * LoadingSpinner.jsx
 *
 * Displays a circular loading animation centered on the screen.
 * Used when API data is being fetched.
 */

import React from 'react';
import './LoadingSpinner.css';

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner" />
    </div>
  );
}

export default LoadingSpinner;
