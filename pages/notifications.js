import Navbar from '../components/Navbar';

const notifications = {
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
  urgent: [
    "Urgent: Water leakage in the basement. Please avoid the area.",
    "Urgent: Power outage scheduled for April 7th, 2025, from 10 AM to 2 PM.",
  ],
};

export default function Notifications() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Notifications</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Urgent</h2>
          <ul className="list-disc list-inside">
            {notifications.urgent.map((notification, index) => (
              <li key={index} className="bg-red-500 p-2 rounded mb-2">{notification}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Recent</h2>
          <ul className="list-disc list-inside">
            {notifications.recent.map((notification, index) => (
              <li key={index} className="bg-green-500 p-2 rounded mb-2">{notification}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Past Week</h2>
          <ul className="list-disc list-inside">
            {notifications.pastWeek.map((notification, index) => (
              <li key={index} className="bg-yellow-500 p-2 rounded mb-2">{notification}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Past Month</h2>
          <ul className="list-disc list-inside">
            {notifications.pastMonth.map((notification, index) => (
              <li key={index} className="bg-blue-500 p-2 rounded mb-2">{notification}</li>
            ))}
          </ul>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Past Year</h2>
          <ul className="list-disc list-inside">
            {notifications.pastYear.map((notification, index) => (
              <li key={index} className="bg-purple-500 p-2 rounded mb-2">{notification}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}