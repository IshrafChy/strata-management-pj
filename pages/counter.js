import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Counter</h1>
        <div className="text-6xl font-extrabold mb-6">{count}</div>
        <button
          onClick={() => setCount(count + 1)}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:from-purple-600 hover:to-green-400 text-white text-2xl font-bold shadow-lg transition-all duration-200"
        >
          + Increment
        </button>
      </div>
    </div>
  );
} 