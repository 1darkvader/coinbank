import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'CoinBank API is running successfully',
    environment: process.env.NODE_ENV || 'development'
  })
}