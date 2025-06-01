import pool from '../../lib/db';
import Cookies from 'cookies';

export default async function handler(req, res) {
  const cookies = new Cookies(req, res);
  const authToken = cookies.get('auth_token');

  // Check if the auth_token cookie is present
  if (!authToken) {
    res.status(401).json({ message: 'Unauthorized' });
    return;
  }

  if (req.method === 'GET') {
    try {
      // In a real app, you might validate the authToken against the database
      // For this demo, presence of the cookie is enough for access
      const result = await pool.query('SELECT COUNT(*) AS open_requests FROM maintenance_requests WHERE status = $1', ['Open']);
      const openRequestsCount = result.rows[0].open_requests;

      res.status(200).json({ success: true, openRequestsCount });
    } catch (error) {
      console.error('Database error fetching dashboard data:', error);
      res.status(500).json({ success: false, message: 'Database error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 