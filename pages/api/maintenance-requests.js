import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const result = await pool.query('SELECT * FROM maintenance_requests ORDER BY request_date DESC');
      const maintenanceRequests = result.rows;

      res.status(200).json({ success: true, maintenanceRequests });
    } catch (error) {
      console.error('Database error fetching maintenance requests:', error);
      res.status(500).json({ success: false, message: 'Database error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 