"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { 
  TrendingUp, 
  TrendingDown, 
  Wallet, 
  CreditCard, 
  ArrowUpRight, 
  ArrowDownRight,
  DollarSign,
  Activity,
  PieChart,
  BarChart3,
  Plus,
  Send,
  Repeat
} from 'lucide-react'
import Link from 'next/link'

interface Portfolio {
  id: string
  name: string
  totalValue: number
  assets: Array<{
    symbol: string
    name: string
    amount: number
    value: number
    allocation: number
  }>
}

interface UserProfile {
  name: string
  email: string
  role: string
  _count: {
    portfolios: number
    transactions: number
    cards: number
  }
}

export default function AccountDashboardPage() {
  const { data: session, status } = useSession()
  const [portfolios, setPortfolios] = useState<Portfolio[]>([])
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null)
  const [loading, setLoading] = useState(true)
  const [totalBalance, setTotalBalance] = useState(0)

  useEffect(() => {
    if (session) {
      fetchUserData()
    } else {
      setLoading(false)
    }
  }, [session])

  const fetchUserData = async () => {
    try {
      // Fetch user profile
      const profileResponse = await fetch('/api/user/profile')
      if (profileResponse.ok) {
        const profileData = await profileResponse.json()
        setUserProfile(profileData.data)
      }

      // Fetch portfolio data
      const portfolioResponse = await fetch('/api/portfolio')
      if (portfolioResponse.ok) {
        const portfolioData = await portfolioResponse.json()
        setPortfolios(portfolioData.data.portfolios)
        setTotalBalance(portfolioData.data.totalValue)
      }
    } catch (error) {
      console.error('Error fetching user data:', error)
    } finally {
      setLoading(false)
    }
  }

  const mockTransactions = [
    { id: 1, type: 'buy', symbol: 'BTC', amount: 0.025, price: 45230.50, date: '2024-01-15', status: 'completed' },
    { id: 2, type: 'sell', symbol: 'ETH', amount: 1.5, price: 2890.75, date: '2024-01-14', status: 'completed' },
    { id: 3, type: 'buy', symbol: 'SOL', amount: 10, price: 98.45, date: '2024-01-13', status: 'pending' },
  ]

  if (status === 'loading' || loading) {
    return (
      <main className="professional-bg text-white min-h-screen">
        <Navigation />
        <CryptoTicker />
        <div className="pt-36 flex items-center justify-center min-h-[60vh]">
          <div className="banking-card rounded-2xl p-8 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-gray-400">Loading dashboard...</p>
          </div>
        </div>
      </main>
    )
  }

  if (!session) {
    return (
      <main className="professional-bg text-white min-h-screen">
        <Navigation />
        <CryptoTicker />
        <div className="pt-36 pb-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="banking-card rounded-2xl p-12">
              <Wallet className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-white mb-4">
                Access Your Account Dashboard
              </h1>
              <p className="text-gray-400 mb-8">
                Sign in to view your portfolio, transactions, and account details.
              </p>
              <Link href="/auth/signin">
                <button className="professional-button text-lg px-8 py-4 rounded-xl">
                  Sign In to Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      <CryptoTicker />
      
      <div className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">
              Welcome back, {userProfile?.name || session.user?.name}
            </h1>
            <p className="text-gray-400">
              Here's your crypto banking overview for today
            </p>
          </div>

          {/* Balance Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="banking-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="w-8 h-8 text-cyan-400" />
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white">
                ${totalBalance.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Total Balance</div>
              <div className="text-xs text-emerald-400 mt-1">+12.5% this month</div>
            </div>

            <div className="banking-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <PieChart className="w-8 h-8 text-blue-400" />
                <span className="text-xs text-gray-400">{portfolios.length} portfolios</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {userProfile?._count.portfolios || 0}
              </div>
              <div className="text-sm text-gray-400">Portfolios</div>
              <div className="text-xs text-blue-400 mt-1">Active investing</div>
            </div>

            <div className="banking-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Activity className="w-8 h-8 text-purple-400" />
                <ArrowUpRight className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="text-2xl font-bold text-white">
                {userProfile?._count.transactions || 0}
              </div>
              <div className="text-sm text-gray-400">Transactions</div>
              <div className="text-xs text-emerald-400 mt-1">3 pending</div>
            </div>

            <div className="banking-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <CreditCard className="w-8 h-8 text-orange-400" />
                <span className="text-xs text-gray-400">Active</span>
              </div>
              <div className="text-2xl font-bold text-white">
                {userProfile?._count.cards || 0}
              </div>
              <div className="text-sm text-gray-400">Crypto Cards</div>
              <div className="text-xs text-orange-400 mt-1">$2,450 available</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Portfolio Overview */}
            <div className="lg:col-span-2">
              <div className="banking-card rounded-2xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-white">Portfolio Overview</h2>
                  <Link href="/wallet">
                    <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center transition-colors">
                      View All <ArrowUpRight className="w-4 h-4 ml-1" />
                    </button>
                  </Link>
                </div>

                {portfolios.length > 0 ? (
                  <div className="space-y-4">
                    {portfolios.slice(0, 3).map((portfolio) => (
                      <div key={portfolio.id} className="border border-gray-700 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-medium text-white">{portfolio.name}</span>
                          <span className="text-white font-bold">
                            ${portfolio.totalValue.toLocaleString()}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {portfolio.assets.slice(0, 3).map((asset) => (
                            <div key={asset.symbol} className="text-center">
                              <div className="text-sm font-medium text-white">{asset.symbol}</div>
                              <div className="text-xs text-gray-400">{asset.amount}</div>
                              <div className="text-xs text-cyan-400">{asset.allocation.toFixed(1)}%</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <PieChart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400 mb-4">No portfolios yet</p>
                    <Link href="/wallet">
                      <button className="professional-button">
                        <Plus className="w-4 h-4 mr-2" />
                        Create Portfolio
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <div className="banking-card rounded-2xl p-6 mb-6">
                <h2 className="text-xl font-bold text-white mb-6">Quick Actions</h2>
                <div className="space-y-3">
                  <Link href="/banking/transact" className="block">
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 transition-colors">
                      <div className="flex items-center">
                        <Send className="w-5 h-5 text-cyan-400 mr-3" />
                        <span className="text-white">Send Crypto</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </Link>

                  <Link href="/trading" className="block">
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors">
                      <div className="flex items-center">
                        <Repeat className="w-5 h-5 text-blue-400 mr-3" />
                        <span className="text-white">Trade</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </Link>

                  <Link href="/banking/earn" className="block">
                    <button className="w-full flex items-center justify-between p4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 transition-colors">
                      <div className="flex items-center">
                        <TrendingUp className="w-5 h-5 text-emerald-400 mr-3" />
                        <span className="text-white">Earn Yield</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </Link>

                  <Link href="/card" className="block">
                    <button className="w-full flex items-center justify-between p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors">
                      <div className="flex items-center">
                        <CreditCard className="w-5 h-5 text-purple-400 mr-3" />
                        <span className="text-white">Crypto Card</span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-gray-400" />
                    </button>
                  </Link>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="banking-card rounded-2xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
                <div className="space-y-3">
                  {mockTransactions.map((tx) => (
                    <div key={tx.id} className="flex items-center justify-between py-2">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                          tx.type === 'buy' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                        }`}>
                          {tx.type === 'buy' ? 
                            <ArrowUpRight className="w-4 h-4 text-emerald-400" /> :
                            <ArrowDownRight className="w-4 h-4 text-red-400" />
                          }
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">
                            {tx.type.toUpperCase()} {tx.symbol}
                          </div>
                          <div className="text-xs text-gray-400">
                            {tx.amount} {tx.symbol}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          tx.status === 'completed' ? 'text-emerald-400' : 'text-yellow-400'
                        }`}>
                          ${(tx.amount * tx.price).toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-400">{tx.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}