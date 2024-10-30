import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json()

    const response = await axios.post(
      process.env.NEXT_PUBLIC_API_URL!,
      { query, variables: {} },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${process.env.API_AUTH_TOKEN}`,
        },
      }
    )

    return NextResponse.json(response.data, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching data:', error.message)
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: error.response?.status || 500 }
    )
  }
}
