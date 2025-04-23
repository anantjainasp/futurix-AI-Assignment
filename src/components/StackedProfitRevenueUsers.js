import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  BarController
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, BarController);

const colorMap = {
  Profit: "#34D399",
  Revenue: "#60A5FA",
  Users: "#FBBF24"
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

function exportChartAsCSV(labels, profit, revenue, users) {
  let csv = 'Label,Profit,Revenue,Users\n';
  labels.forEach((label, i) => {
    csv += `${label},${profit[i]},${revenue[i]},${users[i]}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `profit_revenue_users_data.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function StackedProfitRevenueUsers() {
  const [labels, setLabels] = useState([]);
  const [profit, setProfit] = useState([]);
  const [revenue, setRevenue] = useState([]);
  const [users, setUsers] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then(res => res.json())
      .then(json => {
        console.log('StackedProfitRevenueUsers data:', json); // DEBUG
        setLabels(json.labels);
        setProfit(json.Profit);
        setRevenue(json.Revenue);
        setUsers(json.Users);
      });
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Profit",
        data: profit,
        backgroundColor: colorMap.Profit,
        stack: "Stack 0"
      },
      {
        label: "Revenue",
        data: revenue,
        backgroundColor: colorMap.Revenue,
        stack: "Stack 0"
      },
      {
        label: "Users",
        data: users,
        backgroundColor: colorMap.Users,
        stack: "Stack 0"
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: '#A1A1AA',
          font: { size: 13 }
        }
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context) {
            const label = context.dataset.label;
            const value = context.parsed.y;
            if(label === "Users") return `${label}: ${value}`;
            return `${label}: $${value}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: { color: '#23252B' },
        ticks: { color: '#A1A1AA' }
      },
      y: {
        stacked: true,
        grid: { color: '#23252B' },
        ticks: {
          color: '#A1A1AA',
          callback: value => `$${value/1000}k`
        }
      }
    }
  };

  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-3">
        <div className="font-semibold text-base">Profit, Revenue & Users (Stacked)</div>
        <div className="flex gap-2 flex-wrap">
          <button
            className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-xs font-semibold shadow"
            onClick={() => exportChartAsImage(chartRef, `profit_revenue_users_stacked.png`)}
          >
            Export as PNG
          </button>
          <button
            className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow"
            onClick={() => exportChartAsCSV(labels, profit, revenue, users)}
          >
            Download CSV
          </button>
        </div>
      </div>
      <Bar ref={chartRef} data={data} options={options} height={90} />
    </div>
  );
}
