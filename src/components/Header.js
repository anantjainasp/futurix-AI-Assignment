import React, { useEffect, useState, useRef } from "react";

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="w-8 h-8 flex items-center justify-center rounded bg-[#23252B] dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'dark' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-yellow-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 dark:text-gray-100">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
}

function Notifications() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const notifications = [
    { id: 1, text: "New trade executed by Bot Alpha" },
    { id: 2, text: "Strategy Beta reached target profit" },
    { id: 3, text: "Account balance updated" },
  ];
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-8 h-8 flex items-center justify-center rounded bg-[#23252B] dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Show Notifications"
      >
        {/* Bell Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-400 dark:text-gray-200">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a3.001 3.001 0 01-5.714 0M12 3v1m6.364 1.636a9 9 0 11-12.728 0" />
        </svg>
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"></span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded z-50">
          <div className="p-2 border-b border-gray-100 dark:border-gray-700 text-xs font-semibold text-gray-600 dark:text-gray-300">Notifications</div>
          <ul>
            {notifications.map((n) => (
              <li key={n.id} className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                {n.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function ProfileDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-8 h-8 rounded-full bg-[#23252B] dark:bg-gray-800 flex items-center justify-center focus:outline-none"
        aria-label="Open Profile Menu"
      >
        <span className="text-sm font-semibold">A</span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-lg rounded z-50">
          <ul>
            <li className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">View Profile</li>
            <li className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</li>
            <li className="px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

function SearchBar() {
  const [value, setValue] = useState("");
  return (
    <div className="hidden md:flex items-center ml-6 w-64">
      <input
        type="text"
        className="w-full px-3 py-1.5 rounded bg-[#23252B] dark:bg-gray-800 text-gray-100 dark:text-gray-100 placeholder:text-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <svg className="-ml-8 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
}

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-[#1B1D23] dark:bg-gray-900 border-b border-[#23252B] shadow-sm transition-colors">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-8 h-8 bg-[#23252B] dark:bg-gray-800 rounded flex items-center justify-center">
          <span className="font-bold text-lg tracking-tight">F</span>
        </div>
        <span className="font-semibold text-xl tracking-tight">FuturixAI</span>
        <SearchBar />
      </div>
      <div className="flex items-center gap-6">
        <ThemeToggle />
        <Notifications />
        <ProfileDropdown />
      </div>
    </header>
  );
}
