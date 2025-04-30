/**
 * ValidationModal.jsx
 *
 * Displays a modal with validation or API error messages.
 * Triggered by the Dashboard component when user input is invalid or fetch fails.
 */

import React from 'react';
import './ValidationModal.css';

function ValidationModal({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ValidationModal;
