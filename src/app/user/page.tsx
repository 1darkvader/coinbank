'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Wallet, Lock, Eye, EyeOff, ArrowRight, CheckCircle2, User, DollarSign } from 'lucide-react'

export default function UserLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()

  // Demo user accounts with different profiles
  const userAccounts = [
    { 
      username: 'alex@coinbank.com', 
      password: 'password123', 
      name: 'Alex Johnson',
      role: 'Premium User',
      balance: 53200,
      portfolioValue: 87450
    },
    { 
      username: 'demo@coinbank.com', 
      password: 'demo123', 
      name: 'Demo User',
      role: 'Standard User',
      balance: 12500,
      portfolioValue: 25300
    },
    { 
      username: 'test@coinbank.com', 
      password: 'test123', 
      name: 'Test User',
      role: 'VIP User',
      balance: 95800,
      portfolioValue: 156200
    },
    { 
      username: 'sarah@coinbank.com', 
      password: 'sarah123', 
      name: 'Sarah Martinez',
      role: 'Business User',
      balance: 78900,
      portfolioValue: 134500
    },
    { 
      username: 'mike@coinbank.com', 
      password: 'mike123', 
      name: 'Mike Chen',
      role: 'Premium User',
      balance: 42300,
      portfolioValue: 68750
    }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate authentication delay
    setTimeout(() => {
      const validUser = userAccounts.find(
        account => account.username === credentials.username && account.password === credentials.password
      )

      if (validUser) {
        // Store user session
        localStorage.setItem('userAuth', JSON.stringify({
          username: validUser.username,
          name: validUser.name,
          role: validUser.role,
          balance: validUser.balance,
          portfolioValue: validUser.portfolioValue,
          timestamp: Date.now()
        }))
        
        // Redirect to user dashboard
        window.location.href = '/user/dashboard'
      } else {
        setError('Invalid credentials. Please check your email and password.')
      }
      
      setLoading(false)
    }, 1000)
  }

  const fillCredentials = (username: string, password: string) => {
    setCredentials({ username, password })
  }

  return (
    <div className="min-h-screen professional-bg text-white flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-2xl mb-6 shadow-xl">
            <Wallet className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Welcome to CoinBank</h1>
          <p className="text-gray-400">Access Your Digital Banking Dashboard</p>
        </div>

        {/* User Login Form */}
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
                <User className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white placeholder-gray-400 pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Signing In...
                </>
              ) : (
                <>
                  Access Your Account
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Demo User Accounts:</h3>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {userAccounts.map((account, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{account.name}</p>
                      <p className="text-gray-400 text-sm">{account.username} / {account.password}</p>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-emerald-400 flex items-center gap-1">
                          <DollarSign className="h-3 w-3" />
                          ${account.balance.toLocaleString()}
                        </span>
                        <span className="text-xs text-cyan-400">{account.role}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => fillCredentials(account.username, account.password)}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-md transition-colors flex items-center gap-1"
                    >
                      <CheckCircle2 className="h-3 w-3" />
                      Use
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">Your Digital Banking Features:</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">Portfolio Management</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">Crypto Trading</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">Multi-Currency Accounts</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">Real-Time Analytics</span>
          </div>
        </div>
      </div>
    </div>
  )
}