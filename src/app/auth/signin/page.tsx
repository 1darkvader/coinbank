"use client"

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { Button } from '@/components/ui/button'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Github, 
  Chrome,
  ArrowRight,
  Shield,
  Zap
} from 'lucide-react'
import Link from 'next/link'

export default function SignInPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false
      })

      if (result?.error) {
        setError('Invalid credentials. Please try again.')
      } else {
        // Check if sign in was successful
        const session = await getSession()
        if (session) {
          router.push('/dashboard')
        }
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleOAuthSignIn = async (provider: string) => {
    try {
      await signIn(provider, { callbackUrl: '/dashboard' })
    } catch (error) {
      setError('OAuth sign in failed. Please try again.')
    }
  }

  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-md mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-effect rounded-2xl p-8"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-foreground mb-2">
                Welcome Back
              </h1>
              <p className="text-muted-foreground">
                Sign in to your CoinBank account
              </p>
            </div>

            {/* OAuth Buttons */}
            <div className="space-y-3 mb-6">
              <button
                onClick={() => handleOAuthSignIn('google')}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-border/20"
              >
                <Chrome className="w-5 h-5 mr-3" />
                <span className="text-foreground">Continue with Google</span>
              </button>
              
              <button
                onClick={() => handleOAuthSignIn('github')}
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-border/20"
              >
                <Github className="w-5 h-5 mr-3" />
                <span className="text-foreground">Continue with GitHub</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 text-muted-foreground bg-slate-900">or</span>
              </div>
            </div>

            {/* Sign In Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 text-red-400 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 bg-white/5 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-foreground placeholder-muted-foreground"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="w-full pl-10 pr-12 py-3 bg-white/5 border border-border/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-foreground placeholder-muted-foreground"
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-cyan-500 bg-transparent border-border/20 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-cyan-400 hover:text-cyan-300">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full btn-primary text-lg py-3"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full mr-2"></div>
                    Signing In...
                  </div>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{' '}
                <Link href="/auth/signup" className="text-cyan-400 hover:text-cyan-300 font-medium">
                  Sign up
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-3 bg-cyan-500/10 border border-cyan-500/20 rounded-xl"
            >
              <div className="flex items-start">
                <Zap className="w-5 h-5 text-cyan-400 mt-0.5 mr-3 flex-shrink-0" />
                <div className="text-sm text-cyan-300">
                  <strong>Secure Authentication:</strong> Your login is protected with enterprise-grade security including 2FA and encryption.
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}