import React from "react";
import LineChart from "./LineChart";

export default function TopSummary() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
      {/* Left: Main Chart and Info */}
      <div className="lg:col-span-2 bg-[#24262B] rounded-xl p-6 shadow flex flex-col justify-between">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <div className="text-gray-400 text-xs">Account Balance</div>
            <div className="text-2xl font-bold mt-1">$24,500</div>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <div className="text-xs text-gray-400">Today’s Change</div>
            <div className="text-green-400 font-semibold text-sm">+2.1%</div>
          </div>
        </div>
        <div className="h-32 md:h-40 lg:h-48 bg-[#17191D] rounded-lg flex items-center justify-center overflow-hidden">
          {/* Insert the LineChart for Account Balance */}
          <div className="w-full h-full">
            <LineChart metric="AccountBalance" />
          </div>
        </div>
      </div>
      {/* Right: Quick Stats */}
      <div className="flex flex-col gap-6">
        <div className="bg-[#24262B] rounded-xl p-4 shadow flex flex-col items-start">
          <div className="text-xs text-gray-400">Profit</div>
          <div className="text-lg font-bold text-green-400 mt-1">$4,200</div>
        </div>
        <div className="bg-[#24262B] rounded-xl p-4 shadow flex flex-col items-start">
          <div className="text-xs text-gray-400">Loss</div>
          <div className="text-lg font-bold text-red-400 mt-1">$1,100</div>
        </div>
        <div className="bg-[#24262B] rounded-xl p-4 shadow flex flex-col items-start">
          <div className="text-xs text-gray-400">Net Trades</div>
          <div className="text-lg font-bold mt-1">+37</div>
        </div>
      </div>
    </div>
  );
}
