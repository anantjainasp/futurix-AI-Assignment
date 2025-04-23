import React, { useState, useEffect, useRef } from "react";
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

const colorMap = {
  Profit: {
    border: "#34D399",
    bg: "rgba(52, 211, 153, 0.15)"
  },
  Revenue: {
    border: "#60A5FA",
    bg: "rgba(96, 165, 250, 0.15)"
  },
  Users: {
    border: "#FBBF24",
    bg: "rgba(251, 191, 36, 0.15)"
  },
  AccountBalance: {
    border: "#A78BFA",
    bg: "rgba(167, 139, 250, 0.15)"
  }
};

const dataTemplate = {
  labels: [],
  datasets: [
    {
      label: "",
      data: [],
      borderColor: "#34D399",
      backgroundColor: "rgba(52, 211, 153, 0.15)",
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      labels: {
        color: '#A1A1AA',
        font: { size: 13 }
      }
    },
    tooltip: {
      enabled: true,
      callbacks: {
        label: function(context) {
          return `${context.dataset.label}: $${context.parsed.y}`;
        }
      }
    }
  },
  scales: {
    x: {
      grid: { color: '#23252B' },
      ticks: { color: '#A1A1AA' }
    },
    y: {
      grid: { color: '#23252B' },
      ticks: {
        color: '#A1A1AA',
        callback: value => `$${value/1000}k`
      }
    }
  }
};

function exportChartAsImage(chartRef, filename) {
  if (chartRef.current) {
    const url = chartRef.current.toBase64Image();
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  }
}

function exportChartAsCSV(labels, data, metric) {
  let csv = `Label,${metric}\n`;
  labels.forEach((label, i) => {
    csv += `${label},${data[i]}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${metric}_trend.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function LineChart({ metric = "Revenue" }) {
  const [dateRange, setDateRange] = useState("Last 7 Months");
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  const chartRef = useRef(null);
  const [showUsersTrend, setShowUsersTrend] = useState(false);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then(res => res.json())
      .then(json => {
        console.log('Fetched data from API:', json); // DEBUG
        setLabels(json.labels);
        setData(json[metric]);
        setUsersData(json.Users);
      });
  }, [metric]);

  const chartData = {
    ...dataTemplate,
    labels,
    datasets: [
      {
        ...dataTemplate.datasets[0],
        label: metric,
        data,
        borderColor: colorMap[metric] ? colorMap[metric].border : "#34D399",
        backgroundColor: colorMap[metric] ? colorMap[metric].bg : "rgba(52, 211, 153, 0.15)",
      },
      ...(showUsersTrend && metric !== "Users"
        ? [{
            ...dataTemplate.datasets[0],
            label: "Users Trend",
            data: usersData,
            borderColor: colorMap.Users.border,
            backgroundColor: "rgba(251, 191, 36, 0.08)",
            borderDash: [5, 5],
            fill: false
          }]
        : [])
    ],
  };

  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <div className="font-semibold text-base mb-1 md:mb-0">{metric} Trend</div>
        <div className="flex gap-2">
          <select
            className="px-2 py-1 rounded bg-[#23252B] dark:bg-gray-800 text-gray-100 dark:text-gray-100 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 text-xs"
            value={dateRange}
            onChange={e => setDateRange(e.target.value)}
          >
            <option>Last 7 Months</option>
            <option>Last 3 Months</option>
            <option>Last Month</option>
          </select>
        </div>
      </div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <button
          className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-xs font-semibold shadow"
          onClick={() => exportChartAsImage(chartRef, `${metric}_trend.png`)}
        >
          Export as PNG
        </button>
        <button
          className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow"
          onClick={() => exportChartAsCSV(labels, data, metric)}
        >
          Download CSV
        </button>
        {metric !== "Users" && (
          <button
            className={`px-3 py-1 rounded ${showUsersTrend ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-500 hover:bg-gray-600'} text-white text-xs font-semibold shadow`}
            onClick={() => setShowUsersTrend(v => !v)}
          >
            {showUsersTrend ? 'Hide Users Trend' : 'Add Users Trend'}
          </button>
        )}
      </div>
      <Line ref={chartRef} data={chartData} options={options} height={90} />
    </div>
  );
}
