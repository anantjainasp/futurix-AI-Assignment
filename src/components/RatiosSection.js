import React, { useMemo, useState } from "react";

const ratiosData = {
  consolidated: [
    { title: "Current Ratio", value: 2.1 },
    { title: "Quick Ratio", value: 1.7 },
    { title: "Debt-to-Equity Ratio", value: 0.42 },
    { title: "Gross Margin Ratio", value: "58%" },
    { title: "Net Profit Margin", value: "18%" },
    { title: "Return on Assets (ROA)", value: "7.4%" },
    { title: "Return on Equity (ROE)", value: "14.2%" },
    { title: "Operating Margin", value: "21%" },
    { title: "Interest Coverage Ratio", value: 6.3 },
    { title: "Asset Turnover Ratio", value: 1.1 },
    { title: "Inventory Turnover Ratio", value: 5.8 },
    { title: "Earnings Per Share (EPS)", value: 12.4 },
    { title: "Price/Earnings (P/E) Ratio", value: 19.5 },
    { title: "Dividend Payout Ratio", value: "32%" }
  ],
  standalone: [
    { title: "Current Ratio", value: 1.8 },
    { title: "Quick Ratio", value: 1.4 },
    { title: "Debt-to-Equity Ratio", value: 0.36 },
    { title: "Gross Margin Ratio", value: "55%" },
    { title: "Net Profit Margin", value: "15%" },
    { title: "Return on Assets (ROA)", value: "6.1%" },
    { title: "Return on Equity (ROE)", value: "12.8%" },
    { title: "Operating Margin", value: "18%" },
    { title: "Interest Coverage Ratio", value: 5.1 },
    { title: "Asset Turnover Ratio", value: 0.98 },
    { title: "Inventory Turnover Ratio", value: 4.9 },
    { title: "Earnings Per Share (EPS)", value: 10.6 },
    { title: "Price/Earnings (P/E) Ratio", value: 16.8 },
    { title: "Dividend Payout Ratio", value: "28%" }
  ]
};

const RatioCard = React.memo(function RatioCard({ title, value }) {
  return (
    <div className="bg-[#18181b] rounded-lg p-4 border border-gray-700 flex items-center justify-between">
      <div className="text-base font-semibold text-emerald-400">{title}</div>
      <div className="text-emerald-300 font-bold text-lg ml-6">{value}</div>
    </div>
  );
});

export default function RatiosSection() {
  const [view, setView] = useState('consolidated');
  const ratios = useMemo(() => ratiosData[view], [view]);

  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8 w-full">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-lg font-bold text-white">Key Financial Ratios</h2>
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setView('consolidated')}
            className={`px-3 py-1 rounded font-semibold text-sm transition-colors ${view === 'consolidated' ? 'bg-emerald-600 text-white' : 'bg-[#18181b] text-gray-300 border border-gray-700'}`}
          >
            Consolidated
          </button>
          <button
            onClick={() => setView('standalone')}
            className={`px-3 py-1 rounded font-semibold text-sm transition-colors ${view === 'standalone' ? 'bg-emerald-600 text-white' : 'bg-[#18181b] text-gray-300 border border-gray-700'}`}
          >
            Standalone
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-[#24262B]">
        {ratios.map(ratio => (
          <RatioCard key={ratio.title} title={ratio.title} value={ratio.value} />
        ))}
      </div>
    </div>
  );
}
