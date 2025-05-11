export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, redirect } = req.body;
    // If redirect is set, demonstrate a redirect
    if (redirect) {
      res.writeHead(307, { Location: '/http-demo?redirected=1' });
      res.end();
      return;
    }
    // Otherwise, return the submitted data
    res.status(200).json({ status: 200, message: 'POST received', data: { name, email } });
  } else {
    // Only allow POST
    res.status(405).json({ status: 405, error: 'Method Not Allowed' });
  }
} 