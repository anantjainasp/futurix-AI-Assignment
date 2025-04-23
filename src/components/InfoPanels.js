import React from "react";

export default function InfoPanels() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="bg-[#24262B] rounded-xl p-6 shadow flex flex-col gap-2">
        <div className="text-lg font-semibold mb-2">Market Insights</div>
        <div className="text-xs text-gray-400 mb-2">April 2025</div>
        <div className="text-sm text-gray-300">
          The AI-driven bots have shown increased performance this month, with a higher win rate and improved risk-adjusted returns. Market volatility remains moderate, favoring algorithmic strategies. Continue monitoring for sudden shifts in volume and trend signals.
        </div>
      </div>
      <div className="bg-[#24262B] rounded-xl p-6 shadow flex flex-col gap-2">
        <div className="text-lg font-semibold mb-2">Strategy Notes</div>
        <div className="text-xs text-gray-400 mb-2">Key Points</div>
        <ul className="list-disc list-inside text-sm text-gray-300">
          <li>Scalping and arbitrage bots are outperforming manual trades.</li>
          <li>Drawdown risk is contained below 10% for all strategies.</li>
          <li>Consider increasing allocation to high Sharpe ratio bots.</li>
        </ul>
      </div>
    </div>
  );
}
