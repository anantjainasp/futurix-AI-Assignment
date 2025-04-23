import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const shareholdingData = [
  { category: "Promoters", percent: 52.3 },
  { category: "Foreign Institutions", percent: 18.7 },
  { category: "Domestic Institutions", percent: 14.5 },
  { category: "Public & Others", percent: 14.5 }
];

const COLORS = [
  "#34d399", // emerald-400
  "#818cf8", // indigo-400
  "#fbbf24", // yellow-400
  "#f87171"  // red-400
];

const data = {
  labels: shareholdingData.map(d => d.category),
  datasets: [
    {
      data: shareholdingData.map(d => d.percent),
      backgroundColor: COLORS,
      borderWidth: 3,
      borderColor: "#18181b",
      hoverOffset: 18,
      hoverBorderColor: "#fff"
    }
  ]
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#18181b",
      titleColor: "#fff",
      bodyColor: "#fff",
      borderColor: "#34d399",
      borderWidth: 2,
      padding: 16,
      callbacks: {
        label: function(context) {
          return `${context.label}: ${context.parsed}%`;
        }
      }
    }
  },
  layout: {
    padding: 10
  },
  cutout: "0%",
  responsive: true,
  maintainAspectRatio: false
};

export default function ShareholdingPieChart() {
  return (
    <div className="rounded-xl mb-8 w-full flex flex-col md:flex-row items-center min-h-[350px] border-2 border-emerald-700 bg-gradient-to-br from-[#232526] to-[#414345] shadow-lg">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <h2 className="text-lg md:text-xl font-extrabold text-emerald-400 mb-3 tracking-tight drop-shadow">Shareholding Pattern</h2>
        <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
          <Pie data={data} options={options} />
        </div>
      </div>
      <div className="flex-1 mt-6 md:mt-0 md:ml-8 w-full max-w-xs p-4">
        <div className="bg-[#23272e] rounded-lg p-4 border border-emerald-800 grid grid-cols-1 gap-3">
          {shareholdingData.map((d, i) => (
            <div key={d.category} className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[i] }}></span>
              <span className="text-gray-100 font-medium text-sm md:text-base">{d.category}</span>
              <span className="ml-auto text-emerald-300 font-bold text-sm md:text-base">{d.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
