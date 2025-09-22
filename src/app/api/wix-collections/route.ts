import { NextResponse } from 'next/server';

export async function GET() {
  const WIX_API_TOKEN = process.env.WIX_API_TOKEN;
  const WIX_ACCOUNT_ID = process.env.WIX_ACCOUNT_ID;
  const WIX_API_KEY = process.env.WIX_API_KEY;
  const WIX_CLIENT_ID = process.env.WIX_CLIENT_ID; // This might not be directly used in API calls but good to have

  if (!WIX_API_TOKEN || !WIX_ACCOUNT_ID || !WIX_API_KEY) {
    return NextResponse.json({ error: 'Missing Wix API credentials in environment variables' }, { status: 500 });
  }

  const url = `https://www.wixapis.com/collections/v1/collections`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': WIX_API_TOKEN, // Using the token for authorization
        'wix-site-id': WIX_ACCOUNT_ID, // Often required for Wix APIs
        'app-id': WIX_API_KEY // Some Wix APIs might use this as an app ID
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Wix API Error:', response.status, errorData);
      return NextResponse.json({ error: 'Failed to fetch collections from Wix', details: errorData }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching Wix collections:', error);
    return NextResponse.json({ error: 'Internal server error while fetching Wix collections' }, { status: 500 });
  }
}
