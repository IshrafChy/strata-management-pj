import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { useNotifications } from '../context/NotificationContext';

export default function ApiTest() {
  const [results, setResults] = useState({});
  const { addNotification } = useNotifications();

  // Test Emergency Notification
  const testEmergencyNotify = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      message: formData.get('message'),
      severity: formData.get('severity'),
      location: formData.get('location')
    };

    try {
      const response = await fetch('/api/emergency-notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setResults(prev => ({ ...prev, emergency: result }));
      // Add notification to context
      addNotification('emergency', `Emergency notification: ${data.message}`, {
        severity: data.severity,
        location: data.location,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      setResults(prev => ({ ...prev, emergency: { error: error.message } }));
      addNotification('emergency', 'Failed to send emergency notification', { error: error.message });
    }
  };

  // Test Visitor Check-in
  const testVisitorCheckin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      visitorName: formData.get('visitorName'),
      hostApartment: formData.get('hostApartment'),
      idNumber: formData.get('idNumber'),
      expectedDuration: formData.get('expectedDuration')
    };

    try {
      const response = await fetch('/api/visitor-checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setResults(prev => ({ ...prev, visitor: result }));
      // Add notification to context
      addNotification('visitor', `Visitor ${data.visitorName} checked in`, {
        hostApartment: data.hostApartment,
        expectedDuration: data.expectedDuration,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      setResults(prev => ({ ...prev, visitor: { error: error.message } }));
      addNotification('visitor', 'Failed to check in visitor', { error: error.message });
    }
  };

  // Test Maintenance Request
  const testMaintenanceRequest = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      apartmentNumber: formData.get('apartmentNumber'),
      issueType: formData.get('issueType'),
      description: formData.get('description'),
      priority: formData.get('priority'),
      contactNumber: formData.get('contactNumber')
    };

    try {
      const response = await fetch('/api/maintenance-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const result = await response.json();
      setResults(prev => ({ ...prev, maintenance: result }));
      // Add notification to context
      addNotification('maintenance', `Maintenance request for apartment ${data.apartmentNumber}`, {
        issueType: data.issueType,
        priority: data.priority,
        description: data.description,
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      setResults(prev => ({ ...prev, maintenance: { error: error.message } }));
      addNotification('maintenance', 'Failed to submit maintenance request', { error: error.message });
    }
  };

  return (
    <div className="min-h-screen bg-indigo-900 text-white">
      <h1 className="text-3xl font-bold mb-8">API Test Page</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Emergency Notification Form */}
        <div className="bg-indigo-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-white">Emergency Notification</h2>
          <form onSubmit={testEmergencyNotify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Message</label>
              <input type="text" name="message" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Severity</label>
              <select name="severity" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Location</label>
              <input type="text" name="location" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
              Send Emergency Notification
            </button>
          </form>
          {results.emergency && (
            <div className="mt-4 p-4 bg-gray-900 rounded-md text-white">
              <pre className="text-sm">{JSON.stringify(results.emergency, null, 2)}</pre>
            </div>
          )}
        </div>

        {/* Visitor Check-in Form */}
        <div className="bg-indigo-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-white">Visitor Check-in</h2>
          <form onSubmit={testVisitorCheckin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Visitor Name</label>
              <input type="text" name="visitorName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Host Apartment</label>
              <input type="text" name="hostApartment" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">ID Number</label>
              <input type="text" name="idNumber" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Expected Duration (hours)</label>
              <input type="number" name="expectedDuration" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
              Check-in Visitor
            </button>
          </form>
          {results.visitor && (
            <div className="mt-4 p-4 bg-gray-900 rounded-md text-white">
              <pre className="text-sm">{JSON.stringify(results.visitor, null, 2)}</pre>
            </div>
          )}
        </div>

        {/* Maintenance Request Form */}
        <div className="bg-indigo-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-white">Maintenance Request</h2>
          <form onSubmit={testMaintenanceRequest} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Apartment Number</label>
              <input type="text" name="apartmentNumber" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Issue Type</label>
              <select name="issueType" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black">
                <option value="plumbing">Plumbing</option>
                <option value="electrical">Electrical</option>
                <option value="hvac">HVAC</option>
                <option value="structural">Structural</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Description</label>
              <textarea name="description" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Priority</label>
              <select name="priority" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Contact Number</label>
              <input type="tel" name="contactNumber" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm text-black" />
            </div>
            <button type="submit" className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
              Submit Maintenance Request
            </button>
          </form>
          {results.maintenance && (
            <div className="mt-4 p-4 bg-gray-900 rounded-md text-white">
              <pre className="text-sm">{JSON.stringify(results.maintenance, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 