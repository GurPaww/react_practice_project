/**
 * SubmitButton.jsx
 *
 * Simple reusable button component to trigger data submission.
 * Accepts an `onClick` handler from the parent (Dashboard).
 */

import React from 'react';

function SubmitButton({ onClick }) {
  return (
    <button className="submit-btn" onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
