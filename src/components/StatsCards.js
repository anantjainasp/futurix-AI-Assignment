import React from "react";

const stats = [
  {
    label: "Total Revenue",
    value: "$24,500",
    change: "+3.2%",
    icon: "\uD83D\uDCB0",
    color: "bg-[#24262B]"
  },
  {
    label: "Active Users",
    value: "1,250",
    change: "+1.5%",
    icon: "\uD83D\uDC65",
    color: "bg-[#24262B]"
  },
  {
    label: "Conversion Rate",
    value: "5.4%",
    change: "-0.4%",
    icon: "\uD83D\uDCC8",
    color: "bg-[#24262B]"
  },
  {
    label: "Transactions",
    value: "3,800",
    change: "+2.8%",
    icon: "\uD83D\uDD04",
    color: "bg-[#24262B]"
  }
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`rounded-xl p-6 shadow ${stat.color} flex items-center gap-4`}
        >
          <div className="text-2xl bg-[#23252B] rounded-lg p-3">
            {stat.icon}
          </div>
          <div>
            <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            <div className="text-xl font-bold mt-1">{stat.value}</div>
            <div className={`text-xs mt-1 ${stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{stat.change}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
