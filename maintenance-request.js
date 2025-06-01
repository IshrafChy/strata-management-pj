export const config = {
  runtime: 'edge',
  regions: ['syd1'],
};

export default async function handler(request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { 
      apartmentNumber, 
      issueType, 
      description, 
      priority,
      contactNumber 
    } = await request.json();
    
    // Validate the input
    if (!apartmentNumber || !issueType || !description || !contactNumber) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // In a real application, you would:
    // 1. Store this in a database
    // 2. Send notifications to maintenance staff
    // 3. Update the apartment's maintenance history
    // 4. Send confirmation to the resident

    // For now, we'll just return a success response
    return new Response(
      JSON.stringify({
        success: true,
        message: 'Maintenance request processed',
        details: {
          apartmentNumber,
          issueType,
          description,
          priority: priority || 'medium',
          contactNumber,
          requestTime: new Date().toISOString(),
          status: 'pending',
          ticketNumber: `MNT-${Date.now()}`
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
      JSON.stringify({ error: 'Failed to process maintenance request' }),
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
} 