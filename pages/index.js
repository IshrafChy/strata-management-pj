import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'; // Ensure this import is correct

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <div className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 ${geistSans.variable}`}>
        <main className={`flex flex-col sm:flex-row items-center justify-between w-full row-start-2 ${styles.container}`}>
          <div className="flex flex-col gap-8 sm:w-1/2">
            <h1 className={styles.title}>Building Management</h1>
            <h2 className={styles.subtitle}>Welcome to our management application</h2>
            <p className={styles.paragraph}>
              This helps you stay updated about our building’s events/issues.
            </p>
            <div className="flex flex-col gap-4 items-start">
              <Link href="/strata-management" passHref>
                <a className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 sm:w-auto ${styles.button}`}>
                  Login once every week to check for notifications.
                </a>
              </Link>
              <Link href="/docs" passHref>
                <a className={`rounded-full border border-solid border-gray-300 dark:border-gray-700 transition-colors flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-800 hover:border-transparent font-medium text-sm sm:text-base h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto md:w-[158px] ${styles.button}`}>
                  Read our docs
                </a>
              </Link>
            </div>
          </div>
          <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
            <Image src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" alt="White apartment building" width={800} height={600} className={styles.image} />
          </div>
        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          <Link href="/inquiries" passHref>
            <a className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 font-medium text-lg h-12 sm:h-14 px-6 sm:px-8 ${styles.button}`}>
              Inquiries
            </a>
          </Link>
          <Link href="/notifications" passHref>
            <a className={`rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-white gap-2 hover:bg-blue-700 font-medium text-lg h-12 sm:h-14 px-6 sm:px-8 ${styles.button}`}>
              Notifications
            </a>
          </Link>
        </footer>
      </div>
    </div>
  );
}
