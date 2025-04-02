import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Inquiries() {
  const [name, setName] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('');
  const [inquiry, setInquiry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ name, apartmentNumber, inquiry });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Inquiries</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            Apartment Number:
            <input
              type="text"
              value={apartmentNumber}
              onChange={(e) => setApartmentNumber(e.target.value)}
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
          </label>
          <label className="flex flex-col">
            Inquiry:
            <textarea
              value={inquiry}
              onChange={(e) => setInquiry(e.target.value)}
              className="p-2 rounded bg-gray-800 text-white"
              required
            />
          </label>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}