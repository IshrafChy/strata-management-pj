export default function handler(req, res) {
  const { type } = req.query;

  switch (type) {
    case 'temporary':
      // 307 Temporary Redirect - preserves the HTTP method
      res.writeHead(307, { Location: '/http-demo?redirected=temporary' });
      res.end();
      break;

    case 'permanent':
      // 301 Permanent Redirect - changes GET requests to GET
      res.writeHead(301, { Location: '/http-demo?redirected=permanent' });
      res.end();
      break;

    case 'found':
      // 302 Found - changes POST requests to GET
      res.writeHead(302, { Location: '/http-demo?redirected=found' });
      res.end();
      break;

    case 'see-other':
      // 303 See Other - changes POST requests to GET
      res.writeHead(303, { Location: '/http-demo?redirected=see-other' });
      res.end();
      break;

    default:
      // Return a list of available redirect types
      res.status(200).json({
        message: 'Available redirect types:',
        types: [
          { name: 'temporary', code: 307, description: 'Temporary Redirect (preserves method)' },
          { name: 'permanent', code: 301, description: 'Permanent Redirect (changes to GET)' },
          { name: 'found', code: 302, description: 'Found (changes to GET)' },
          { name: 'see-other', code: 303, description: 'See Other (changes to GET)' }
        ]
      });
  }
} 