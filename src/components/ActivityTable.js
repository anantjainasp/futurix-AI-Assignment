import React, { useState } from "react";

const activities = [
  { time: "09:15 AM", activity: "AI Bot executed trade", status: "Success", amount: "+$1,200" },
  { time: "10:02 AM", activity: "Manual trade", status: "Pending", amount: "-$300" },
  { time: "11:30 AM", activity: "Deposit", status: "Success", amount: "+$5,000" },
  { time: "12:05 PM", activity: "Withdrawal", status: "Failed", amount: "-$1,000" },
  { time: "01:45 PM", activity: "AI Bot executed trade", status: "Success", amount: "+$2,400" },
];

const statusColors = {
  Success: "text-green-400",
  Pending: "text-yellow-400",
  Failed: "text-red-400",
};

function exportCSV() {
  const headers = ["Time", "Activity", "Status", "Amount"];
  const rows = activities.map(a => [a.time, a.activity, a.status, a.amount]);
  let csvContent = [headers, ...rows].map(e => e.join(",")).join("\n");
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'activity.csv';
  a.click();
  URL.revokeObjectURL(url);
}

export default function ActivityTable() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  function handleRowClick(activity) {
    setSelectedActivity(activity);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedActivity(null);
  }

  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8 w-full overflow-x-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">Recent Activity</div>
        <button
          onClick={exportCSV}
          className="px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-blue-500 dark:hover:bg-blue-600"
        >
          Export CSV
        </button>
      </div>
      <table className="min-w-full text-left">
        <thead>
          <tr className="text-gray-400 text-xs uppercase">
            <th className="py-2 px-3">Time</th>
            <th className="py-2 px-3">Activity</th>
            <th className="py-2 px-3">Status</th>
            <th className="py-2 px-3">Amount</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((item, idx) => (
            <tr
              key={idx}
              className="border-t border-[#23252B] text-sm cursor-pointer hover:bg-[#23252B] dark:hover:bg-gray-800 transition-colors"
              onClick={() => handleRowClick(item)}
            >
              <td className="py-2 px-3 whitespace-nowrap">{item.time}</td>
              <td className="py-2 px-3 whitespace-nowrap">{item.activity}</td>
              <td className={`py-2 px-3 whitespace-nowrap font-semibold ${statusColors[item.status]}`}>{item.status}</td>
              <td className={`py-2 px-3 whitespace-nowrap ${item.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Interactive Modal for Activity Details */}
      {modalOpen && selectedActivity && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#23252B] rounded-lg shadow-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white text-xl font-bold focus:outline-none"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <div className="text-lg font-semibold mb-2">Activity Details</div>
            <div className="mb-2"><span className="font-semibold">Time:</span> {selectedActivity.time}</div>
            <div className="mb-2"><span className="font-semibold">Activity:</span> {selectedActivity.activity}</div>
            <div className="mb-2"><span className="font-semibold">Status:</span> <span className={statusColors[selectedActivity.status]}>{selectedActivity.status}</span></div>
            <div className="mb-2"><span className="font-semibold">Amount:</span> <span className={selectedActivity.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}>{selectedActivity.amount}</span></div>
          </div>
        </div>
      )}
    </div>
  );
}
