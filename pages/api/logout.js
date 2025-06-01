import Cookies from 'cookies';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const cookies = new Cookies(req, res);

    // Clear the auth_token cookie by setting it to an empty value and giving it an expiry date in the past
    cookies.set('auth_token', '', { maxAge: 0, path: '/' });

    res.status(200).json({ success: true });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
} 