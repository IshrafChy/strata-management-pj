import "@/styles/globals.css"; // Import global CSS
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled through the environment variable
    const isEnabled = process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true';
    setIsDarkMode(isEnabled);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class globally to the body
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
    <>
      {/* Button to toggle dark mode */}
      <button onClick={toggleDarkMode} className="theme-toggle-btn">
        Toggle Dark Mode
      </button>
      {/* Render the component */}
      <Component {...pageProps} />
    </>
  );
}
