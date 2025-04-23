import React from "react";

// Example shareholding data
const shareholdingData = [
  { category: "Promoters", percent: 52.3 },
  { category: "Foreign Institutions", percent: 18.7 },
  { category: "Domestic Institutions", percent: 14.5 },
  { category: "Public & Others", percent: 14.5 }
];

export default function ShareholdingSection() {
  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8 w-full">
      <h2 className="text-lg font-bold text-white mb-4">Shareholding Pattern</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {shareholdingData.map(({ category, percent }) => (
          <div key={category} className="bg-[#18181b] rounded-lg p-4 border border-gray-700 flex items-center justify-between">
            <div className="text-base font-semibold text-emerald-400">{category}</div>
            <div className="text-emerald-300 font-bold text-lg ml-6">{percent}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}
