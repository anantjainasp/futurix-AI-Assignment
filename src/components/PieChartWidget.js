import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["AI Bots", "Manual Trades", "Others"],
  datasets: [
    {
      label: "Distribution",
      data: [62, 25, 13],
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
      position: "bottom",
      labels: {
        color: "#A1A1AA",
        boxWidth: 16,
        padding: 16,
      },
    },
  },
};

export default function PieChartWidget() {
  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8 w-full max-w-sm">
      <div className="text-lg font-semibold mb-4">Trade Source Distribution</div>
      <Pie data={data} options={options} height={180} />
    </div>
  );
}
