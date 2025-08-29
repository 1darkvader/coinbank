"use client"

import { useState } from 'react'
import { signIn, getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/ui/navigation'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Shield,
  Building2,
  Zap,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

export default function SignInPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()

  const testAccounts = [
    { email: 'alex@coinbank.com', password: 'password123', name: 'Alex Johnson' },
    { email: 'demo@coinbank.com', password: 'demo123', name: 'Demo User' }, 
    { email: 'test@coinbank.com', password: 'test123', name: 'Test User' }
  ]

  const fillTestAccount = (email: string, password: string) => {
    setFormData({ username: email, password: password })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const result = await signIn('credentials', {
        email: formData.username, // Using email field for username
        password: formData.password,
        redirect: false
      })

      if (result?.error) {
        setError('Invalid username or password. Please try again.')
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

  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="max-w-md mx-auto px-6">
          <div className="banking-card rounded-2xl p-8">
            {/* Professional Banking Header */}
            <div className="text-center mb-8">
              <div className="professional-logo-icon mx-auto mb-6">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-luxury mb-2">Welcome to CoinBank</h1>
              <p className="text-muted-foreground">Sign in to your account to access your dashboard</p>
            </div>
            
            {/* Test Accounts Helper */}
            <div className="glass-effect rounded-xl p-4 mb-6">
              <h3 className="font-semibold text-foreground mb-3">📋 Test Accounts Available:</h3>
              <div className="space-y-2 text-sm">
                {testAccounts.map((account, index) => (
                  <div 
                    key={index}
                    onClick={() => fillTestAccount(account.email, account.password)}
                    className="flex justify-between items-center p-2 bg-secondary/20 rounded cursor-pointer hover:bg-secondary/40 transition-colors"
                  >
                    <span className="text-blue-400">{account.email}</span>
                    <span className="text-muted-foreground">{account.password}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-2">Click any account above to auto-fill the form</p>
            </div>

            {/* Professional Banking Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center text-red-400">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData({...formData, username: e.target.value})}
                    className="professional-input w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Enter your username"
                    required
                    autoComplete="username"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="professional-input w-full pl-12 pr-12 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-transparent border-gray-600 rounded focus:ring-cyan-500 focus:ring-2 text-cyan-500"
                  />
                  <span className="ml-3 text-sm text-gray-400">Keep me signed in</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="professional-button w-full py-4 rounded-xl text-white text-lg font-semibold"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full mr-3"></div>
                    Authenticating...
                  </div>
                ) : (
                  <>
                    Access Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400">
                New to CoinBank?{' '}
                <Link href="/auth/signup" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  Create Account
                </Link>
              </p>
            </div>

            {/* Professional Security Features */}
            <div className="mt-8 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-sm text-cyan-300">
                  <div className="font-semibold mb-1">Bank-Grade Security</div>
                  <div className="text-cyan-400/80">
                    Your account is protected with enterprise-level encryption, multi-factor authentication, and continuous security monitoring.
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-5 h-5 text-green-400 mb-1" />
                <span className="text-xs text-gray-400">256-bit SSL</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-5 h-5 text-cyan-400 mb-1" />
                <span className="text-xs text-gray-400">FDIC Insured</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-5 h-5 text-yellow-400 mb-1" />
                <span className="text-xs text-gray-400">Real-time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}