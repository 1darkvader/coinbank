import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        try {
          // Predefined test accounts for demo purposes
          const testAccounts = [
            {
              id: '1',
              email: 'alex@coinbank.com',
              password: 'password123',
              name: 'Alex Johnson',
              role: 'Premium User'
            },
            {
              id: '2', 
              email: 'demo@coinbank.com',
              password: 'demo123',
              name: 'Demo User',
              role: 'Standard User'
            },
            {
              id: '3',
              email: 'test@coinbank.com', 
              password: 'test123',
              name: 'Test User',
              role: 'VIP User'
            }
          ]

          // Find matching test account
          const testUser = testAccounts.find(
            account => account.email === credentials.email && account.password === credentials.password
          )

          if (testUser) {
            return {
              id: testUser.id,
              email: testUser.email,
              name: testUser.name,
              role: testUser.role
            }
          }

          return null
        } catch (error) {
          console.error('Auth error:', error)
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as { role: string }).role
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!
        ;(session.user as { role: string }).role = token.role as string
      }
      return session
    },
    // Production redirect callback
    async redirect({ url, baseUrl }) {
      // Ensure redirects work properly in production
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (new URL(url).origin === baseUrl) return url
      return baseUrl
    }
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/signin' // Redirect errors back to signin page instead of error page
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  trustHost: true
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
