import React from "react";

export default function Sidebar() {
  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8 flex flex-col gap-6">
      {/* User Profile Summary */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-green-400 flex items-center justify-center text-xl font-bold text-white">A</div>
        <div>
          <div className="font-semibold text-base text-white">Anant</div>
          <div className="text-xs text-gray-400">Pro Member</div>
        </div>
      </div>
      {/* Quick Actions */}
      <div>
        <div className="font-semibold text-sm mb-2 text-gray-200">Quick Actions</div>
        <div className="flex gap-2 flex-wrap">
          <button className="px-3 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow">Add Trade</button>
          <button className="px-3 py-1 rounded bg-green-600 hover:bg-green-700 text-white text-xs font-semibold shadow">Deposit</button>
          <button className="px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-semibold shadow">Withdraw</button>
        </div>
      </div>
      {/* Shortcuts */}
      <div>
        <div className="font-semibold text-sm mb-2 text-gray-200">Shortcuts</div>
        <ul className="flex flex-col gap-2">
          <li><a href="#" className="text-blue-400 hover:underline text-xs">Reports</a></li>
          <li><a href="#" className="text-blue-400 hover:underline text-xs">Settings</a></li>
          <li><a href="#" className="text-blue-400 hover:underline text-xs">Support</a></li>
        </ul>
      </div>
    </div>
  );
}
