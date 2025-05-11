import { useState } from 'react';
import Navbar from '../components/Navbar';
import { useNotifications } from '../context/NotificationContext';

// Initial notifications data
const initialNotifications = {
  urgent: [
    "Urgent: Water leakage in the basement. Please avoid the area.",
    "Urgent: Power outage scheduled for April 7th, 2025, from 10 AM to 2 PM.",
  ],
  recent: [
    "Water supply maintenance on April 5th, 2025.",
    "Fire drill scheduled for April 10th, 2025.",
  ],
  pastWeek: [
    "Elevator maintenance completed on March 30th, 2025.",
    "Community BBQ held on March 28th, 2025.",
  ],
  pastMonth: [
    "Annual General Meeting held on March 15th, 2025.",
    "New gym equipment installed on March 10th, 2025.",
  ],
  pastYear: [
    "Building exterior painted in January 2025.",
    "New security system installed in December 2024.",
  ],
};

// Edge function notification types
const EDGE_NOTIFICATION_TYPES = {
  EMERGENCY: 'emergency',
  VISITOR: 'visitor',
  MAINTENANCE: 'maintenance'
};

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState('all');
  const { notifications: edgeNotifications, removeNotification } = useNotifications();

  // Filter notifications based on active tab
  const filteredEdgeNotifications = edgeNotifications.filter(notification => {
    if (activeTab === 'all') return true;
    return notification.type === activeTab;
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">Notifications</h1>

        {/* Edge Function Notifications */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">System Notifications</h2>
          
          {/* Filter Tabs */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded ${
                activeTab === 'all' ? 'bg-blue-600' : 'bg-gray-700'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab(EDGE_NOTIFICATION_TYPES.EMERGENCY)}
              className={`px-4 py-2 rounded ${
                activeTab === EDGE_NOTIFICATION_TYPES.EMERGENCY ? 'bg-red-600' : 'bg-gray-700'
              }`}
            >
              Emergency
            </button>
            <button
              onClick={() => setActiveTab(EDGE_NOTIFICATION_TYPES.VISITOR)}
              className={`px-4 py-2 rounded ${
                activeTab === EDGE_NOTIFICATION_TYPES.VISITOR ? 'bg-green-600' : 'bg-gray-700'
              }`}
            >
              Visitors
            </button>
            <button
              onClick={() => setActiveTab(EDGE_NOTIFICATION_TYPES.MAINTENANCE)}
              className={`px-4 py-2 rounded ${
                activeTab === EDGE_NOTIFICATION_TYPES.MAINTENANCE ? 'bg-yellow-600' : 'bg-gray-700'
              }`}
            >
              Maintenance
            </button>
          </div>

          {/* Edge Notifications List */}
          <div className="space-y-4">
            {filteredEdgeNotifications.length === 0 ? (
              <p className="text-gray-400">No system notifications yet</p>
            ) : (
              filteredEdgeNotifications.map(notification => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg ${
                    notification.type === EDGE_NOTIFICATION_TYPES.EMERGENCY
                      ? 'bg-red-500'
                      : notification.type === EDGE_NOTIFICATION_TYPES.VISITOR
                      ? 'bg-green-500'
                      : 'bg-yellow-500'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">{notification.message}</p>
                      <p className="text-sm opacity-75">
                        {new Date(notification.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-white hover:text-gray-200"
                    >
                      ×
                    </button>
                  </div>
                  {notification.details && (
                    <div className="mt-2 text-sm bg-black bg-opacity-20 p-2 rounded">
                      <pre className="whitespace-pre-wrap">
                        {JSON.stringify(notification.details, null, 2)}
                      </pre>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Regular Notifications */}
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Urgent</h2>
            <ul className="space-y-2">
              {notifications.urgent.map((notification, index) => (
                <li key={index} className="bg-red-500 p-4 rounded-lg">
                  {notification}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Recent</h2>
            <ul className="space-y-2">
              {notifications.recent.map((notification, index) => (
                <li key={index} className="bg-green-500 p-4 rounded-lg">
                  {notification}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Past Week</h2>
            <ul className="space-y-2">
              {notifications.pastWeek.map((notification, index) => (
                <li key={index} className="bg-yellow-500 p-4 rounded-lg">
                  {notification}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Past Month</h2>
            <ul className="space-y-2">
              {notifications.pastMonth.map((notification, index) => (
                <li key={index} className="bg-blue-500 p-4 rounded-lg">
                  {notification}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Past Year</h2>
            <ul className="space-y-2">
              {notifications.pastYear.map((notification, index) => (
                <li key={index} className="bg-purple-500 p-4 rounded-lg">
                  {notification}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}