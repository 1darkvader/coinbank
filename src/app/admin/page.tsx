'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Shield, Lock, Eye, EyeOff, ArrowRight, CheckCircle2 } from 'lucide-react'

export default function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  
  const router = useRouter()

  // Simple admin credentials for demo
  const adminAccounts = [
    { username: 'admin', password: 'admin123', name: 'System Administrator' },
    { username: 'coinbank', password: 'coinbank2024', name: 'CoinBank Admin' },
    { username: 'manager', password: 'manager123', name: 'Operations Manager' }
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Simulate authentication delay
    setTimeout(() => {
      const validAdmin = adminAccounts.find(
        account => account.username === credentials.username && account.password === credentials.password
      )

      if (validAdmin) {
        // Store admin session (in a real app, use proper authentication)
        localStorage.setItem('adminAuth', JSON.stringify({
          username: validAdmin.username,
          name: validAdmin.name,
          timestamp: Date.now()
        }))
        
        // Redirect to admin dashboard
        router.push('/admin/dashboard')
      } else {
        setError('Invalid credentials. Please try again.')
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
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6 shadow-xl">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">CoinBank Admin</h1>
          <p className="text-gray-400">System Administration Panel</p>
        </div>

        {/* Admin Login Form */}
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Admin Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={credentials.username}
                  onChange={(e) => setCredentials({...credentials, username: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400"
                  placeholder="Enter admin username"
                  required
                />
                <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
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
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-400 pr-12"
                  placeholder="Enter admin password"
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
              className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Authenticating...
                </>
              ) : (
                <>
                  Access Admin Panel
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
          </form>

          {/* Demo Accounts */}
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Demo Admin Accounts:</h3>
            <div className="space-y-3">
              {adminAccounts.map((account, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{account.name}</p>
                      <p className="text-gray-400 text-sm">{account.username} / {account.password}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => fillCredentials(account.username, account.password)}
                      className="px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded-md transition-colors flex items-center gap-1"
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
          <p className="text-gray-400 text-sm mb-4">Admin Panel Features:</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs">
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">User Management</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">Transaction Monitoring</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">System Analytics</span>
            <span className="bg-gray-800/50 px-3 py-1 rounded-full text-gray-300">Security Controls</span>
          </div>
        </div>
      </div>
    </div>
  )
}
