import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function RedirectTest() {
  const [redirectType, setRedirectType] = useState('temporary');
  const [method, setMethod] = useState('GET');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `/api/redirect-demo?type=${redirectType}`;
    
    if (method === 'GET') {
      window.location.href = url;
    } else {
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ test: 'data' }),
        });
        
        // The browser will automatically follow the redirect
        // We won't see this response if the redirect works
        const data = await response.json();
        console.log('Response:', data);
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Redirect Test Page</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-900">Test Different Redirect Types</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Redirect Type
              </label>
              <select
                value={redirectType}
                onChange={(e) => setRedirectType(e.target.value)}
                className="w-full p-2 border rounded-md text-gray-900 bg-white"
              >
                <option value="temporary">307 Temporary Redirect</option>
                <option value="permanent">301 Permanent Redirect</option>
                <option value="found">302 Found</option>
                <option value="see-other">303 See Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Request Method
              </label>
              <select
                value={method}
                onChange={(e) => setMethod(e.target.value)}
                className="w-full p-2 border rounded-md text-gray-900 bg-white"
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-gray-100 py-2 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium"
            >
              Test Redirect
            </button>
          </form>
        </div>

        <div className="bg-blue-900 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-white">Redirect Types Explained</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-white text-lg">307 Temporary Redirect</h3>
              <p className="text-white">Preserves the HTTP method (GET stays GET, POST stays POST)</p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">301 Permanent Redirect</h3>
              <p className="text-white">Changes all requests to GET, indicates permanent move</p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">302 Found</h3>
              <p className="text-white">Changes POST to GET, temporary redirect</p>
            </div>
            <div>
              <h3 className="font-bold text-white text-lg">303 See Other</h3>
              <p className="text-white">Changes POST to GET, indicates different resource</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 