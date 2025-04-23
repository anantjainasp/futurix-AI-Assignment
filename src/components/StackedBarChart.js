import React, { useEffect, useState, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const colorMap = [
  "#34D399", // Profit
  "#60A5FA", // Revenue
  "#FBBF24"  // Users
];

function exportChartAsImage(chartRef, filename) {
  if (chartRef.current) {
    const url = chartRef.current.toBase64Image();
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  }
}

function exportChartAsCSV(labels, datasets) {
  let csv = 'Label,Profit,Revenue,Users\n';
  labels.forEach((label, i) => {
    csv += `${label},${datasets[0].data[i]},${datasets[1].data[i]},${datasets[2].data[i]}\n`;
  });
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `stacked_bar_data.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

export default function StackedBarChart() {
  const [labels, setLabels] = useState([]);
  const [datasets, setDatasets] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3001/data")
      .then(res => res.json())
      .then(json => {
        setLabels(json.labels);
        setDatasets([
          {
            label: "Profit",
            data: json.Profit,
            backgroundColor: colorMap[0],
            stack: 'Stack 0',
            borderRadius: 6
          },
          {
            label: "Revenue",
            data: json.Revenue,
            backgroundColor: colorMap[1],
            stack: 'Stack 0',
            borderRadius: 6
          },
          {
            label: "Users",
            data: json.Users,
            backgroundColor: colorMap[2],
            stack: 'Stack 0',
            borderRadius: 6
          }
        ]);
      });
  }, []);

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
            return `${context.dataset.label}: $${context.parsed.y}`;
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
        <div className="font-semibold text-base mb-1 md:mb-0">Profit, Revenue & Users (Stacked)</div>
        <div className="flex gap-2">
          <button
            className="px-3 py-1 rounded bg-green-500 hover:bg-green-600 text-white text-xs font-semibold shadow"
            onClick={() => exportChartAsImage(chartRef, `stacked_bar_chart.png`)}
          >
            Export as PNG
          </button>
          <button
            className="px-3 py-1 rounded bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold shadow"
            onClick={() => exportChartAsCSV(labels, datasets)}
          >
            Download CSV
          </button>
        </div>
      </div>
      <Bar ref={chartRef} data={{ labels, datasets }} options={options} height={90} />
    </div>
  );
}
