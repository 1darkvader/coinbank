'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity, 
  Eye, 
  EyeOff,
  Bell,
  Settings,
  Search,
  Filter,
  Download,
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
  Shield,
  CreditCard,
  Wallet,
  PieChart,
  BarChart3,
  Target,
  Zap,
  Globe,
  Lock,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Calendar,
  Bookmark,
  MessageSquare,
  FileText,
  User
} from 'lucide-react'

// Import admin management components
import UserManagement from './components/UserManagement'
import TransactionMonitoring from './components/TransactionMonitoring'
import SystemAnalytics from './components/SystemAnalytics'
import SecurityControls from './components/SecurityControls'
import ContentManagement from './components/ContentManagement'

export default function AdminDashboard() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d')
  const [activeSection, setActiveSection] = useState('overview')
  const [showProfileDropdown, setShowProfileDropdown] = useState(false)
  
  // Sample admin data
  const adminStats = [
    {
      title: 'Total Users',
      value: '1',
      change: '+100%',
      trend: 'up',
      icon: <Users className="h-6 w-6" />
    },
    {
      title: 'Total Revenue',
      value: '$7.3K',
      change: '+18%',
      trend: 'up',
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: 'Active Trades',
      value: '2',
      change: '+100%',
      trend: 'up',
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: 'System Health',
      value: '99.2%',
      change: '+0.1%',
      trend: 'up',
      icon: <Activity className="h-6 w-6" />
    }
  ]

  const navigationItems = [
    { id: 'home', label: 'Home', icon: <Globe className="h-5 w-5" /> },
    { id: 'overview', label: 'Dashboard', icon: <BarChart3 className="h-5 w-5" /> },
    { id: 'users', label: 'User Management', icon: <Users className="h-5 w-5" /> },
    { id: 'transactions', label: 'Transaction Monitoring', icon: <Activity className="h-5 w-5" /> },
    { id: 'analytics', label: 'System Analytics', icon: <PieChart className="h-5 w-5" /> },
    { id: 'security', label: 'Security Controls', icon: <Shield className="h-5 w-5" /> },
    { id: 'content', label: 'Content Management', icon: <FileText className="h-5 w-5" /> }
  ]

  const handleLogout = () => {
    // Clear admin session
    localStorage.removeItem('adminAuth')
    // Redirect to admin login
    window.location.href = '/admin'
  }

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'home':
        window.location.href = '/'
        break
      case 'users':
        setActiveSection('users')
        break
      case 'analytics':
        setActiveSection('analytics')
        break
      case 'security':
        setActiveSection('security')
        break
      case 'settings':
        setActiveSection('content')
        break
      case 'support':
        // Could redirect to support tickets or open a modal
        alert('Support tickets feature coming soon!')
        break
      default:
        break
    }
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showProfileDropdown) {
        const dropdown = document.getElementById('profile-dropdown')
        if (dropdown && !dropdown.contains(event.target as Node)) {
          setShowProfileDropdown(false)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showProfileDropdown])

  const recentUsers = [
    { id: 1, name: 'John Smith', email: 'john@example.com', status: 'Active', joined: '2 hours ago', balance: '$25,450' }
  ]

  const recentTransactions = [
    { id: 1, user: 'John Smith', type: 'Buy', asset: 'BTC', amount: '$5,000', status: 'Completed', time: '2 min ago' },
    { id: 2, user: 'John Smith', type: 'Sell', asset: 'ETH', amount: '$2,300', status: 'Completed', time: '1 hour ago' }
  ]

  const systemAlerts = [
    { id: 1, type: 'info', message: 'System running normally', time: '1 hour ago' },
    { id: 2, type: 'success', message: 'Security patch deployed successfully', time: '2 hours ago' }
  ]

  return (
    <div className="min-h-screen professional-bg text-white">
      {/* Admin Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-8xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">CoinBank Admin</h1>
                  <p className="text-sm text-gray-400">System Administration Panel</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search users, transactions..."
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 w-80"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors relative">
                  <Bell className="h-5 w-5 text-gray-400" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </button>
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Settings className="h-5 w-5 text-gray-400" />
                </button>
              </div>
              
              <div className="flex items-center gap-3 pl-4 border-l border-gray-700 relative" id="profile-dropdown">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">A</span>
                </div>
                <button 
                  onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                  className="text-left hover:bg-gray-800 rounded-lg p-1 transition-colors"
                >
                  <div className="text-sm">
                    <p className="text-white font-medium">Admin User</p>
                    <p className="text-gray-400">Super Admin</p>
                  </div>
                </button>

                {/* Profile Dropdown */}
                {showProfileDropdown && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50">
                    <div className="p-2">
                      <button 
                        onClick={() => {
                          setShowProfileDropdown(false)
                          alert('Profile settings coming soon!')
                        }}
                        className="w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <Settings className="h-4 w-4" />
                        Profile Settings
                      </button>
                      <button 
                        onClick={() => {
                          setShowProfileDropdown(false)
                          alert('Admin preferences coming soon!')
                        }}
                        className="w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-800 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <User className="h-4 w-4" />
                        Preferences
                      </button>
                      <hr className="border-gray-700 my-2" />
                      <button 
                        onClick={() => {
                          setShowProfileDropdown(false)
                          handleLogout()
                        }}
                        className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <ArrowDownRight className="h-4 w-4 rotate-90" />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-6 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800 overflow-x-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors whitespace-nowrap ${
                  activeSection === item.id
                    ? 'bg-cyan-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Overview Section - Original Dashboard */}
        {activeSection === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adminStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">
                      {stat.icon}
                    </div>
                    <span className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                    } flex items-center gap-1`}>
                      {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid lg:grid-cols-1 gap-8">
              {/* Recent Transactions */}
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">Recent Transactions</h2>
                    <div className="flex items-center gap-3">
                      <select
                        value={selectedTimeframe}
                        onChange={(e) => setSelectedTimeframe(e.target.value)}
                        className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm"
                      >
                        <option value="24h">Last 24 hours</option>
                        <option value="7d">Last 7 days</option>
                        <option value="30d">Last 30 days</option>
                      </select>
                      <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <Download className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="text-left p-4 text-gray-400 font-medium">User</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Type</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Asset</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Amount</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Time</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTransactions.map((transaction) => (
                        <tr key={transaction.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                          <td className="p-4">
                            <div className="text-white font-medium">{transaction.user}</div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.type === 'Buy' ? 'bg-emerald-500/20 text-emerald-400' :
                              transaction.type === 'Sell' ? 'bg-red-500/20 text-red-400' :
                              transaction.type === 'Transfer' ? 'bg-blue-500/20 text-blue-400' :
                              'bg-purple-500/20 text-purple-400'
                            }`}>
                              {transaction.type}
                            </span>
                          </td>
                          <td className="p-4 text-gray-300">{transaction.asset}</td>
                          <td className="p-4 text-white font-medium">{transaction.amount}</td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              transaction.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                              transaction.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {transaction.status}
                            </span>
                          </td>
                          <td className="p-4 text-gray-400 text-sm">{transaction.time}</td>
                          <td className="p-4">
                            <button className="p-1 hover:bg-gray-700 rounded transition-colors">
                              <MoreHorizontal className="h-4 w-4 text-gray-400" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* User Management */}
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800">
                <div className="p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-white">User Management</h2>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setActiveSection('users')}
                        className="px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
                      >
                        Manage All Users
                      </button>
                      <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <Filter className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-800/50">
                      <tr>
                        <th className="text-left p-4 text-gray-400 font-medium">User</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Balance</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Joined</th>
                        <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentUsers.map((user) => (
                        <tr key={user.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                  {user.name.charAt(0)}
                                </span>
                              </div>
                              <div>
                                <div className="text-white font-medium">{user.name}</div>
                                <div className="text-gray-400 text-sm">{user.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                              user.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {user.status}
                            </span>
                          </td>
                          <td className="p-4 text-white font-medium">{user.balance}</td>
                          <td className="p-4 text-gray-400 text-sm">{user.joined}</td>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <button className="p-1 hover:bg-gray-700 rounded transition-colors" title="View User">
                                <Eye className="h-4 w-4 text-gray-400" />
                              </button>
                              <button className="p-1 hover:bg-gray-700 rounded transition-colors" title="Edit User">
                                <Settings className="h-4 w-4 text-gray-400" />
                              </button>
                              <button className="p-1 hover:bg-gray-700 rounded transition-colors" title="More Actions">
                                <MoreHorizontal className="h-4 w-4 text-gray-400" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* User Management Section */}
        {activeSection === 'users' && <UserManagement />}

        {/* Transaction Monitoring Section */}
        {activeSection === 'transactions' && <TransactionMonitoring />}

        {/* System Analytics Section */}
        {activeSection === 'analytics' && <SystemAnalytics />}

        {/* Security Controls Section */}
        {activeSection === 'security' && <SecurityControls />}

        {/* Content Management Section */}
        {activeSection === 'content' && <ContentManagement />}
      </div>
    </div>
  )
}