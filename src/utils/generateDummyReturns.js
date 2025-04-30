// utils/generateDummyReturns.js
export function generateDummyReturns(startDate = "2024-01-01", days = 100) {
    const dailyReturns = [];
    let value = 1;
  
    for (let i = 0; i < days; i++) {
      const change = (Math.random() - 0.5) * 0.02; // -1% to +1%
      value *= 1 + change;
      const date = new Date(new Date(startDate).getTime() + i * 86400000);
      dailyReturns.push({
        date: date.toISOString().split("T")[0],
        cumulativeReturn: value.toFixed(4),
      });
    }
  
    return dailyReturns;
  }
  