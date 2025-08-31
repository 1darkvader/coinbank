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
  Minus,
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
  Banknote,
  Calendar,
  Download
} from 'lucide-react'
// Import enhanced components
import MoneyTransfer from './components/MoneyTransfer'
import CryptoTrading from './components/CryptoTrading'
import BillPayment from './components/BillPayment'
import InvestmentPortfolio from './components/InvestmentPortfolio'
import CardManagement from './components/CardManagement'

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
  const [paymentSubSection, setPaymentSubSection] = useState('transfers') // transfers, bills
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
      {/* Enhanced Account Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <Wallet className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">+5.2%</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">$25,450.75</h3>
          <p className="text-gray-400 text-sm">Total Balance</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-blue-400 text-sm font-medium">Monthly</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">$3,247.85</h3>
          <p className="text-gray-400 text-sm">Profit This Month</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <BarChart3 className="h-5 w-5 text-purple-400" />
            </div>
            <span className="text-purple-400 text-sm font-medium">Active</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">12</h3>
          <p className="text-gray-400 text-sm">Open Positions</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Shield className="h-5 w-5 text-cyan-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">Secured</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">100%</h3>
          <p className="text-gray-400 text-sm">Portfolio Insured</p>
        </motion.div>
      </div>

      {/* Quick Actions Grid */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Quick Actions</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <button
            onClick={() => setActiveSection('payments')}
            className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500/30 transition-colors">
              <Send className="h-6 w-6 text-emerald-400" />
            </div>
            <span className="text-white font-medium">Send Money</span>
          </button>

          <button
            onClick={() => setActiveSection('invest')}
            className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
              <TrendingUp className="h-6 w-6 text-blue-400" />
            </div>
            <span className="text-white font-medium">Invest</span>
          </button>

          <button
            onClick={() => setActiveSection('card')}
            className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
              <CardIcon className="h-6 w-6 text-purple-400" />
            </div>
            <span className="text-white font-medium">My Cards</span>
          </button>

          <button
            onClick={() => alert('Savings feature coming soon!')}
            className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-cyan-500/20 rounded-full group-hover:bg-cyan-500/30 transition-colors">
              <Target className="h-6 w-6 text-cyan-400" />
            </div>
            <span className="text-white font-medium">Savings Goals</span>
          </button>

          <button
            onClick={() => alert('Analytics dashboard coming soon!')}
            className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-orange-500/20 rounded-full group-hover:bg-orange-500/30 transition-colors">
              <BarChart3 className="h-6 w-6 text-orange-400" />
            </div>
            <span className="text-white font-medium">Analytics</span>
          </button>

          <button
            onClick={() => alert('Rewards program coming soon!')}
            className="flex flex-col items-center gap-3 p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors group"
          >
            <div className="p-3 bg-pink-500/20 rounded-full group-hover:bg-pink-500/30 transition-colors">
              <Star className="h-6 w-6 text-pink-400" />
            </div>
            <span className="text-white font-medium">Rewards</span>
          </button>
        </div>
      </div>

      {/* Enhanced Portfolio Overview */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Recent Activity</h3>
            <button className="text-emerald-400 hover:text-emerald-300 text-sm font-medium">View All</button>
          </div>
          <div className="space-y-4">
            {[
              { action: 'Bought Bitcoin', amount: '+0.125 BTC', value: '$5,200', time: '2 hours ago', type: 'buy' },
              { action: 'Sold Ethereum', amount: '-1.5 ETH', value: '$2,340', time: '1 day ago', type: 'sell' },
              { action: 'Received Transfer', amount: '+$1,500', value: 'USD', time: '2 days ago', type: 'receive' },
              { action: 'Card Payment', amount: '-$89.99', value: 'Amazon', time: '3 days ago', type: 'spend' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    activity.type === 'buy' ? 'bg-emerald-500/20' :
                    activity.type === 'sell' ? 'bg-red-500/20' :
                    activity.type === 'receive' ? 'bg-blue-500/20' :
                    'bg-orange-500/20'
                  }`}>
                    {activity.type === 'buy' && <Plus className="h-4 w-4 text-emerald-400" />}
                    {activity.type === 'sell' && <Minus className="h-4 w-4 text-red-400" />}
                    {activity.type === 'receive' && <ArrowDownRight className="h-4 w-4 text-blue-400" />}
                    {activity.type === 'spend' && <CardIcon className="h-4 w-4 text-orange-400" />}
                  </div>
                  <div>
                    <p className="text-white font-medium">{activity.action}</p>
                    <p className="text-gray-400 text-sm">{activity.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{activity.amount}</p>
                  <p className="text-gray-400 text-sm">{activity.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <h3 className="text-xl font-bold text-white mb-6">Market Alerts</h3>
          <div className="space-y-4">
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium text-sm">Price Alert</span>
              </div>
              <p className="text-white text-sm">BTC reached your target of $31,000</p>
              <p className="text-gray-400 text-xs mt-1">5 minutes ago</p>
            </div>

            <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="h-4 w-4 text-blue-400" />
                <span className="text-blue-400 font-medium text-sm">Portfolio Alert</span>
              </div>
              <p className="text-white text-sm">Monthly profit goal achieved!</p>
              <p className="text-gray-400 text-xs mt-1">2 hours ago</p>
            </div>

            <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-4 w-4 text-purple-400" />
                <span className="text-purple-400 font-medium text-sm">Security</span>
              </div>
              <p className="text-white text-sm">New device login detected</p>
              <p className="text-gray-400 text-xs mt-1">1 day ago</p>
            </div>
          </div>

          <button className="w-full mt-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
            Manage Alerts
          </button>
        </div>
      </div>

      {/* Account Management Tools */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Account Management</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-white font-semibold mb-3">Security Settings</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Lock className="h-4 w-4 text-cyan-400" />
                  <span className="text-white">2FA Settings</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span className="text-white">Login History</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Eye className="h-4 w-4 text-purple-400" />
                  <span className="text-white">Privacy Controls</span>
                </div>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Account Services</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Download className="h-4 w-4 text-blue-400" />
                  <span className="text-white">Export Data</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-orange-400" />
                  <span className="text-white">Tax Documents</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Settings className="h-4 w-4 text-gray-400" />
                  <span className="text-white">Preferences</span>
                </div>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Support & Help</h4>
            <div className="space-y-2">
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-emerald-400" />
                  <span className="text-white">Contact Support</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Search className="h-4 w-4 text-cyan-400" />
                  <span className="text-white">Help Center</span>
                </div>
              </button>
              <button className="w-full text-left p-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Star className="h-4 w-4 text-yellow-400" />
                  <span className="text-white">Feedback</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderInvestSection = () => (
    <div className="space-y-8">
      <InvestmentPortfolio />
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
      <CardManagement />
    </div>
  )

  const renderPaymentsSection = () => (
    <div className="space-y-8">
      {/* Payment Type Selection */}
      <div className="flex bg-gray-800/50 rounded-xl p-1">
        {[
          { id: 'transfers', label: 'Money Transfers', icon: <Send className="h-4 w-4" /> },
          { id: 'bills', label: 'Bill Payments', icon: <Zap className="h-4 w-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setPaymentSubSection(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
              paymentSubSection === tab.id
                ? 'bg-emerald-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.icon}
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Payment Content */}
      {paymentSubSection === 'transfers' && <MoneyTransfer />}
      {paymentSubSection === 'bills' && <BillPayment />}
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
        {/* Enhanced Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.location.href = '/'}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <Globe className="h-4 w-4" />
              Home
            </button>
            <button
              onClick={() => setActiveSection('accounts')}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            >
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Bell className="h-5 w-5 text-gray-400" />
            </button>
            <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
              <Settings className="h-5 w-5 text-gray-400" />
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('userSession')
                window.location.href = '/user'
              }}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <ArrowUpRight className="h-4 w-4 rotate-45" />
              Logout
            </button>
          </div>
        </div>
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