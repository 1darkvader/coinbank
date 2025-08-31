'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  Search, 
  Filter, 
  Download, 
  RefreshCw, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  X,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  Calendar,
  ChevronDown,
  Flag,
  Shield,
  ExternalLink
} from 'lucide-react'

interface Transaction {
  id: string
  user: string
  userEmail: string
  type: 'Buy' | 'Sell' | 'Transfer' | 'Withdraw' | 'Deposit'
  asset: string
  amount: string
  fee: string
  status: 'Completed' | 'Pending' | 'Failed' | 'Flagged' | 'Under Review'
  timestamp: string
  hash: string
  riskScore: number
  isHighValue: boolean
  location: string
  deviceInfo: string
}

const TransactionMonitoring = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: '1',
      user: 'Sarah Johnson',
      userEmail: 'sarah@example.com',
      type: 'Buy',
      asset: 'BTC',
      amount: '$45,000.00',
      fee: '$45.00',
      status: 'Completed',
      timestamp: '2024-06-25T10:30:00Z',
      hash: '0x1a2b3c4d5e6f7g8h9i0j',
      riskScore: 2,
      isHighValue: true,
      location: 'New York, US',
      deviceInfo: 'Chrome/Windows'
    },
    {
      id: '2',
      user: 'Mike Chen',
      userEmail: 'mike@example.com',
      type: 'Sell',
      asset: 'ETH',
      amount: '$23,500.00',
      fee: '$23.50',
      status: 'Completed',
      timestamp: '2024-06-25T10:25:00Z',
      hash: '0x2b3c4d5e6f7g8h9i0j1k',
      riskScore: 1,
      isHighValue: true,
      location: 'San Francisco, US',
      deviceInfo: 'Safari/Mac'
    },
    {
      id: '3',
      user: 'Emma Davis',
      userEmail: 'emma@example.com',
      type: 'Transfer',
      asset: 'USD',
      amount: '$15,000.00',
      fee: '$5.00',
      status: 'Flagged',
      timestamp: '2024-06-25T10:20:00Z',
      hash: '0x3c4d5e6f7g8h9i0j1k2l',
      riskScore: 8,
      isHighValue: true,
      location: 'Unknown VPN',
      deviceInfo: 'Firefox/Linux'
    },
    {
      id: '4',
      user: 'Alex Rodriguez',
      userEmail: 'alex@example.com',
      type: 'Withdraw',
      asset: 'USD',
      amount: '$850.00',
      fee: '$2.50',
      status: 'Under Review',
      timestamp: '2024-06-25T10:15:00Z',
      hash: '0x4d5e6f7g8h9i0j1k2l3m',
      riskScore: 6,
      isHighValue: false,
      location: 'Miami, US',
      deviceInfo: 'Chrome/Android'
    },
    {
      id: '5',
      user: 'Lisa Wang',
      userEmail: 'lisa@example.com',
      type: 'Deposit',
      asset: 'USD',
      amount: '$10,000.00',
      fee: '$0.00',
      status: 'Pending',
      timestamp: '2024-06-25T10:10:00Z',
      hash: '0x5e6f7g8h9i0j1k2l3m4n',
      riskScore: 3,
      isHighValue: true,
      location: 'Seattle, US',
      deviceInfo: 'Edge/Windows'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [timeFilter, setTimeFilter] = useState('24h')
  const [showHighValue, setShowHighValue] = useState(false)
  const [showFlagged, setShowFlagged] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null)
  const [showTransactionModal, setShowTransactionModal] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Filter transactions
  const filteredTransactions = transactions.filter(transaction => {
    const matchesSearch = transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         transaction.hash.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'All' || transaction.status === statusFilter
    const matchesType = typeFilter === 'All' || transaction.type === typeFilter
    const matchesHighValue = !showHighValue || transaction.isHighValue
    const matchesFlagged = !showFlagged || transaction.status === 'Flagged' || transaction.riskScore >= 7
    
    return matchesSearch && matchesStatus && matchesType && matchesHighValue && matchesFlagged
  })

  // Transaction stats
  const stats = {
    total: transactions.length,
    completed: transactions.filter(t => t.status === 'Completed').length,
    pending: transactions.filter(t => t.status === 'Pending').length,
    flagged: transactions.filter(t => t.status === 'Flagged' || t.riskScore >= 7).length,
    totalVolume: '$156,350.00',
    highValueCount: transactions.filter(t => t.isHighValue).length
  }

  const handleTransactionAction = (transactionId: string, action: string) => {
    setTransactions(prevTransactions => 
      prevTransactions.map(transaction => {
        if (transaction.id === transactionId) {
          switch (action) {
            case 'approve':
              return { ...transaction, status: 'Completed' as const }
            case 'flag':
              return { ...transaction, status: 'Flagged' as const }
            case 'review':
              return { ...transaction, status: 'Under Review' as const }
            default:
              return transaction
          }
        }
        return transaction
      })
    )
  }

  const TransactionModal = ({ transaction, onClose }: { transaction: Transaction, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900 rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Transaction Details</h2>
            <p className="text-gray-400">ID: {transaction.id}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Transaction Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Transaction Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Type</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      transaction.type === 'Buy' ? 'bg-emerald-500/20 text-emerald-400' :
                      transaction.type === 'Sell' ? 'bg-red-500/20 text-red-400' :
                      transaction.type === 'Transfer' ? 'bg-blue-500/20 text-blue-400' :
                      transaction.type === 'Withdraw' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {transaction.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Asset</span>
                    <span className="text-white font-medium">{transaction.asset}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Amount</span>
                    <span className="text-white font-semibold text-lg">{transaction.amount}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Fee</span>
                    <span className="text-white">{transaction.fee}</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      transaction.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                      transaction.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      transaction.status === 'Failed' ? 'bg-red-500/20 text-red-400' :
                      transaction.status === 'Flagged' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {transaction.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Hash</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-mono text-sm">{transaction.hash.slice(0, 10)}...</span>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <ExternalLink className="h-3 w-3 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* User & Security Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">User & Security</h3>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-gray-400 text-sm">User</p>
                    <p className="text-white font-medium">{transaction.user}</p>
                    <p className="text-gray-400 text-sm">{transaction.userEmail}</p>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">Risk Score</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        transaction.riskScore >= 7 ? 'bg-red-400' :
                        transaction.riskScore >= 4 ? 'bg-yellow-400' :
                        'bg-emerald-400'
                      }`}></div>
                      <span className={`font-medium ${
                        transaction.riskScore >= 7 ? 'text-red-400' :
                        transaction.riskScore >= 4 ? 'text-yellow-400' :
                        'text-emerald-400'
                      }`}>
                        {transaction.riskScore}/10
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-400">High Value</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.isHighValue ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-500/20 text-gray-400'
                    }`}>
                      {transaction.isHighValue ? 'Yes' : 'No'}
                    </span>
                  </div>
                  
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">{transaction.location}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-gray-400 text-sm">Device</p>
                    <p className="text-white">{transaction.deviceInfo}</p>
                  </div>
                  
                  <div className="p-3 bg-gray-800/50 rounded-lg">
                    <p className="text-gray-400 text-sm">Timestamp</p>
                    <p className="text-white">{new Date(transaction.timestamp).toLocaleString()}</p>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Admin Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {transaction.status === 'Pending' && (
                    <button
                      onClick={() => handleTransactionAction(transaction.id, 'approve')}
                      className="flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                    >
                      <CheckCircle2 className="h-4 w-4" />
                      Approve
                    </button>
                  )}
                  
                  <button
                    onClick={() => handleTransactionAction(transaction.id, 'flag')}
                    className="flex items-center justify-center gap-2 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                  >
                    <Flag className="h-4 w-4" />
                    Flag
                  </button>
                  
                  <button
                    onClick={() => handleTransactionAction(transaction.id, 'review')}
                    className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    Review
                  </button>
                  
                  <button className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    <Shield className="h-4 w-4" />
                    Block User
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="grid lg:grid-cols-6 gap-6">
        <div className="lg:col-span-4">
          <h2 className="text-2xl font-bold text-white">Transaction Monitoring</h2>
          <p className="text-gray-400 mt-1">Monitor and analyze all platform transactions</p>
        </div>
        
        <div className="lg:col-span-2 grid grid-cols-2 gap-3">
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
            <div className="flex items-center gap-2 text-emerald-400 mb-1">
              <CheckCircle2 className="h-4 w-4" />
              <span className="text-sm font-medium">Completed</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.completed}</p>
          </div>
          
          <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800">
            <div className="flex items-center gap-2 text-orange-400 mb-1">
              <AlertTriangle className="h-4 w-4" />
              <span className="text-sm font-medium">Flagged</span>
            </div>
            <p className="text-2xl font-bold text-white">{stats.flagged}</p>
          </div>
        </div>
      </div>

      {/* Volume Overview */}
      <div className="grid lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <DollarSign className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Volume</p>
              <p className="text-white text-xl font-bold">{stats.totalVolume}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Transactions</p>
              <p className="text-white text-xl font-bold">{stats.total}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">High Value</p>
              <p className="text-white text-xl font-bold">{stats.highValueCount}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Pending</p>
              <p className="text-white text-xl font-bold">{stats.pending}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search by user, email, or transaction hash..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex gap-2">
            <button
              onClick={() => setShowHighValue(!showHighValue)}
              className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                showHighValue 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <TrendingUp className="h-4 w-4" />
              High Value
            </button>
            
            <button
              onClick={() => setShowFlagged(!showFlagged)}
              className={`px-4 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                showFlagged 
                  ? 'bg-orange-600 text-white' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300'
              }`}
            >
              <Flag className="h-4 w-4" />
              Flagged
            </button>
          </div>

          {/* More Filters */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <button className="flex items-center gap-2 px-4 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>

          <button 
            onClick={() => alert('Transaction data exported successfully!')}
            className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>

        {/* Expandable Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-700 flex flex-wrap gap-4"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
                <option value="Flagged">Flagged</option>
                <option value="Under Review">Under Review</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Type</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="All">All Types</option>
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                <option value="Transfer">Transfer</option>
                <option value="Withdraw">Withdraw</option>
                <option value="Deposit">Deposit</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Time Period</label>
              <select
                value={timeFilter}
                onChange={(e) => setTimeFilter(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
              </select>
            </div>
          </motion.div>
        )}
      </div>

      {/* Transactions Table */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left p-4 text-gray-400 font-medium">User</th>
                <th className="text-left p-4 text-gray-400 font-medium">Type</th>
                <th className="text-left p-4 text-gray-400 font-medium">Asset</th>
                <th className="text-left p-4 text-gray-400 font-medium">Amount</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium">Risk</th>
                <th className="text-left p-4 text-gray-400 font-medium">Time</th>
                <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <td className="p-4">
                    <div>
                      <div className="text-white font-medium flex items-center gap-2">
                        {transaction.user}
                        {transaction.isHighValue && (
                          <div className="w-2 h-2 bg-purple-400 rounded-full" title="High Value Transaction"></div>
                        )}
                      </div>
                      <div className="text-gray-400 text-sm">{transaction.userEmail}</div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                      transaction.type === 'Buy' ? 'bg-emerald-500/20 text-emerald-400' :
                      transaction.type === 'Sell' ? 'bg-red-500/20 text-red-400' :
                      transaction.type === 'Transfer' ? 'bg-blue-500/20 text-blue-400' :
                      transaction.type === 'Withdraw' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-cyan-500/20 text-cyan-400'
                    }`}>
                      {transaction.type === 'Buy' && <ArrowUpRight className="h-3 w-3" />}
                      {transaction.type === 'Sell' && <ArrowDownRight className="h-3 w-3" />}
                      {transaction.type}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300 font-medium">{transaction.asset}</td>
                  <td className="p-4 text-white font-semibold">{transaction.amount}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 w-fit ${
                      transaction.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-400' :
                      transaction.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      transaction.status === 'Failed' ? 'bg-red-500/20 text-red-400' :
                      transaction.status === 'Flagged' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {transaction.status === 'Completed' && <CheckCircle2 className="h-3 w-3" />}
                      {transaction.status === 'Pending' && <Clock className="h-3 w-3" />}
                      {transaction.status === 'Flagged' && <AlertTriangle className="h-3 w-3" />}
                      {transaction.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${
                        transaction.riskScore >= 7 ? 'bg-red-400' :
                        transaction.riskScore >= 4 ? 'bg-yellow-400' :
                        'bg-emerald-400'
                      }`}></div>
                      <span className={`text-sm font-medium ${
                        transaction.riskScore >= 7 ? 'text-red-400' :
                        transaction.riskScore >= 4 ? 'text-yellow-400' :
                        'text-emerald-400'
                      }`}>
                        {transaction.riskScore}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-400 text-sm">
                    {new Date(transaction.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => {
                        setSelectedTransaction(transaction)
                        setShowTransactionModal(true)
                      }}
                      className="p-1.5 hover:bg-gray-700 rounded transition-colors" 
                      title="View Details"
                    >
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Results Summary */}
        <div className="p-4 border-t border-gray-800 bg-gray-800/25 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            Showing {filteredTransactions.length} of {transactions.length} transactions
          </p>
          <div className="text-gray-400 text-sm">
            Total Volume: <span className="text-white font-medium">{stats.totalVolume}</span>
          </div>
        </div>
      </div>

      {/* Transaction Details Modal */}
      {showTransactionModal && selectedTransaction && (
        <TransactionModal 
          transaction={selectedTransaction} 
          onClose={() => {
            setShowTransactionModal(false)
            setSelectedTransaction(null)
          }} 
        />
      )}
    </div>
  )
}

export default TransactionMonitoring