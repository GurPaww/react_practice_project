/**
 * fetchEquityData.js
 *
 * Utility function to fetch historical stock data from API.
 * Accepts selected tickers and date range as input.
 * Returns filtered and formatted data for chart display.
 */

export const fetchEquityData = async (tickers, dateRange) => {
  const baseUrl = '/api/FinnHubAPI/GetHistoricalData';
  const tickersParam = tickers.join(',');
  const queryParams = new URLSearchParams({
    schema_name: 'FinnHub',
    table_name: 'MarketSnapshot',
    column_list: 'close,date,fh_symbol',
    fh_symbol: tickersParam,
  });

  const url = `${baseUrl}?${queryParams.toString()}`;
  console.log(`API call made to: ${url}`);

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('API request failed');
  }

  const rawData = await response.json();

  // Filter by date
  const filtered = rawData.filter(item => {
    const itemDate = item.date;
    return itemDate >= dateRange.start && itemDate <= dateRange.end;
  });

  // Normalize: rename fh_symbol -> ticker
  const normalized = filtered.map(({ fh_symbol, ...rest }) => ({
    ...rest,
    ticker: fh_symbol,
  }));

  return normalized;
};
