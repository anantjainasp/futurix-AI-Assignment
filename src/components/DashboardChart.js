import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const demoData = {
  "All Bots": [12000, 15000, 14000, 17000, 16000, 19000, 24500],
  "AlphaX": [11000, 13000, 12000, 15000, 14000, 16000, 20000],
  "BetaY": [9000, 12000, 10000, 14000, 13500, 17000, 21000],
};

const dataTemplate = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Revenue",
      data: [],
      borderColor: "#60A5FA",
      backgroundColor: "rgba(96, 165, 250, 0.2)",
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#23252B",
      },
      ticks: {
        color: "#A1A1AA",
      },
    },
    y: {
      grid: {
        color: "#23252B",
      },
      ticks: {
        color: "#A1A1AA",
        callback: function (value) {
          return "$" + value / 1000 + "k";
        },
      },
    },
  },
};

export default function DashboardChart() {
  const [dateRange, setDateRange] = useState("Last 7 Months");
  const [bot, setBot] = useState("All Bots");

  // For demo, only bot filter changes data
  const chartData = {
    ...dataTemplate,
    datasets: [
      {
        ...dataTemplate.datasets[0],
        data: demoData[bot] || demoData["All Bots"],
      },
    ],
  };

  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <div className="font-semibold text-base mb-1 md:mb-0">Revenue Trend</div>
        <div className="flex gap-2">
          <select
            className="px-2 py-1 rounded bg-[#23252B] dark:bg-gray-800 text-gray-100 dark:text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            value={dateRange}
            onChange={e => setDateRange(e.target.value)}
          >
            <option>Last 7 Months</option>
            <option>Last 3 Months</option>
            <option>Last Month</option>
          </select>
          <select
            className="px-2 py-1 rounded bg-[#23252B] dark:bg-gray-800 text-gray-100 dark:text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
            value={bot}
            onChange={e => setBot(e.target.value)}
          >
            <option>All Bots</option>
            <option>AlphaX</option>
            <option>BetaY</option>
          </select>
        </div>
      </div>
      <Line data={chartData} options={options} height={90} />
    </div>
  );
}
