/**
 * StockResearch.jsx
 *
 * React page component for routing.
 * Displays the stock research dashboard and chart.
 */

import React from 'react';
import Dashboard from '../components/stockResearch/Dashboard';

function StockResearch() {
    return (
        <div className="page">
            <h2>Stock Research</h2>
            <Dashboard />
        </div>
    );
};

export default StockResearch;
