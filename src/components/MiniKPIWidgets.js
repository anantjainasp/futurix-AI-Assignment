import React from "react";

const kpis = [
  {
    label: "Open Positions",
    value: 7,
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="3"/></svg>
    ),
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200"
  },
  {
    label: "Avg. Trade Duration",
    value: "2h 15m",
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
    ),
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200"
  },
  {
    label: "Best Bot This Week",
    value: "AlphaX",
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
    ),
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200"
  }
];

export default function MiniKPIWidgets() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {kpis.map((kpi, idx) => (
        <div key={idx} className={`flex items-center gap-3 p-4 rounded-lg shadow bg-white dark:bg-[#23252B] transition-colors border border-gray-100 dark:border-[#23252B] ${kpi.color}`}>
          <div className="flex-shrink-0">{kpi.icon}</div>
          <div>
            <div className="font-bold text-lg">{kpi.value}</div>
            <div className="text-xs text-gray-500 dark:text-gray-300">{kpi.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
