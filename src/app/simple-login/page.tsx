"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'

export default function SimpleLoginPage() {
  const [selectedUser, setSelectedUser] = useState('')
  const router = useRouter()

  const testAccounts = [
    { email: 'alex@coinbank.com', password: 'password123', name: 'Alex Johnson', role: 'Premium User' },
    { email: 'demo@coinbank.com', password: 'demo123', name: 'Demo User', role: 'Standard User' }, 
    { email: 'test@coinbank.com', password: 'test123', name: 'Test User', role: 'VIP User' }
  ]

  const handleLogin = (account: typeof testAccounts[0]) => {
    // Store user info in sessionStorage for demo purposes
    sessionStorage.setItem('coinbank_user', JSON.stringify({
      id: Math.random().toString(),
      email: account.email,
      name: account.name,
      role: account.role
    }))
    
    // Redirect to dashboard
    router.push('/test-dashboard')
  }

  return (
    <main className="min-h-screen professional-bg text-foreground">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-md mx-auto px-6">
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-luxury mb-2">Simple Login</h1>
              <p className="text-muted-foreground">Quick access to CoinBank Dashboard</p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground mb-4">Choose Your Test Account:</h3>
              
              {testAccounts.map((account, index) => (
                <button
                  key={index}
                  onClick={() => handleLogin(account)}
                  className="w-full p-4 glass-effect rounded-xl hover:bg-blue-500/10 transition-all text-left group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground group-hover:text-blue-400">
                        {account.name}
                      </div>
                      <div className="text-sm text-blue-400">{account.email}</div>
                      <div className="text-xs text-muted-foreground">{account.role}</div>
                    </div>
                    <div className="text-2xl">👤</div>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl">
              <p className="text-emerald-400 text-sm text-center">
                ✅ Bypasses NextAuth - Direct dashboard access
              </p>
            </div>
            
            <div className="mt-6 text-center">
              <a 
                href="/auth/signin" 
                className="text-blue-400 text-sm hover:underline"
              >
                Try NextAuth Login Instead
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}