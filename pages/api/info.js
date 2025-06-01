export default function handler(req, res) {
  res.status(200).json({
    message: 'API Route /api/info is running on Vercel!',
    details: 'This demonstrates a simple serverless function in Next.js.'
  });
} 