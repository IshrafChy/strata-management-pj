import { useEffect } from 'react';

export default function Notification({ message, type, onClose }) {
  useEffect(() => {
    // Auto close notification after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  }[type] || 'bg-blue-500';

  return (
    <div className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg text-white ${bgColor} z-50`}>
      <div className="flex items-center justify-between">
        <p>{message}</p>
        <button 
          onClick={onClose}
          className="ml-4 text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
} 