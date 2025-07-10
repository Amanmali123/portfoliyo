import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3">
      <img
        src="/download.jpg"
        alt="Aman Mali"
        className="w-10 h-10 rounded-full shadow-md border-2 border-white dark:border-gray-700 bg-white dark:bg-gray-900 object-cover"
      />
      <span className="font-semibold text-gray-900 dark:text-white text-base hidden sm:inline">Aman Mali</span>
      <button
        aria-label="Toggle Dark Mode"
        className="p-2 rounded-full bg-blue-100 dark:bg-gray-800 text-blue-700 dark:text-yellow-300 shadow-lg hover:scale-110 transition"
        onClick={() => setDark(!dark)}
      >
        {dark ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
} 