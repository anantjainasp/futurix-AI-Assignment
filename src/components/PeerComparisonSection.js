import React from "react";

const peers = [
  {
    name: "FuturixAI (You)",
    price: 324.5,
    pe: 19.5,
    roe: "14.2%",
    marketCap: "₹12,500 Cr"
  },
  {
    name: "AlphaTech",
    price: 298.2,
    pe: 22.1,
    roe: "12.8%",
    marketCap: "₹10,800 Cr"
  },
  {
    name: "NextGen Solutions",
    price: 342.7,
    pe: 17.9,
    roe: "15.6%",
    marketCap: "₹13,200 Cr"
  },
  {
    name: "Visionary Ltd.",
    price: 289.4,
    pe: 21.3,
    roe: "13.5%",
    marketCap: "₹9,950 Cr"
  }
];

export default function PeerComparisonSection() {
  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8 w-full overflow-x-auto">
      <h2 className="text-lg font-bold text-white mb-4">Peer Comparison</h2>
      <table className="min-w-full text-sm text-left">
        <thead>
          <tr className="bg-[#18181b] text-emerald-300">
            <th className="py-2 px-4 font-semibold">Company</th>
            <th className="py-2 px-4 font-semibold">Price</th>
            <th className="py-2 px-4 font-semibold">P/E</th>
            <th className="py-2 px-4 font-semibold">ROE</th>
            <th className="py-2 px-4 font-semibold">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {peers.map((peer, idx) => (
            <tr key={peer.name} className={idx === 0 ? "bg-emerald-950/40" : "hover:bg-[#23272e]"}>
              <td className="py-2 px-4 font-bold text-white whitespace-nowrap">{peer.name}</td>
              <td className="py-2 px-4 text-gray-200">{peer.price}</td>
              <td className="py-2 px-4 text-gray-200">{peer.pe}</td>
              <td className="py-2 px-4 text-gray-200">{peer.roe}</td>
              <td className="py-2 px-4 text-gray-200">{peer.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
