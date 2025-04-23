import React from "react";

const performances = [
  {
    label: "Sharpe Ratio",
    value: "1.45",
    desc: "Risk-adjusted return",
    color: "text-blue-400"
  },
  {
    label: "Max Drawdown",
    value: "-8.2%",
    desc: "Largest drop from peak",
    color: "text-red-400"
  },
  {
    label: "Win Rate",
    value: "63%",
    desc: "Profitable trades",
    color: "text-green-400"
  },
  {
    label: "Avg Trade Size",
    value: "$1,250",
    desc: "Mean trade value",
    color: "text-yellow-400"
  }
];

export default function PerformanceCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {performances.map((perf) => (
        <div key={perf.label} className="bg-[#24262B] rounded-xl p-6 shadow flex flex-col gap-2">
          <div className="text-xs text-gray-400">{perf.label}</div>
          <div className={`text-xl font-bold ${perf.color}`}>{perf.value}</div>
          <div className="text-xs text-gray-500">{perf.desc}</div>
        </div>
      ))}
    </div>
  );
}
