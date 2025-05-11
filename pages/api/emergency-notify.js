export const config = {
  runtime: 'edge',
  regions: ['syd1'],
};

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { message, severity, location } = await request.json();
    
    // In a real application, you would integrate with a notification service
    // For now, we'll just return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Emergency notification processed',
        details: {
          message,
          severity,
          location,
          timestamp: new Date().toISOString(),
        },
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to process emergency notification' }),
      { status: 500 }
    );
  }
} 