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
  Search,
  Send,
  Receipt,
  LineChart,
  TrendingDown,
  MoreHorizontal,
  ExternalLink,
  Star,
  Home,
  CreditCard as CardIcon,
  Banknote
} from 'lucide-react'
import MoneyTransfer from './components/MoneyTransfer'
import CryptoTrading from './components/CryptoTrading'
import BillPayment from './components/BillPayment'

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
  const [activeSection, setActiveSection] = useState('accounts')
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

  // Sidebar navigation items
  const sidebarItems = [
    { id: 'accounts', label: 'Accounts', icon: <Users className="h-5 w-5" /> },
    { id: 'invest', label: 'Invest', icon: <TrendingUp className="h-5 w-5" /> },
    { id: 'payments', label: 'Payments', icon: <Zap className="h-5 w-5" /> },
    { id: 'card', label: 'Card', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'rewards', label: 'Rewards', icon: <Gift className="h-5 w-5" /> },
    { id: 'community', label: 'Community', icon: <Globe className="h-5 w-5" /> }
  ]

  // Account data based on client design
  const accountData = {
    fiatWallet: userSession.balance,
    usdAccount: Math.round(userSession.balance * 0.6),
    eurAccount: Math.round(userSession.balance * 0.25),
    interestPaid: 152
  }

  const transactions = [
    { 
      id: 1, 
      company: 'Bolton Associates', 
      amount: 1200, 
      date: 'Apr 23',
      description: '$ 1,200 today',
      type: 'income',
      icon: <Send className="h-5 w-5" />
    },
    { 
      id: 2, 
      company: 'Withdraw', 
      amount: -220, 
      date: 'Apr 21',
      description: '$ 220',
      type: 'withdrawal',
      icon: <ArrowDownRight className="h-5 w-5" />
    },
    { 
      id: 3, 
      company: 'Online Store', 
      amount: -59, 
      date: 'Apr 19',
      description: '$ 59 Spent',
      type: 'purchase',
      icon: <ShoppingBag className="h-5 w-5" />
    },
    { 
      id: 4, 
      company: 'Crypto Exchange', 
      amount: -1500, 
      date: 'Apr 16',
      description: '$ 1,500 Sent',
      type: 'crypto',
      icon: <Bitcoin className="h-5 w-5" />
    }
  ]

  // Investment portfolio data
  const portfolioData = {
    total: userSession.portfolioValue,
    todayChange: 3270,
    crypto: {
      bitcoin: 53450,
      eth: 18290,
      solana: 1977
    },
    stocks: {
      apple: 12300,
      tesla: 8250
    },
    nft: {
      digitalArt: 3810,
      valuation: 2.1
    }
  }

  // Multi-asset breakdown
  const assetBreakdown = [
    { name: 'Fiat', value: 53200, color: 'from-blue-500 to-blue-600', percentage: 35 },
    { name: 'ETH', value: 47500, color: 'from-purple-500 to-purple-600', percentage: 31 },
    { name: 'NFT', value: 32500, color: 'from-orange-500 to-orange-600', percentage: 21 },
    { name: 'Gold', value: 18740, color: 'from-yellow-500 to-yellow-600', percentage: 13 }
  ]

  const renderAccountsSection = () => (
    <div className="space-y-8">
      {/* Total Balance Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Total Balance</h2>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-6 bg-gray-800/50 rounded-xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Banknote className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Fiat Wallet</h3>
                <p className="text-gray-400">Multi-currency account</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-white">${accountData.fiatWallet.toLocaleString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-white">USD Account</span>
              </div>
              <span className="text-emerald-400 font-semibold">+$850</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-white">EUR Account</span>
              </div>
              <span className="text-emerald-400 font-semibold">+€420</span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
            <span className="text-white">Interest Paid <span className="text-gray-400">this month</span></span>
            <span className="text-white font-semibold">${accountData.interestPaid} this month</span>
          </div>
        </div>
      </motion.div>

      {/* Transaction History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Transaction History</h2>
          <button className="text-gray-400 hover:text-white transition-colors">View All</button>
        </div>

        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-800/30 rounded-lg transition-colors">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  transaction.type === 'income' ? 'bg-emerald-500/20' :
                  transaction.type === 'withdrawal' ? 'bg-cyan-500/20' :
                  transaction.type === 'purchase' ? 'bg-orange-500/20' :
                  'bg-purple-500/20'
                }`}>
                  {transaction.icon}
                </div>
                <div>
                  <h3 className="text-white font-medium">{transaction.company}</h3>
                  <p className="text-gray-400 text-sm">{transaction.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white font-medium">{transaction.date}</p>
                <p className={`text-sm ${
                  transaction.amount > 0 ? 'text-emerald-400' : 'text-white'
                }`}>
                  ${Math.abs(transaction.amount).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <button className="w-full flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
            <Plus className="h-4 w-4" />
            Add Account
          </button>
        </div>
      </motion.div>
    </div>
  )

  const renderInvestSection = () => (
    <div className="space-y-8">
      <CryptoTrading />
      
      {/* Original Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Traditional Portfolio</h2>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm">
            <option>High Risk</option>
            <option>Medium Risk</option>
            <option>Low Risk</option>
          </select>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-4xl font-bold text-white mb-2">${portfolioData.total.toLocaleString()}</h3>
            <p className="text-emerald-400 mb-8">+${portfolioData.todayChange.toLocaleString()} today</p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4">Stocks</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Apple</span>
                    <span className="text-white font-medium">${portfolioData.stocks.apple.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">TSLA</span>
                    <span className="text-white font-medium">{portfolioData.stocks.tesla.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-white mb-4">NFT</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Digital Art</span>
                    <span className="text-white font-medium">${portfolioData.nft.digitalArt.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Valuation</span>
                    <span className="text-emerald-400 font-medium">+{portfolioData.nft.valuation}%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" stroke="#374151" strokeWidth="8" fill="transparent" />
                <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="transparent"
                        strokeDasharray="75 25" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-white text-sm">Stocks & NFT</span>
                <span className="text-emerald-400 text-lg font-bold">25%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-700">
          <button className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors">
            Explore Traditional Investments
          </button>
        </div>
      </motion.div>
    </div>
  )

  const renderCardSection = () => (
    <div className="space-y-8">
      {/* Card Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8"
      >
        <h2 className="text-2xl font-bold text-white mb-8">Card Management</h2>

        {/* Virtual Card Display */}
        <div className="bg-gradient-to-br from-cyan-600 to-blue-700 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-cyan-600 font-bold">C</span>
              </div>
              <span className="text-white font-semibold text-lg">CoinBank</span>
            </div>
            <div className="text-white font-bold text-xl">VISA</div>
          </div>

          <div className="mb-6">
            <p className="text-white font-mono text-2xl tracking-wider">1234 5678 9012 3456</p>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-cyan-100 text-sm">Cardholder Name</p>
              <p className="text-white font-semibold">{userSession.name}</p>
            </div>
            <div>
              <p className="text-cyan-100 text-sm">Expires</p>
              <p className="text-white font-semibold">12/26</p>
            </div>
          </div>
        </div>

        {/* Card Controls */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
            <div className="p-2 bg-emerald-500/20 rounded-full">
              <Lock className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Lock Card</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
            <div className="p-2 bg-purple-500/20 rounded-full">
              <Plane className="h-5 w-5 text-purple-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Travel Notice</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
            <div className="p-2 bg-blue-500/20 rounded-full">
              <Settings className="h-5 w-5 text-blue-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Card Controls</p>
            </div>
          </button>

          <button className="flex items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
            <div className="p-2 bg-orange-500/20 rounded-full">
              <RefreshCw className="h-5 w-5 text-orange-400" />
            </div>
            <div className="text-left">
              <p className="text-white font-medium">Replace Card</p>
            </div>
          </button>
        </div>

        {/* Recent Transactions */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-orange-500/20 rounded-full">
                  <ShoppingBag className="h-4 w-4 text-orange-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Online Store</p>
                  <p className="text-gray-400 text-sm">Apr 23 Spent</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white">$59</p>
                <p className="text-gray-400 text-sm">Spent</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-cyan-500/20 rounded-full">
                  <Coffee className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Coffee Shop</p>
                  <p className="text-gray-400 text-sm">Apr 21 Spent</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white">$12</p>
                <p className="text-emerald-400 text-sm">Refund</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-full">
                  <Bitcoin className="h-4 w-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-medium">Crypto Platform</p>
                  <p className="text-gray-400 text-sm">Apr 20 Refunded</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white">$82</p>
                <p className="text-gray-400 text-sm">Saved</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  const renderPaymentsSection = () => (
    <div className="space-y-8">
      <MoneyTransfer />
    </div>
  )

  return (
    <div className="min-h-screen professional-bg text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900/50 backdrop-blur border-r border-gray-800 p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-xl flex items-center justify-center">
            <Wallet className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">CoinBank</h1>
          </div>
        </div>

        <nav className="space-y-2 flex-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                activeSection === item.id
                  ? 'bg-emerald-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="pt-6 border-t border-gray-700">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {userSession.name.charAt(0)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium truncate">{userSession.name}</p>
              <p className="text-gray-400 text-sm">{userSession.role}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-2 p-2 text-gray-400 hover:text-white transition-colors"
          >
            <LogOut className="h-4 w-4" />
            <span className="text-sm">Sign Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white capitalize">{activeSection}</h2>
            <p className="text-gray-400 mt-2">
              {activeSection === 'accounts' && 'Manage your accounts and view transaction history'}
              {activeSection === 'invest' && 'Track your investment portfolio and market performance'}
              {activeSection === 'payments' && 'Send money, pay bills, and manage transfers'}
              {activeSection === 'card' && 'Control your virtual cards and spending'}
              {activeSection === 'rewards' && 'View your rewards and cashback earnings'}
              {activeSection === 'community' && 'Connect with other CoinBank users'}
            </p>
          </div>

          {activeSection === 'accounts' && renderAccountsSection()}
          {activeSection === 'invest' && renderInvestSection()}
          {activeSection === 'payments' && renderPaymentsSection()}
          {activeSection === 'card' && renderCardSection()}
          
          {/* Placeholder sections for other features */}
          {(activeSection === 'rewards' || activeSection === 'community') && (
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                {activeSection === 'rewards' && <Gift className="h-8 w-8 text-white" />}
                {activeSection === 'community' && <Globe className="h-8 w-8 text-white" />}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 capitalize">{activeSection}</h3>
              <p className="text-gray-400 mb-6">
                {activeSection === 'rewards' && 'Rewards program coming soon! Earn cashback and exclusive benefits.'}
                {activeSection === 'community' && 'Community features coming soon! Connect with other users and share insights.'}
              </p>
              <button className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                Learn More
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}