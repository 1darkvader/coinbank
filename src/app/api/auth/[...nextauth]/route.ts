import NextAuth from 'next-auth'
import type { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
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
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        // session.user.id = token.id // Disabled for build
      }
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
