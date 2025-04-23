import React from "react";

const demoNews = [
  {
    title: "FuturixAI Dashboard Launches New Analytics Module",
    url: "#",
    published: "2025-04-23",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget luctus quam orci in velit."
  },
  {
    title: "AI Trends in 2025: What to Watch",
    url: "#",
    published: "2025-04-22",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget luctus quam orci in velit."
  },
  {
    title: "How Automation is Transforming Finance",
    url: "#",
    published: "2025-04-21",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, urna eu tincidunt consectetur, nisi nisl aliquam eros, eget luctus quam orci in velit."
  }
];

export default function NewsSection() {
  return (
    <div className="bg-[#24262B] rounded-xl p-6 shadow mb-8">
      <div className="font-semibold text-base mb-4">Latest News</div>
      <ul className="divide-y divide-gray-700">
        {demoNews.map((item, idx) => (
          <li key={idx} className="py-3">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline font-medium">
              {item.title}
            </a>
            <div className="text-xs text-gray-400 mt-1">{item.published}</div>
            <div className="text-sm text-gray-300 mt-1">{item.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
