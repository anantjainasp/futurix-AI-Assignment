import React from "react";
// import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#17191D] text-white font-sans flex">
      {/* <Sidebar /> */}
      <div className="flex-1 ml-0 md:ml-64 transition-all">
        {children}
      </div>
    </div>
  );
}
