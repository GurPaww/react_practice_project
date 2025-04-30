// components/indexBuilder/CumulativeChart.jsx
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

function CumulativeChart({ data }) {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: "Cumulative Return",
        data: data.map((d) => d.cumulativeReturn),
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tesion: 0.2,
      },
    ],
  };

  return (
    <div style = {{ width: "100%", height: "400px"}}>
      <Line data={chartData} />
    </div>
  )
}

export default CumulativeChart;