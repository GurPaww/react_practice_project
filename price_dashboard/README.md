# Equity Dashboard

A modern React + Vite dashboard to explore historical equity returns for US mega-cap stocks and build custom weighted indexes.

## Features

### Stock Research
- Multi-select US stock tickers
- Pick date range
- Interactive time-series chart (Chart.js)
- Dark/light mode toggle

### Index Builder
- Create your own index using tickers and weights
- Choose rebalance frequency (daily, monthly, quarterly, annually)
- Real-time validation for input and weight total

### Tech Stack
- React (Vite)
- Redux Toolkit
- Chart.js via react-chartjs-2
- React Router
- CSS Modules and Variables
- ThemeContext for dark mode toggle

## Project Structure

```
src/
├── components/
│   ├── stockResearch/
│   └── indexBuilder/
├── context/            # Theme context provider
├── pages/              # Route-level components
├── redux/              # Redux slices and store config
├── utils/              # API and helper functions
├── App.jsx
├── main.jsx
```

## Development

```bash
npm install
npm run dev
```

### API Configuration

The app assumes a proxy is configured:

```
/api → https://quant.vaneck.com:3939
```

You can set up `vite.config.js` to handle this locally.

> Note: API requires auth and may be replaced with mocks for testing.

## Data Flow

1. User selects tickers and date range (stored in Redux)
2. `fetchEquityData()` makes API request
3. Returned data is normalized and fed into ChartDisplay
4. Chart renders price over time, grouped by ticker

## To Do

- Switch hard coded US mega cap stocsk with dynamic stock from database
- Add ability to save/load index presets
- Export chart data to CSV

## Author

Created as a practice project for financial dashboarding and frontend architecture.
