import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function MaintenanceRequestsPage() {
  const [maintenanceRequests, setMaintenanceRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
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
  }, [router]);

  const handleLogout = async () => {
    await fetch('/api/logout', {
      method: 'POST',
    });
    router.push('/login');
  };

  const handleRequestClick = (request) => {
    setSelectedRequest(request);
  };

  const handleCloseModal = () => {
    setSelectedRequest(null);
  };

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
                <li 
                  key={request.id} 
                  className="border-b pb-4 last:border-b-0 last:pb-0 cursor-pointer hover:bg-gray-50 p-4 rounded"
                  onClick={() => handleRequestClick(request)}
                >
                  <h2 className="text-xl font-semibold">{request.title}</h2>
                  <p className="text-gray-700 mb-2">{request.description}</p>
                  <p className="text-sm text-gray-500">Status: {request.status} | Date: {new Date(request.request_date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500">Requested by User ID: {request.user_id}</p>
                </li>
              ))}
            </ul>
          )
        }

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>

        {/* Modal for showing request details */}
        {selectedRequest && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              <h2 className="text-2xl font-bold mb-4">{selectedRequest.title}</h2>
              <p className="text-gray-700 mb-4">{selectedRequest.description}</p>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Status:</span> {selectedRequest.status}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Date:</span> {new Date(selectedRequest.request_date).toLocaleDateString()}
                </p>
                <p className="text-sm text-gray-500">
                  <span className="font-semibold">Requested by User ID:</span> {selectedRequest.user_id}
                </p>
              </div>
              <button
                onClick={handleCloseModal}
                className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}