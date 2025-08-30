import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Simple health check for NextAuth
    return NextResponse.json({
      status: 'healthy',
      nextauth: 'operational',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV,
      url: request.url
    })
  } catch (error) {
    return NextResponse.json({
      status: 'error',
      nextauth: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}