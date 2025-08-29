"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/ui/navigation'
import { Button } from '@/components/ui/button'
import { 
  User, 
  Mail,
  Lock, 
  Eye, 
  EyeOff, 
  ArrowRight,
  Shield,
  Building2,
  CheckCircle2,
  AlertCircle,
  Crown
} from 'lucide-react'
import Link from 'next/link'

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  
  const router = useRouter()

  const validatePassword = (password: string) => {
    const requirements = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    }
    return requirements
  }

  const passwordRequirements = validatePassword(formData.password)
  const isPasswordValid = Object.values(passwordRequirements).every(Boolean)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (!isPasswordValid) {
      setError('Password does not meet security requirements')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          password: formData.password,
          username: formData.username
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccess(true)
        setTimeout(() => {
          router.push('/auth/signin?message=Account created successfully')
        }, 2000)
      } else {
        setError(data.message || 'Registration failed')
      }
    } catch (error) {
      setError('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <main className="professional-bg text-white min-h-screen">
        <Navigation />
        <div className="pt-32 pb-16">
          <div className="max-w-md mx-auto px-6">
            <div className="banking-card rounded-2xl p-8 text-center">
              <div className="professional-logo-icon mx-auto mb-6">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white mb-4">Account Created Successfully!</h1>
              <p className="text-gray-400 mb-6">
                Welcome to CoinBank. Redirecting you to sign in...
              </p>
              <div className="animate-spin w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-lg mx-auto px-6">
          <div className="banking-card rounded-2xl p-8">
            {/* Professional Banking Header */}
            <div className="text-center mb-8">
              <div className="professional-logo-icon mx-auto mb-6">
                <Crown className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Join CoinBank
              </h1>
              <p className="text-gray-400">
                Create your professional crypto banking account
              </p>
            </div>

            {/* Professional Banking Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center text-red-400">
                  <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="professional-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="professional-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Smith"
                    required
                  />
                </div>
              </div>

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
                    placeholder="Choose a unique username"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="professional-input w-full pl-12 pr-4 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="your.email@example.com"
                    required
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
                    placeholder="Create a strong password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                
                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-3 p-3 bg-gray-800/50 rounded-lg">
                    <div className="text-xs text-gray-400 mb-2">Password Requirements:</div>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className={`flex items-center ${passwordRequirements.length ? 'text-green-400' : 'text-gray-500'}`}>
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        8+ characters
                      </div>
                      <div className={`flex items-center ${passwordRequirements.uppercase ? 'text-green-400' : 'text-gray-500'}`}>
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Uppercase
                      </div>
                      <div className={`flex items-center ${passwordRequirements.lowercase ? 'text-green-400' : 'text-gray-500'}`}>
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Lowercase
                      </div>
                      <div className={`flex items-center ${passwordRequirements.number ? 'text-green-400' : 'text-gray-500'}`}>
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Number
                      </div>
                      <div className={`flex items-center ${passwordRequirements.special ? 'text-green-400' : 'text-gray-500'}`}>
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Special char
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="professional-input w-full pl-12 pr-12 py-4 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-start pt-2">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 mt-1 bg-transparent border-gray-600 rounded focus:ring-cyan-500 focus:ring-2 text-cyan-500"
                />
                <div className="ml-3 text-sm text-gray-400">
                  I agree to the{' '}
                  <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">Terms of Service</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>
                </div>
              </div>

              <Button
                type="submit"
                disabled={loading || !isPasswordValid}
                className="professional-button w-full py-4 rounded-xl text-white text-lg font-semibold disabled:opacity-50"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin w-5 h-5 border-2 border-white/20 border-t-white rounded-full mr-3"></div>
                    Creating Account...
                  </div>
                ) : (
                  <>
                    Create Account
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/auth/signin" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                  Sign In
                </Link>
              </p>
            </div>

            {/* Professional Security Notice */}
            <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-cyan-400 mt-1 mr-3 flex-shrink-0" />
                <div className="text-sm text-cyan-300">
                  <div className="font-semibold mb-1">Your Security is Our Priority</div>
                  <div className="text-cyan-400/80">
                    All accounts are protected with bank-grade security including encryption, fraud monitoring, and FDIC insurance coverage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}