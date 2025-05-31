import { Pool } from 'pg';

// Database configuration using environment variables
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { // Neon requires SSL
    rejectUnauthorized: false // Adjust based on Neon's SSL cert if needed
  }
});

// Test the connection (optional, but good for debugging)
pool.on('connect', () => {
  console.log('Database connected successfully!');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export default pool; 