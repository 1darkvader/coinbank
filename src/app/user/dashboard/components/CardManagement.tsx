'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CreditCard, 
  Plus, 
  Lock, 
  Unlock, 
  Eye, 
  EyeOff, 
  Settings, 
  Calendar, 
  DollarSign,
  Zap,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  MapPin,
  Wifi,
  Smartphone,
  Globe,
  TrendingUp,
  BarChart3,
  PieChart,
  RefreshCw,
  Download,
  Copy,
  QrCode,
  X
} from 'lucide-react'

interface Card {
  id: string
  type: 'physical' | 'virtual'
  name: string
  lastFour: string
  status: 'active' | 'locked' | 'pending' | 'expired'
  balance: number
  currency: string
  expiryDate: string
  cardColor: string
  isDefault: boolean
  dailyLimit: number
  monthlySpent: number
  monthlyLimit: number
}

interface Transaction {
  id: string
  cardId: string
  merchant: string
  amount: number
  currency: string
  date: string
  category: string
  status: 'completed' | 'pending' | 'declined'
  location: string
}

const CardManagement = () => {
  const [selectedCard, setSelectedCard] = useState<string>('1')
  const [showCardDetails, setShowCardDetails] = useState(false)
  const [activeTab, setActiveTab] = useState('cards')
  const [showAddCard, setShowAddCard] = useState(false)

  const cards: Card[] = [
    {
      id: '1',
      type: 'physical',
      name: 'CoinBank Platinum',
      lastFour: '4321',
      status: 'active',
      balance: 2450.75,
      currency: 'USD',
      expiryDate: '12/27',
      cardColor: 'from-purple-600 to-blue-600',
      isDefault: true,
      dailyLimit: 5000,
      monthlySpent: 3247.80,
      monthlyLimit: 15000
    },
    {
      id: '2',
      type: 'virtual',
      name: 'Virtual Shopping Card',
      lastFour: '8765',
      status: 'active',
      balance: 850.00,
      currency: 'USD',
      expiryDate: '08/26',
      cardColor: 'from-emerald-600 to-teal-600',
      isDefault: false,
      dailyLimit: 1000,
      monthlySpent: 567.20,
      monthlyLimit: 3000
    },
    {
      id: '3',
      type: 'physical',
      name: 'Travel Card',
      lastFour: '2468',
      status: 'locked',
      balance: 0.00,
      currency: 'USD',
      expiryDate: '03/26',
      cardColor: 'from-orange-600 to-red-600',
      isDefault: false,
      dailyLimit: 2500,
      monthlySpent: 0,
      monthlyLimit: 8000
    }
  ]

  const recentTransactions: Transaction[] = [
    {
      id: '1',
      cardId: '1',
      merchant: 'Amazon',
      amount: 89.99,
      currency: 'USD',
      date: '2024-06-25T14:30:00Z',
      category: 'Shopping',
      status: 'completed',
      location: 'Online'
    },
    {
      id: '2',
      cardId: '1',
      merchant: 'Starbucks',
      amount: 12.45,
      currency: 'USD',
      date: '2024-06-25T09:15:00Z',
      category: 'Food & Drink',
      status: 'completed',
      location: 'New York, NY'
    },
    {
      id: '3',
      cardId: '2',
      merchant: 'Netflix',
      amount: 15.99,
      currency: 'USD',
      date: '2024-06-24T12:00:00Z',
      category: 'Entertainment',
      status: 'completed',
      location: 'Online'
    },
    {
      id: '4',
      cardId: '1',
      merchant: 'Gas Station',
      amount: 45.00,
      currency: 'USD',
      date: '2024-06-23T16:45:00Z',
      category: 'Transportation',
      status: 'pending',
      location: 'Los Angeles, CA'
    }
  ]

  const currentCard = cards.find(card => card.id === selectedCard) || cards[0]

  const handleCardAction = (cardId: string, action: 'lock' | 'unlock' | 'freeze' | 'delete') => {
    // Handle card actions
    alert(`${action.charAt(0).toUpperCase() + action.slice(1)} action for card ending in ${cards.find(c => c.id === cardId)?.lastFour}`)
  }

  const CardComponent = ({ card, isSelected = false }: { card: Card, isSelected?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className={`relative rounded-2xl p-6 cursor-pointer transition-all ${
        isSelected ? 'ring-2 ring-emerald-500' : ''
      }`}
      style={{
        background: `linear-gradient(135deg, ${card.cardColor.replace('from-', '').replace('to-', ',')})`
      }}
      onClick={() => setSelectedCard(card.id)}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-2">
          <CreditCard className="h-6 w-6 text-white" />
          <span className="text-white/80 text-sm font-medium">{card.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {card.type === 'virtual' && <Wifi className="h-4 w-4 text-white/60" />}
          {card.isDefault && <CheckCircle2 className="h-4 w-4 text-white/80" />}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-white/60 text-sm mb-1">Balance</p>
        <p className="text-white text-2xl font-bold">${card.balance.toLocaleString()}</p>
      </div>

      <div className="flex justify-between items-end">
        <div>
          <p className="text-white/60 text-xs mb-1">Card Number</p>
          <p className="text-white font-mono">•••• •••• •••• {card.lastFour}</p>
        </div>
        <div className="text-right">
          <p className="text-white/60 text-xs mb-1">Expires</p>
          <p className="text-white font-mono">{card.expiryDate}</p>
        </div>
      </div>

      <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
        card.status === 'active' ? 'bg-emerald-500/20 text-emerald-200' :
        card.status === 'locked' ? 'bg-red-500/20 text-red-200' :
        card.status === 'pending' ? 'bg-yellow-500/20 text-yellow-200' :
        'bg-gray-500/20 text-gray-200'
      }`}>
        {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
      </div>
    </motion.div>
  )

  const AddCardModal = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900 rounded-2xl border border-gray-800 max-w-md w-full p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">Add New Card</h3>
          <button onClick={() => setShowAddCard(false)} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <X className="h-5 w-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Card Type</label>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex items-center gap-2 p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                <CreditCard className="h-5 w-5 text-purple-400" />
                <span className="text-white">Physical</span>
              </button>
              <button className="flex items-center gap-2 p-3 bg-emerald-600 rounded-lg">
                <Wifi className="h-5 w-5 text-white" />
                <span className="text-white">Virtual</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Card Name</label>
            <input
              type="text"
              placeholder="Enter card name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Daily Limit</label>
            <input
              type="number"
              placeholder="1000"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Monthly Limit</label>
            <input
              type="number"
              placeholder="5000"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setShowAddCard(false)}
            className="flex-1 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              alert('Virtual card created successfully!')
              setShowAddCard(false)
            }}
            className="flex-1 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            Create Card
          </button>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Card Management</h2>
          <p className="text-gray-400 mt-1">Manage your CoinBank cards and spending</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCardDetails(!showCardDetails)}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {showCardDetails ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
          </button>
          <button
            onClick={() => setShowAddCard(true)}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Card
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
        {[
          { id: 'cards', label: 'My Cards' },
          { id: 'transactions', label: 'Transactions' },
          { id: 'limits', label: 'Limits & Controls' },
          { id: 'insights', label: 'Spending Insights' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Cards Tab */}
      {activeTab === 'cards' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <CardComponent
                key={card.id}
                card={card}
                isSelected={card.id === selectedCard}
              />
            ))}
          </div>

          {/* Selected Card Details */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Card Details</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCardAction(currentCard.id, 'lock')}
                    className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    {currentCard.status === 'locked' ? <Unlock className="h-4 w-4 text-emerald-400" /> : <Lock className="h-4 w-4 text-gray-400" />}
                  </button>
                  <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors">
                    <Settings className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-white font-medium mb-4">Card Information</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Type</span>
                      <span className="text-white capitalize">{currentCard.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Status</span>
                      <span className={`capitalize ${
                        currentCard.status === 'active' ? 'text-emerald-400' :
                        currentCard.status === 'locked' ? 'text-red-400' :
                        'text-yellow-400'
                      }`}>
                        {currentCard.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Balance</span>
                      <span className="text-white font-medium">
                        {showCardDetails ? `$${currentCard.balance.toLocaleString()}` : '••••••'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Daily Limit</span>
                      <span className="text-white">${currentCard.dailyLimit.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-medium mb-4">Monthly Usage</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-400">Spent this month</span>
                        <span className="text-white">
                          ${currentCard.monthlySpent.toLocaleString()} / ${currentCard.monthlyLimit.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${(currentCard.monthlySpent / currentCard.monthlyLimit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-gray-800/50 rounded-lg">
                        <p className="text-gray-400 text-xs">Remaining</p>
                        <p className="text-white font-medium">
                          ${(currentCard.monthlyLimit - currentCard.monthlySpent).toLocaleString()}
                        </p>
                      </div>
                      <div className="p-3 bg-gray-800/50 rounded-lg">
                        <p className="text-gray-400 text-xs">Usage</p>
                        <p className="text-emerald-400 font-medium">
                          {Math.round((currentCard.monthlySpent / currentCard.monthlyLimit) * 100)}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleCardAction(currentCard.id, currentCard.status === 'locked' ? 'unlock' : 'lock')}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors text-left ${
                    currentCard.status === 'locked' 
                      ? 'bg-emerald-600 hover:bg-emerald-700' 
                      : 'bg-red-600 hover:bg-red-700'
                  }`}
                >
                  {currentCard.status === 'locked' ? <Unlock className="h-5 w-5 text-white" /> : <Lock className="h-5 w-5 text-white" />}
                  <span className="text-white font-medium">
                    {currentCard.status === 'locked' ? 'Unlock Card' : 'Lock Card'}
                  </span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-left">
                  <RefreshCw className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Reset PIN</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-left">
                  <QrCode className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Show QR Code</span>
                </button>
                <button className="w-full flex items-center gap-3 p-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors text-left">
                  <Copy className="h-5 w-5 text-white" />
                  <span className="text-white font-medium">Copy Details</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Transactions Tab */}
      {activeTab === 'transactions' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <RefreshCw className="h-4 w-4 text-gray-400" />
                </button>
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
                  <th className="text-left p-4 text-gray-400 font-medium">Merchant</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Amount</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Category</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Date</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Location</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                    <td className="p-4">
                      <div className="text-white font-medium">{transaction.merchant}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-white font-medium">-${transaction.amount}</div>
                    </td>
                    <td className="p-4">
                      <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                        {transaction.category}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        transaction.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                        transaction.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-4 text-gray-400 text-sm">{transaction.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Limits Tab */}
      {activeTab === 'limits' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-2 gap-6"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Spending Limits</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Daily Limit</span>
                  <span className="text-white font-medium">${currentCard.dailyLimit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="10000"
                  value={currentCard.dailyLimit}
                  className="w-full accent-emerald-500"
                />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Monthly Limit</span>
                  <span className="text-white font-medium">${currentCard.monthlyLimit.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  value={currentCard.monthlyLimit}
                  className="w-full accent-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Security Controls</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Online Transactions</p>
                  <p className="text-gray-400 text-sm">Allow online purchases</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">International Transactions</p>
                  <p className="text-gray-400 text-sm">Allow foreign purchases</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1 transition" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">ATM Withdrawals</p>
                  <p className="text-gray-400 text-sm">Allow cash withdrawals</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">Contactless Payments</p>
                  <p className="text-gray-400 text-sm">Allow tap-to-pay transactions</p>
                </div>
                <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-emerald-600">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6 transition" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Insights Tab */}
      {activeTab === 'insights' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <DollarSign className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">This Month</p>
                  <p className="text-white text-xl font-bold">${currentCard.monthlySpent.toLocaleString()}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Avg Transaction</p>
                  <p className="text-white text-xl font-bold">$41.11</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Top Category</p>
                  <p className="text-white text-xl font-bold">Shopping</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Spending by Category</h3>
            <div className="space-y-4">
              {[
                { category: 'Shopping', amount: 489.99, percentage: 45 },
                { category: 'Food & Drink', amount: 234.50, percentage: 22 },
                { category: 'Transportation', amount: 167.80, percentage: 15 },
                { category: 'Entertainment', amount: 123.45, percentage: 11 },
                { category: 'Other', amount: 89.26, percentage: 7 }
              ].map((item) => (
                <div key={item.category} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-white font-medium">{item.category}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">${item.amount}</span>
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-medium w-12 text-right">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Add Card Modal */}
      {showAddCard && <AddCardModal />}
    </div>
  )
}

export default CardManagement