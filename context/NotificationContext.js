import { createContext, useContext, useState, useEffect } from 'react';

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]); // Always start empty for SSR
  const [latestNotification, setLatestNotification] = useState(null);
  const [loaded, setLoaded] = useState(false); // Track if client-side load is done

  // On mount, load notifications from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('notifications');
      setNotifications(stored ? JSON.parse(stored) : []);
      setLoaded(true);
    }
  }, []);

  // Save notifications to localStorage whenever they change (after load)
  useEffect(() => {
    if (loaded && typeof window !== 'undefined') {
      localStorage.setItem('notifications', JSON.stringify(notifications));
    }
  }, [notifications, loaded]);

  const addNotification = (type, message, details) => {
    const newNotification = {
      id: Date.now(),
      type,
      message,
      details,
      timestamp: new Date().toISOString()
    };
    setNotifications(prev => [newNotification, ...prev]);
    setLatestNotification(newNotification); // trigger toast
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  // Clear the latest notification after showing toast
  const clearLatestNotification = () => setLatestNotification(null);

  // Only render children after notifications are loaded on client
  if (!loaded) return null;

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, removeNotification, latestNotification, clearLatestNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications() {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
} 