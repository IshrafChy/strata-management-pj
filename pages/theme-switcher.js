import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function ThemeSwitcher() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    } else {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <div className={isDark ? 'bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
      <Navbar />
      <div className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Theme Switcher</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-yellow-400 via-pink-500 to-blue-500 hover:from-blue-500 hover:to-yellow-400 text-white text-2xl font-bold shadow-lg transition-all duration-200"
        >
          {isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </div>
  );
} 