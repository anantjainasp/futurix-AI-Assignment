import React from "react";

const actions = [
  {
    type: "Dividend",
    date: "2025-03-15",
    details: "Final Dividend ₹5/share",
  },
  {
    type: "Bonus Issue",
    date: "2024-12-01",
    details: "1:2 Bonus Share Issue",
  },
  {
    type: "Stock Split",
    date: "2024-09-10",
    details: "Split from ₹10 to ₹2 face value",
  },
  {
    type: "AGM",
    date: "2024-08-20",
    details: "Annual General Meeting",
  },
];

const ICONS = {
  Dividend: "💰",
  "Bonus Issue": "🎁",
  "Stock Split": "🔀",
  AGM: "📅"
};

export default function CorporateActionSection() {
  return (
    <div className="bg-gradient-to-br from-[#232526] to-[#1e293b] rounded-xl p-6 shadow-xl border-2 border-blue-700 flex flex-col h-full min-h-[260px]">
      <h2 className="text-lg md:text-xl font-extrabold text-blue-300 mb-4 tracking-tight drop-shadow flex items-center gap-2">
        <span className="inline-block text-2xl">⚡</span> Corporate Actions
      </h2>
      <ul className="flex flex-col gap-4">
        {actions.map((action, idx) => (
          <li key={idx} className="flex items-center gap-3 bg-[#23272e]/70 rounded-lg p-4 border border-blue-900 hover:shadow-lg transition group">
            <span className="text-2xl mr-1 group-hover:scale-110 transition-transform">{ICONS[action.type] || "📌"}</span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wide">{action.type}</span>
                <span className="text-xs text-gray-400 ml-2">{action.date}</span>
              </div>
              <span className="text-gray-100 text-sm font-medium">{action.details}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
