import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MaintenanceRequestsPage() {
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/maintenance-requests');

        if (res.status === 401) {
          // If unauthorized, redirect to login
          router.push('/login');
          return;
        }

        const data = await res.json();

        if (data.success) {
          setMaintenanceRequests(data.maintenanceRequests);
        } else {
          setError(data.message || 'Failed to fetch maintenance requests');
        }
      } catch (err) {
        console.error('Error fetching maintenance requests:', err);
        setError('An error occurred while fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [router]); // Added router to dependency array

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">Maintenance Requests</h1>

        {
          maintenanceRequests.length === 0 ? (
            <p className="text-center text-gray-600">No maintenance requests found.</p>
          ) : (
            <ul className="space-y-4">
              {maintenanceRequests.map(request => (
                <li key={request.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                  <h2 className="text-xl font-semibold">{request.title}</h2>
                  <p className="text-gray-700 mb-2">{request.description}</p>
                  <p className="text-sm text-gray-500">Status: {request.status} | Date: {new Date(request.request_date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500">Requested by User ID: {request.user_id}</p>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    </div>
  );
}