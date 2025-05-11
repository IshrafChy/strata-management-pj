import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

// Google fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const Home = () => {
  // Hooks are always called here
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [isClient, setIsClient] = useState(false); // This will only handle client-side rendering
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // We use useEffect to set isClient to true only on the client side
  useEffect(() => {
    setIsClient(true); // Set to true when mounted on the client-side
  }, []);

  // Ensure the hooks are not called conditionally
  useEffect(() => {
    if (!apiUrl) {
      setError("API URL is not defined");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/data`);
        if (!response.ok) {
          throw new Error(`API call failed with status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message); 
      }
    };

    fetchData();
  }, [apiUrl]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  // Only render the component once it's mounted on the client
  if (!isClient) {
    return null;  // Avoid rendering on the server
  }

  return (
    <div className="bg-gray-900 text-white">
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <div
        className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${geistSans.variable}`}
      >
        <main
          className={`flex flex-col sm:flex-row items-center justify-between w-full row-start-2 ${styles.container}`}
        >
          <div className="flex flex-col gap-8 sm:w-1/2">
            <h1 className={`${styles.title}`}>Building Management</h1>
            <h2 className={`${styles.subtitle}`}>Welcome to our management application</h2>
            <p className={`${styles.paragraph}`}>
              This helps you stay updated about our building&apos;s events/issues.
            </p>
            <div className="flex flex-col gap-4 items-start">
              <Link
                href="/strata-management"
                className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-bold shadow-lg hover:bg-indigo-600 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Login once every week to check for notifications.
              </Link>
              <Link
                href="/docs"
                className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-bold shadow-lg hover:bg-indigo-600 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Read our docs
              </Link>
              <Link
                href="/http-demo"
                className="px-6 py-3 rounded-lg bg-teal-600 text-white font-bold shadow-lg hover:bg-teal-700 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                HTTP Demo
              </Link>
              <Link
                href="/redirect-test"
                className="px-6 py-3 rounded-lg bg-blue-700 text-white font-bold shadow-lg hover:bg-blue-800 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Redirect Test
              </Link>
              <Link
                href="/api-test"
                className="px-6 py-3 rounded-lg bg-purple-700 text-white font-bold shadow-lg hover:bg-purple-800 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                API Test
              </Link>
            </div>
          </div>
          <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
              alt="White apartment building"
              width={800}
              height={600}
              className={styles.image}
            />
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link
            href="/inquiries"
            className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-bold shadow-lg hover:bg-indigo-600 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Inquiries
          </Link>
          <Link
            href="/notifications"
            className="px-6 py-3 rounded-lg bg-indigo-500 text-white font-bold shadow-lg hover:bg-indigo-600 transition-all duration-200 border-2 border-transparent hover:border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
          >
            Notifications
          </Link>
        </footer>
      </div>

      {/* Error Handling UI */}
      {error && (
        <div className="text-red-500 text-center mt-4">
          <p>Error: {error}</p>
        </div>
      )}

      {/* Display the fetched data */}
      {data && (
        <div className="text-center mt-4">
          <h2>Fetched Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Home;
