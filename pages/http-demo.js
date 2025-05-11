import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function HttpDemo() {
  const [getResult, setGetResult] = useState(null);
  const [postResult, setPostResult] = useState(null);
  const [redirectMsg, setRedirectMsg] = useState('');

  // Handle GET form submission
  const handleGet = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(new FormData(e.target)).toString();
    setGetResult(Object.fromEntries(new FormData(e.target)));
    window.history.replaceState({}, '', `?${params}`);
  };

  // Handle POST form submission
  const handlePost = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    const res = await fetch('/api/http-demo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.redirected) {
      setRedirectMsg('You were redirected by the serverless function!');
      window.location = res.url;
      return;
    }
    const result = await res.json();
    setPostResult(result);
  };

  return (
    <div className="min-h-screen bg-indigo-900 text-white">
      <Navbar />
      <div className="container mx-auto p-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6">HTTP GET vs POST Demo</h1>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">GET vs POST</h2>
          <ul className="list-disc list-inside mb-2">
            <li><b>GET</b>: Sends data as URL parameters. Data is visible in the address bar. Used for retrieving data, not for sensitive info.</li>
            <li><b>POST</b>: Sends data in the request body. Data is not visible in the URL. Used for submitting sensitive or large data.</li>
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">HTTP Status Codes</h2>
          <ul className="list-disc list-inside mb-2">
            <li><b>200 OK</b>: Success</li>
            <li><b>201 Created</b>: Resource created</li>
            <li><b>400 Bad Request</b>: Client error</li>
            <li><b>404 Not Found</b>: Resource not found</li>
            <li><b>500 Internal Server Error</b>: Server error</li>
            <li><b>302/307 Redirect</b>: Redirects the client to another URL</li>
          </ul>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* GET Form */}
          <form onSubmit={handleGet} className="bg-indigo-800 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-bold mb-2">GET Form</h2>
            <label className="block">Name: <input name="name" className="ml-2 p-1 rounded text-black" required /></label>
            <label className="block">Email: <input name="email" className="ml-2 p-1 rounded text-black" required /></label>
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Submit (GET)</button>
            {getResult && <div className="mt-2 text-sm">Submitted: {JSON.stringify(getResult)}</div>}
          </form>
          {/* POST Form */}
          <form onSubmit={handlePost} className="bg-indigo-800 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-bold mb-2">POST Form</h2>
            <label className="block">Name: <input name="name" className="ml-2 p-1 rounded text-black" required /></label>
            <label className="block">Email: <input name="email" className="ml-2 p-1 rounded text-black" required /></label>
            <button type="submit" className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Submit (POST)</button>
            {postResult && <div className="mt-2 text-sm">Server Response: {JSON.stringify(postResult)}</div>}
            {redirectMsg && <div className="mt-2 text-green-400 font-bold">{redirectMsg}</div>}
          </form>
        </div>
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-2">How to Redirect in a Serverless Function</h2>
          <p>In a Next.js API route, you can redirect by returning a <b>302</b> or <b>307</b> status and a <code>Location</code> header. See <code>pages/api/http-demo.js</code> for an example.</p>
        </section>
      </div>
    </div>
  );
} 