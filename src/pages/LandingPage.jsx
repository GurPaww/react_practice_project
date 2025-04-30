/**
 * LandingPage.jsx
 *
 * React page component for routing.
 * Landing page with links to stock and index research tools.
 */

import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div className="page">
            <h1>Welcome to the Equity Dashboard</h1>
            <p>
                <Link to="/stock_research">Go to Stock Research</Link>
                This page will do stock research
            </p>
            <p>
                <Link to="/index_builder">Create Custom Index</Link>
                This page will allow you to create your own index
            </p>
        </div>
    );
};

export default LandingPage;
