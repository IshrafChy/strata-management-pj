import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('All fields are required.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8 max-w-lg">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        {submitted ? (
          <div className="bg-green-700 p-6 rounded-lg text-center font-semibold">Thank you for contacting us!</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
            <div>
              <label className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
                required
              />
            </div>
            {error && <div className="text-red-400 font-semibold">{error}</div>}
            <button
              type="submit"
              className="w-full py-3 rounded bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 font-bold text-lg shadow-lg transition-all duration-200"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
} 