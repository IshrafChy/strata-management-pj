export const config = {
  runtime: 'edge',
  regions: ['syd1'],
};

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { visitorName, hostApartment, idNumber, expectedDuration } = await request.json();
    
    // Validate the input
    if (!visitorName || !hostApartment || !idNumber) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // In a real application, you would store this in a database
    // For now, we'll just return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Visitor check-in processed',
        details: {
          visitorName,
          hostApartment,
          idNumber,
          expectedDuration,
          checkInTime: new Date().toISOString(),
          status: 'checked-in'
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
      JSON.stringify({ error: 'Failed to process visitor check-in' }),
      { status: 500 }
    );
  }
} 