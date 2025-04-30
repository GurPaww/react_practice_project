/**
 * Navbar.jsx
 *
 * Persistent top navigation bar with routing links and gear icon dropdown.
 * Dropdown includes settings like theme toggle using ThemeContext.
 */

import React, { useState, useContext, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import './Navbar.css';
import { FiSettings } from 'react-icons/fi'; // gear icon

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand + Links */}
        <div className="nav-links">
          <Link to="/" className="nav-brand">Equity Dashboard</Link>
          <Link to="/stock_research">Stock Research</Link>
          <Link to="/index_builder">Index Builder</Link>
        </div>

        {/* Gear dropdown */}
        <div className="nav-right" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(prev => !prev)}
            className="gear-button"
          >
            <FiSettings size={20} />
          </button>
          <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
            <label className="toggle-container">
              <input
                type="checkbox"
                checked={theme === 'dark'}
                onChange={toggleTheme}
              />
              <span className="toggle-slider" />
              <span className="toggle-label">Dark Mode: {theme === 'dark' ? 'On' : 'Off'}</span>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
