import React, { useState } from "react";

const financialFacts = [
  {
    title: "What is Market Cap?",
    description:
      "Market capitalization (Market Cap) is the total value of a company's or asset's outstanding shares, calculated as share price times total shares. For crypto, it's price times circulating supply. It reflects the asset's overall value in the market."
  },
  {
    title: "What is Book Value?",
    description:
      "Book Value is the net value of a company's assets, calculated as total assets minus total liabilities. It represents the value shareholders would theoretically receive if the company was liquidated."
  },
  {
    title: "What is Dividend Yield?",
    description:
      "Dividend Yield is a financial ratio that shows how much a company pays out in dividends each year relative to its stock price. It's expressed as a percentage."
  },
  {
    title: "What is Debt/Equity Ratio?",
    description:
      "The Debt/Equity Ratio compares a company's total liabilities to its shareholder equity. It indicates how much leverage a company is using to finance its assets."
  },
  {
    title: "What is ROE?",
    description:
      "Return on Equity (ROE) measures a company's profitability by revealing how much profit it generates with the money shareholders have invested."
  }
];

const valuationFacts = [
  {
    title: "What is P/E Ratio?",
    description:
      "The Price-to-Earnings (P/E) Ratio measures a company's current share price relative to its per-share earnings. It helps investors assess if a stock is over- or under-valued compared to its earnings."
  },
  {
    title: "What is EV/EBITDA?",
    description:
      "Enterprise Value to EBITDA (EV/EBITDA) is a valuation metric used to compare the value of a company, inclusive of debt and cash, to its actual earnings. Lower values often indicate a potentially undervalued company."
  }
];

export default function FinancialValuationSection() {
  const [showType, setShowType] = useState('financial');

  const facts = showType === 'financial' ? financialFacts : valuationFacts;

  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-lg font-bold text-white">{showType === 'financial' ? 'Financial Facts' : 'Valuation Facts'}</h2>
        <div className="ml-auto flex gap-2">
          <button
            onClick={() => setShowType('financial')}
            className={`px-3 py-1 rounded ${showType === 'financial' ? 'bg-emerald-600 text-white' : 'bg-[#18181b] text-gray-400'}`}
          >
            Financial
          </button>
          <button
            onClick={() => setShowType('valuation')}
            className={`px-3 py-1 rounded ${showType === 'valuation' ? 'bg-emerald-600 text-white' : 'bg-[#18181b] text-gray-400'}`}
          >
            Valuation
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {facts.map(fact => (
          <div key={fact.title} className="bg-[#18181b] rounded-lg p-4 border border-gray-700">
            <div className="text-base font-semibold text-emerald-400 mb-1">{fact.title}</div>
            <div className="text-gray-300 text-sm">{fact.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
