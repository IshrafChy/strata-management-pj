// components/Navbar.js
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
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white shadow-md">
      {/* Dark Mode Toggle Button */}
      <button 
        onClick={toggleDarkMode} 
        className="text-lg bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </nav>
  );
}
