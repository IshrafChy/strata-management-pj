import Navbar from '../components/Navbar';

export default function About() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="mb-6 text-lg">Welcome to our Strata Management Portal! This site demonstrates modern web features using Next.js, React, and Tailwind CSS.</p>
        <img src="/about-image.jpg" alt="About" className="rounded-lg shadow-lg w-full max-w-md mx-auto" />
      </div>
    </div>
  );
} 