/**
 * GenerateButton.jsx
 *
 * Trigger button for submitting the index configuration.
 * Typically used to fetch and calculate index performance.
 */

import React from 'react';

function GenerateButton({ onClick }) {
  return (
    <button className="submit-btn" onClick={onClick}>
      Generate Index
    </button>
  );
}

export default GenerateButton;
