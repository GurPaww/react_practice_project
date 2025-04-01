/**
 * ThemeContext.jsx
 *
 * Provides global light/dark theme context for the application.
 * Persists theme preference to localStorage and sets CSS class accordingly.
 */

import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Apply theme class to <body> for global CSS theming
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  // Toggle between light and dark
  const toggleTheme = () =>
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
