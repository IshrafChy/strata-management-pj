import { useEffect } from 'react';
import { useNotifications } from '../context/NotificationContext';

export default function NotificationToast() {
  const { latestNotification, clearLatestNotification } = useNotifications();

  useEffect(() => {
    if (latestNotification) {
      const timer = setTimeout(() => {
        clearLatestNotification();
      }, 4000); // 4 seconds
      return () => clearTimeout(timer);
    }
  }, [latestNotification, clearLatestNotification]);

  if (!latestNotification) return null;

  let bgColor = 'bg-blue-600';
  if (latestNotification.type === 'emergency') bgColor = 'bg-red-600';
  else if (latestNotification.type === 'visitor') bgColor = 'bg-green-600';
  else if (latestNotification.type === 'maintenance') bgColor = 'bg-yellow-500';

  return (
    <div className={`fixed top-6 right-6 z-50 px-6 py-4 rounded shadow-lg text-white ${bgColor} animate-fade-in-up`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-bold text-lg">{latestNotification.message}</div>
          {latestNotification.details && (
            <div className="text-xs mt-1 opacity-80">
              <pre className="whitespace-pre-wrap">{JSON.stringify(latestNotification.details, null, 2)}</pre>
            </div>
          )}
        </div>
        <button onClick={clearLatestNotification} className="ml-4 text-xl font-bold hover:text-gray-200">×</button>
      </div>
    </div>
  );
}

// Add a simple fade-in-up animation
// Add this to your global CSS if not present:
// .animate-fade-in-up { animation: fadeInUp 0.4s; }
// @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } } 