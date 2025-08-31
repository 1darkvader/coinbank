'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Wifi, 
  Phone, 
  Car, 
  Home, 
  CreditCard, 
  GraduationCap, 
  Shield,
  Calendar,
  Clock,
  CheckCircle2,
  Search,
  Plus,
  Star,
  Receipt,
  AlertCircle,
  Building,
  Smartphone,
  Tv,
  Water,
  Flame,
  RefreshCw,
  DollarSign,
  History
} from 'lucide-react'

interface BillCategory {
  id: string
  name: string
  icon: React.ReactNode
  color: string
  providers: BillProvider[]
}

interface BillProvider {
  id: string
  name: string
  logo: string
  category: string
  avgAmount: number
  dueDate?: string
  accountNumber?: string
  autopay: boolean
}

interface Payment {
  id: string
  provider: string
  amount: number
  dueDate: string
  status: 'paid' | 'pending' | 'overdue'
  category: string
  timestamp: string
}

export default function BillPayment() {
  const [activeTab, setActiveTab] = useState<'pay' | 'manage' | 'history'>('pay')
  const [selectedCategory, setSelectedCategory] = useState<string>('utilities')
  const [selectedProvider, setSelectedProvider] = useState<BillProvider | null>(null)
  const [paymentAmount, setPaymentAmount] = useState('')
  const [paymentStep, setPaymentStep] = useState(1)
  const [searchQuery, setSearchQuery] = useState('')

  // Bill categories
  const billCategories: BillCategory[] = [
    {
      id: 'utilities',
      name: 'Utilities',
      icon: <Zap className="h-6 w-6" />,
      color: 'from-yellow-500 to-orange-500',
      providers: [
        { id: 'electric', name: 'City Electric', logo: '⚡', category: 'utilities', avgAmount: 120, dueDate: '15th', autopay: false },
        { id: 'gas', name: 'Metro Gas', logo: '🔥', category: 'utilities', avgAmount: 85, dueDate: '20th', autopay: true },
        { id: 'water', name: 'Water Works', logo: '💧', category: 'utilities', avgAmount: 65, dueDate: '12th', autopay: false }
      ]
    },
    {
      id: 'telecom',
      name: 'Telecom',
      icon: <Phone className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      providers: [
        { id: 'internet', name: 'FastNet ISP', logo: '📶', category: 'telecom', avgAmount: 79.99, dueDate: '5th', autopay: true },
        { id: 'mobile', name: 'MobileMax', logo: '📱', category: 'telecom', avgAmount: 55, dueDate: '28th', autopay: false },
        { id: 'cable', name: 'CableVision', logo: '📺', category: 'telecom', avgAmount: 149.99, dueDate: '10th', autopay: false }
      ]
    },
    {
      id: 'insurance',
      name: 'Insurance',
      icon: <Shield className="h-6 w-6" />,
      color: 'from-emerald-500 to-green-500',
      providers: [
        { id: 'health', name: 'HealthGuard', logo: '🏥', category: 'insurance', avgAmount: 450, dueDate: '1st', autopay: true },
        { id: 'auto', name: 'AutoSafe', logo: '🚗', category: 'insurance', avgAmount: 180, dueDate: '15th', autopay: true },
        { id: 'home', name: 'HomeSecure', logo: '🏠', category: 'insurance', avgAmount: 220, dueDate: '25th', autopay: false }
      ]
    },
    {
      id: 'finance',
      name: 'Finance',
      icon: <CreditCard className="h-6 w-6" />,
      color: 'from-purple-500 to-pink-500',
      providers: [
        { id: 'mortgage', name: 'Prime Mortgage', logo: '🏡', category: 'finance', avgAmount: 1850, dueDate: '1st', autopay: true },
        { id: 'credit', name: 'CoinBank Credit', logo: '💳', category: 'finance', avgAmount: 320, dueDate: '22nd', autopay: false },
        { id: 'loan', name: 'Personal Loan Co', logo: '💰', category: 'finance', avgAmount: 280, dueDate: '8th', autopay: false }
      ]
    }
  ]

  // Payment history
  const paymentHistory: Payment[] = [
    { id: '1', provider: 'City Electric', amount: 125.50, dueDate: 'Dec 15', status: 'paid', category: 'utilities', timestamp: '2 days ago' },
    { id: '2', provider: 'FastNet ISP', amount: 79.99, dueDate: 'Dec 5', status: 'paid', category: 'telecom', timestamp: '1 week ago' },
    { id: '3', provider: 'AutoSafe', amount: 180.00, dueDate: 'Dec 15', status: 'pending', category: 'insurance', timestamp: '3 days ago' },
    { id: '4', provider: 'MobileMax', amount: 55.00, dueDate: 'Dec 28', status: 'paid', category: 'telecom', timestamp: '5 days ago' },
    { id: '5', provider: 'Water Works', amount: 68.25, dueDate: 'Dec 12', status: 'overdue', category: 'utilities', timestamp: '1 week ago' }
  ]

  // Upcoming bills
  const upcomingBills = billCategories
    .flatMap(cat => cat.providers)
    .filter(provider => provider.dueDate)
    .sort((a, b) => parseInt(a.dueDate!) - parseInt(b.dueDate!))
    .slice(0, 5)

  const handlePayment = () => {
    if (!selectedProvider || !paymentAmount) return

    // Simulate payment processing
    setPaymentStep(3)
    setTimeout(() => {
      setPaymentStep(4) // Success
      setTimeout(() => {
        setPaymentStep(1)
        setPaymentAmount('')
        setSelectedProvider(null)
      }, 3000)
    }, 2000)
  }

  const filteredProviders = billCategories
    .find(cat => cat.id === selectedCategory)
    ?.providers.filter(provider => 
      provider.name.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []

  const renderPayBills = () => (
    <div className="space-y-6">
      {paymentStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Quick Pay - Upcoming Bills */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Upcoming Bills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {upcomingBills.map((bill) => (
                <button
                  key={bill.id}
                  onClick={() => {
                    setSelectedProvider(bill)
                    setPaymentAmount(bill.avgAmount.toString())
                  }}
                  className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700 transition-colors text-left"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{bill.logo}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{bill.name}</p>
                      <p className="text-gray-400 text-sm">Due {bill.dueDate}</p>
                    </div>
                    {bill.autopay && (
                      <div className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs">
                        Auto
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">${bill.avgAmount}</span>
                    <span className="text-emerald-400 text-sm">Pay Now</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Bill Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Bill Categories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {billCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-6 rounded-xl border-2 transition-all ${
                    selectedCategory === category.id
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-full flex items-center justify-center mb-3 mx-auto text-white`}>
                    {category.icon}
                  </div>
                  <p className="text-white font-medium text-center">{category.name}</p>
                  <p className="text-gray-400 text-sm text-center">{category.providers.length} providers</p>
                </button>
              ))}
            </div>
          </div>

          {/* Provider Search */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">
                {billCategories.find(cat => cat.id === selectedCategory)?.name} Providers
              </h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search providers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 w-64"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredProviders.map((provider) => (
                <button
                  key={provider.id}
                  onClick={() => {
                    setSelectedProvider(provider)
                    setPaymentStep(2)
                  }}
                  className="p-4 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl border border-gray-700 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{provider.logo}</span>
                    <div className="flex-1">
                      <p className="text-white font-medium">{provider.name}</p>
                      <p className="text-gray-400 text-sm">
                        Avg: ${provider.avgAmount} • Due: {provider.dueDate || 'Variable'}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      {provider.autopay && (
                        <div className="px-2 py-1 bg-emerald-500/20 rounded text-emerald-400 text-xs">
                          AutoPay
                        </div>
                      )}
                      <Star className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:text-white hover:border-gray-500 transition-colors">
              <Plus className="h-5 w-5 mx-auto mb-1" />
              Add New Provider
            </button>
          </div>
        </motion.div>
      )}

      {paymentStep === 2 && selectedProvider && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">{selectedProvider.logo}</span>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">{selectedProvider.name}</h2>
            <p className="text-gray-400">Enter payment details</p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Payment Amount</label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="0.00"
                  value={paymentAmount}
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full text-4xl font-bold bg-transparent border border-gray-700 rounded-xl p-6 text-white text-center placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[selectedProvider.avgAmount * 0.5, selectedProvider.avgAmount, selectedProvider.avgAmount * 1.5].map((amount, index) => (
                <button
                  key={index}
                  onClick={() => setPaymentAmount(amount.toString())}
                  className="py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                >
                  ${Math.round(amount)}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Account Number (Optional)</label>
              <input
                type="text"
                placeholder="Enter your account number"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Payment Method</label>
              <div className="space-y-3">
                <button className="w-full p-4 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-left transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium">USD Account</p>
                      <p className="text-gray-400 text-sm">Balance: $31,920</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-white font-medium">Processing Time</span>
              </div>
              <p className="text-gray-400 text-sm">Payment will be processed within 1-2 business days</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setPaymentStep(1)}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => paymentAmount && setPaymentStep(3)}
              disabled={!paymentAmount}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              Review Payment
            </button>
          </div>
        </motion.div>
      )}

      {paymentStep === 3 && selectedProvider && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <RefreshCw className="h-10 w-10 text-yellow-400 animate-spin" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Processing Payment</h2>
          <p className="text-gray-400">
            Processing ${paymentAmount} payment to {selectedProvider.name}
          </p>
        </motion.div>
      )}

      {paymentStep === 4 && selectedProvider && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Payment Successful!</h2>
          <p className="text-gray-400 mb-6">
            ${paymentAmount} has been sent to {selectedProvider.name}
          </p>
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6">
            <p className="text-gray-400 text-sm">Confirmation #BIL-{Date.now().toString().slice(-8)}</p>
          </div>
          <button
            onClick={() => setActiveTab('history')}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
          >
            View Receipt
          </button>
        </motion.div>
      )}
    </div>
  )

  const renderManageBills = () => (
    <div className="space-y-6">
      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">AutoPay Settings</h3>
        
        <div className="space-y-4">
          {billCategories.flatMap(cat => cat.providers).filter(p => p.autopay).map((provider) => (
            <div key={provider.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{provider.logo}</span>
                <div>
                  <p className="text-white font-medium">{provider.name}</p>
                  <p className="text-gray-400 text-sm">Due {provider.dueDate} • ${provider.avgAmount}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-emerald-500/20 rounded text-emerald-400 text-sm">
                  Active
                </div>
                <button className="text-red-400 hover:text-red-300 text-sm">
                  Disable
                </button>
              </div>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 p-3 border-2 border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white transition-colors">
          <Plus className="h-4 w-4 inline-block mr-2" />
          Set Up AutoPay for New Bill
        </button>
      </div>

      <div className="bg-gray-800/50 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-4">Payment Reminders</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-700 rounded-lg">
            <h4 className="text-white font-medium mb-2">Email Notifications</h4>
            <label className="flex items-center gap-2">
              <input type="checkbox" defaultChecked className="text-emerald-500" />
              <span className="text-gray-400 text-sm">3 days before due date</span>
            </label>
          </div>
          
          <div className="p-4 border border-gray-700 rounded-lg">
            <h4 className="text-white font-medium mb-2">SMS Alerts</h4>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="text-emerald-500" />
              <span className="text-gray-400 text-sm">1 day before due date</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPaymentHistory = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Payment History</h2>
        <div className="flex items-center gap-2">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm">
            <option>All Categories</option>
            <option>Utilities</option>
            <option>Telecom</option>
            <option>Insurance</option>
            <option>Finance</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm">
            <option>Last 30 days</option>
            <option>Last 90 days</option>
            <option>This year</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {paymentHistory.map((payment) => (
          <div key={payment.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${
                payment.status === 'paid' ? 'bg-emerald-500/20' :
                payment.status === 'pending' ? 'bg-yellow-500/20' :
                'bg-red-500/20'
              }`}>
                {payment.status === 'paid' ? (
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                ) : payment.status === 'pending' ? (
                  <Clock className="h-5 w-5 text-yellow-400" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{payment.provider}</p>
                <p className="text-gray-400 text-sm">Due {payment.dueDate} • {payment.timestamp}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-white font-bold">${payment.amount}</p>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  payment.status === 'paid' ? 'bg-emerald-500/20 text-emerald-400' :
                  payment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {payment.status}
                </span>
                <button className="text-gray-400 hover:text-white">
                  <Receipt className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex bg-gray-800/50 rounded-xl p-1">
        {[
          { id: 'pay', label: 'Pay Bills', icon: <Zap className="h-4 w-4" /> },
          { id: 'manage', label: 'Manage', icon: <Calendar className="h-4 w-4" /> },
          { id: 'history', label: 'History', icon: <History className="h-4 w-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg transition-all ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            {tab.icon}
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
        {activeTab === 'pay' && renderPayBills()}
        {activeTab === 'manage' && renderManageBills()}
        {activeTab === 'history' && renderPaymentHistory()}
      </div>
    </div>
  )
}