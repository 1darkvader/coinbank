'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Wallet,
  TrendingUp,
  CreditCard,
  Users,
  Gift,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Lock,
  Plane,
  Settings,
  RefreshCw,
  Eye,
  EyeOff,
  MessageCircle,
  PieChart,
  DollarSign,
  Euro,
  Bitcoin,
  Smartphone,
  Coffee,
  ShoppingBag,
  Target,
  Award,
  Zap,
  Shield,
  Clock,
  Globe,
  LogOut,
  Bell,
  Search
} from 'lucide-react'

interface UserSession {
  username: string
  name: string
  role: string
  balance: number
  portfolioValue: number
  timestamp: number
}

export default function UserDashboard() {
  const [userSession, setUserSession] = useState<UserSession | null>(null)
  const [balanceVisible, setBalanceVisible] = useState(true)

  useEffect(() => {
    // Check for user session
    const session = localStorage.getItem('userAuth')
    if (session) {
      const userData = JSON.parse(session)
      setUserSession(userData)
    } else {
      // Redirect to login if no session
      window.location.href = '/user'
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('userAuth')
    window.location.href = '/user'
  }

  if (!userSession) {
    return (
      <div className="min-h-screen professional-bg text-white flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"></div>
      </div>
    )
  }

  // Sample data based on user
  const accounts = [
    { 
      name: 'USD Account', 
      balance: userSession.balance * 0.6, 
      change: '+$850', 
      currency: 'USD',
      icon: <DollarSign className="h-5 w-5" />
    },
    { 
      name: 'EUR Account', 
      balance: userSession.balance * 0.25, 
      change: '+€420', 
      currency: 'EUR',
      icon: <Euro className="h-5 w-5" />
    },
    { 
      name: 'Crypto Portfolio', 
      balance: userSession.balance * 0.15, 
      change: '+$1,240', 
      currency: 'CRYPTO',
      icon: <Bitcoin className="h-5 w-5" />
    }
  ]

  const transactions = [
    { id: 1, type: 'Received', description: 'Salary Deposit', amount: '+$4,500', time: '2 hours ago', category: 'income' },
    { id: 2, type: 'Sent', description: 'Online Purchase - Amazon', amount: '-$89.99', time: '5 hours ago', category: 'shopping' },
    { id: 3, type: 'Crypto Buy', description: 'Bitcoin Purchase', amount: '-$1,200', time: '1 day ago', category: 'crypto' },
    { id: 4, type: 'Transfer', description: 'To Savings Account', amount: '-$500', time: '2 days ago', category: 'transfer' },
    { id: 5, type: 'Received', description: 'Freelance Payment', amount: '+$750', time: '3 days ago', category: 'income' }
  ]

  const cryptoHoldings = [
    { symbol: 'BTC', name: 'Bitcoin', amount: '0.45', value: '$28,350', change: '+5.2%', trend: 'up' },
    { symbol: 'ETH', name: 'Ethereum', amount: '2.8', value: '$6,720', change: '+2.8%', trend: 'up' },
    { symbol: 'SOL', name: 'Solana', amount: '45', value: '$2,250', change: '-1.2%', trend: 'down' }
  ]

  return (
    <div className="min-h-screen professional-bg text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <Wallet className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">CoinBank</h1>
                  <p className="text-sm text-gray-400">Digital Banking</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 w-64"
                />
              </div>
              
              <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors relative">
                <Bell className="h-5 w-5 text-gray-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </button>
              
              <div className="flex items-center gap-3 pl-4 border-l border-gray-700">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {userSession.name.charAt(0)}
                  </span>
                </div>
                <div className="text-sm">
                  <p className="text-white font-medium">{userSession.name}</p>
                  <p className="text-gray-400">{userSession.role}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  title="Logout"
                >
                  <LogOut className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-white mb-2">Welcome back, {userSession.name}</h2>
          <p className="text-gray-400">Here's your financial overview for today</p>
        </motion.div>

        {/* Balance Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-emerald-600 to-cyan-700 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-white/90 text-lg mb-2">Total Balance</h3>
              <div className="flex items-center gap-3">
                {balanceVisible ? (
                  <span className="text-4xl font-bold text-white">${userSession.balance.toLocaleString()}</span>
                ) : (
                  <span className="text-4xl font-bold text-white">••••••</span>
                )}
                <button
                  onClick={() => setBalanceVisible(!balanceVisible)}
                  className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  {balanceVisible ? <EyeOff className="h-4 w-4 text-white" /> : <Eye className="h-4 w-4 text-white" />}
                </button>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white/90 text-sm mb-1">Portfolio Value</p>
              <p className="text-2xl font-bold text-white">${userSession.portfolioValue.toLocaleString()}</p>
              <p className="text-emerald-200 text-sm flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                +12.5% this month
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {accounts.map((account, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-white/80">
                    {account.icon}
                  </div>
                  <span className="text-white font-medium">{account.name}</span>
                </div>
                <p className="text-2xl font-bold text-white mb-1">
                  {account.currency === 'USD' ? '$' : account.currency === 'EUR' ? '€' : ''}
                  {account.balance.toLocaleString()}
                </p>
                <p className="text-emerald-200 text-sm">{account.change}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            {/* Recent Transactions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
                  <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">
                    View All
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-full ${
                        transaction.category === 'income' ? 'bg-emerald-500/20' :
                        transaction.category === 'shopping' ? 'bg-blue-500/20' :
                        transaction.category === 'crypto' ? 'bg-orange-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        {transaction.category === 'income' ? <ArrowUpRight className="h-5 w-5 text-emerald-400" /> :
                         transaction.category === 'shopping' ? <ShoppingBag className="h-5 w-5 text-blue-400" /> :
                         transaction.category === 'crypto' ? <Bitcoin className="h-5 w-5 text-orange-400" /> :
                         <ArrowDownRight className="h-5 w-5 text-purple-400" />}
                      </div>
                      <div>
                        <p className="text-white font-medium">{transaction.description}</p>
                        <p className="text-gray-400 text-sm">{transaction.type} • {transaction.time}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${
                        transaction.amount.startsWith('+') ? 'text-emerald-400' : 'text-white'
                      }`}>
                        {transaction.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Crypto Holdings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800"
            >
              <div className="p-6 border-b border-gray-800">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">Crypto Holdings</h3>
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                    Buy Crypto
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid gap-4">
                  {cryptoHoldings.map((crypto, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-sm">{crypto.symbol}</span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{crypto.name}</p>
                          <p className="text-gray-400 text-sm">{crypto.amount} {crypto.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-bold">{crypto.value}</p>
                        <p className={`text-sm flex items-center gap-1 ${
                          crypto.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {crypto.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                          {crypto.change}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800"
            >
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-bold text-white">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors text-left">
                  <Plus className="h-5 w-5 text-emerald-400" />
                  <span className="text-white">Send Money</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors text-left">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                  <span className="text-white">Pay Bills</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors text-left">
                  <Bitcoin className="h-5 w-5 text-orange-400" />
                  <span className="text-white">Trade Crypto</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors text-left">
                  <PieChart className="h-5 w-5 text-purple-400" />
                  <span className="text-white">Investment</span>
                </button>
              </div>
            </motion.div>

            {/* Card Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800"
            >
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-bold text-white">Your Cards</h3>
              </div>
              <div className="p-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white font-semibold">VISA</span>
                    <span className="text-emerald-400 text-sm">Active</span>
                  </div>
                  <p className="text-white font-mono text-lg mb-2">•••• •••• •••• 4532</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{userSession.name}</span>
                    <span className="text-gray-400">12/26</span>
                  </div>
                </div>
                <button className="w-full mt-4 p-3 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800/50 transition-colors">
                  Manage Cards
                </button>
              </div>
            </motion.div>

            {/* Goals */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800"
            >
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-lg font-bold text-white">Savings Goals</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Emergency Fund</span>
                    <span className="text-gray-400 text-sm">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">$7,500 of $10,000</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Vacation</span>
                    <span className="text-gray-400 text-sm">45%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                  <p className="text-gray-400 text-sm mt-1">$2,250 of $5,000</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}