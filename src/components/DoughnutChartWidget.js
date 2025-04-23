import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["AI Bots", "Manual", "Other"],
  datasets: [
    {
      label: "Trades",
      data: [62, 28, 10],
      backgroundColor: [
        "#60A5FA",
        "#34D399",
        "#FBBF24"
      ],
      borderColor: [
        "#23252B",
        "#23252B",
        "#23252B"
      ],
      borderWidth: 2,
    },
  ],
};

const options = {
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
          return `${context.label}: ${context.parsed} trades`;
        }
      }
    }
  },
  cutout: '70%',
};

export default function DoughnutChartWidget() {
  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8">
      <div className="font-semibold text-base mb-4">Trade Distribution</div>
      <Doughnut data={data} options={options} />
    </div>
  );
}
