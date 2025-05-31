import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
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