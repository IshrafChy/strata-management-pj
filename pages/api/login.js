import pool from '../../lib/db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;

    try {
      // WARNING: Storing plain passwords is insecure. Use password_hash() and password_verify() in a real app.
      const result = await pool.query('SELECT id, password FROM users WHERE username = $1 AND password = $2', [username, password]);

      if (result.rows.length > 0) {
        const user = result.rows[0];
        // In a real application, you would set a secure HTTP-only cookie or a session token here
        // For this demo, we'll just return success status
        res.status(200).json({ success: true, userId: user.id });
      } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
      }
    } catch (error) {
      console.error('Database error during login:', error);
      res.status(500).json({ success: false, message: 'Database error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 