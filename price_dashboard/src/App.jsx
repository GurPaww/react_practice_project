/**
 * App.jsx
 *
 * Main layout and router configuration.
 * Defines application routes and includes the persistent top navbar.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import StockResearch from './pages/StockResearch';
import IndexBuilder from './pages/IndexBuilder';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stock_research" element={<StockResearch />} />
        <Route path="/index_builder" element={<IndexBuilder />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
