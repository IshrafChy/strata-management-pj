// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled based on environment variable
    const isEnabled = process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true';
    setIsDarkMode(isEnabled);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <nav className="flex flex-wrap justify-between items-center p-4 bg-teal-700 text-white shadow-md font-sans">
      <div className="flex flex-wrap gap-2 md:gap-4">
        <Link href="/">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">Home</span>
        </Link>
        <Link href="/about">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">About</span>
        </Link>
        <Link href="/contact">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">Contact</span>
        </Link>
        <Link href="/gallery">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">Gallery</span>
        </Link>
        <Link href="/counter">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">Counter</span>
        </Link>
        <Link href="/theme-switcher">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">Theme Switcher</span>
        </Link>
        <Link href="/notifications">
          <span className="px-4 py-2 rounded bg-teal-500 hover:bg-teal-400 text-white font-semibold shadow transition-all duration-200 cursor-pointer">Notifications</span>
        </Link>
      </div>
      {/* Dark Mode Toggle Button */}
      <button 
        onClick={toggleDarkMode} 
        className="text-lg bg-white text-teal-700 hover:bg-teal-100 py-2 px-4 rounded shadow transition-all duration-200 mt-2 md:mt-0 font-bold font-sans"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
