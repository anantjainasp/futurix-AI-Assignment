import React, { useState } from "react";

const bots = [
  {
    name: "AlphaBot",
    type: "Scalping",
    status: "Active",
    color: "bg-green-500",
    description: "Executes rapid trades to capture small price movements."
  },
  {
    name: "BetaBot",
    type: "Swing",
    status: "Inactive",
    color: "bg-gray-500",
    description: "Holds positions over days to benefit from price swings."
  },
  {
    name: "GammaBot",
    type: "Arbitrage",
    status: "Active",
    color: "bg-green-500",
    description: "Exploits price differences across markets for profit."
  },
  {
    name: "DeltaBot",
    type: "Trend Following",
    status: "Active",
    color: "bg-green-500",
    description: "Identifies and follows prevailing market trends."
  }
];

export default function BotsStrategies() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);

  function handleBotClick(bot) {
    setSelectedBot(bot);
    setModalOpen(true);
  }
  function closeModal() {
    setModalOpen(false);
    setSelectedBot(null);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <div className="bg-[#24262B] rounded-xl p-6 shadow">
        <div className="text-lg font-semibold mb-4">Active Bots</div>
        <ul className="space-y-4">
          {bots.map((bot) => (
            <li key={bot.name} className="flex items-center justify-between cursor-pointer hover:bg-[#23252B] rounded transition-colors" onClick={() => handleBotClick(bot)}>
              <div>
                <div className="font-bold text-base">{bot.name}</div>
                <div className="text-xs text-gray-400">{bot.type}</div>
              </div>
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${bot.color} bg-opacity-20 text-green-400 border border-green-500`}>{bot.status}</span>
            </li>
          ))}
        </ul>
      </div>
      {/* Strategies Card */}
      <div className="bg-[#24262B] rounded-xl p-6 shadow">
        <div className="text-lg font-semibold mb-4">Strategies</div>
        <ul className="space-y-4">
          <li className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base">Scalping</div>
              <div className="text-xs text-gray-400">Short-term, rapid trades</div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500 bg-opacity-20 text-blue-400 border border-blue-500">+12.5%</span>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base">Swing</div>
              <div className="text-xs text-gray-400">Medium-term, trend riding</div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500 bg-opacity-20 text-yellow-400 border border-yellow-500">+8.2%</span>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base">Arbitrage</div>
              <div className="text-xs text-gray-400">Cross-market price exploitation</div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500 bg-opacity-20 text-green-400 border border-green-500">+5.9%</span>
          </li>
          <li className="flex items-center justify-between">
            <div>
              <div className="font-bold text-base">Trend Following</div>
              <div className="text-xs text-gray-400">Follows prevailing trends</div>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500 bg-opacity-20 text-purple-400 border border-purple-500">+10.4%</span>
          </li>
        </ul>
      </div>
      {/* Interactive Modal for Bot Details */}
      {modalOpen && selectedBot && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#23252B] rounded-lg shadow-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl font-bold focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-lg font-semibold mb-2">Bot Details</div>
            <div className="mb-2"><span className="font-semibold">Name:</span> {selectedBot.name}</div>
            <div className="mb-2"><span className="font-semibold">Type:</span> {selectedBot.type}</div>
            <div className="mb-2"><span className="font-semibold">Status:</span> <span className={selectedBot.color}>{selectedBot.status}</span></div>
            <div className="mb-2"><span className="font-semibold">Description:</span> {selectedBot.description}</div>
          </div>
        </div>
      )}
    </div>
  );
}
