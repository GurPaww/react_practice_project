/**
 * ChartDisplay.jsx
 *
 * Renders an interactive line chart of historical stock prices.
 * Uses Chart.js (via react-chartjs-2) with a time scale on the x-axis.
 * Groups and plots data by ticker symbol using Redux-fed chart data.
 */

import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  TimeScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import 'chartjs-adapter-date-fns';

ChartJS.register(LineElement, TimeScale, LinearScale, PointElement, Tooltip, Legend);

function ChartDisplay({ data }) {
  if (!data || data.length === 0) return <div>No data to display.</div>;

  // Group data points by ticker symbol
  const grouped = data.reduce((acc, point) => {
    const key = point.ticker || point.fh_symbol;
    if (!acc[key]) acc[key] = [];
    acc[key].push(point);
    return acc;
  }, {});

  // Utility to generate a distinct HSL color based on index
  const generateColor = (index, total = 10) => {
    const hue = (index * (360 / total)) % 360;
    return `hsl(${hue}, 70%, 50%)`;
  };

  // Format datasets for each ticker using dynamic colors
  const datasets = Object.entries(grouped).map(([ticker, points], index, array) => {
    const borderColor = generateColor(index, array.length);
    return {
      label: ticker,
      data: points.map(d => ({ x: d.date, y: d.close })),
      borderColor,
      backgroundColor: borderColor.replace('50%', '90%'), // lighter fill
      tension: 0.3,
    };
  });


  const chartData = {
    datasets,
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'month',
        },
      },
      y: {
        beginAtZero: false,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ChartDisplay;
