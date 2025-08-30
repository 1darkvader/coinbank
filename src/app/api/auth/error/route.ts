import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const error = searchParams.get('error')
  
  // Log the error for debugging
  console.error('NextAuth Error:', error)
  
  // Always redirect to signin page with error parameter
  const signinUrl = new URL('/auth/signin', request.url)
  if (error) {
    signinUrl.searchParams.set('error', error)
  }
  
  return NextResponse.redirect(signinUrl)
}