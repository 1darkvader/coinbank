'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  ArrowLeftRight, 
  UserCheck, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Search,
  QrCode,
  Smartphone,
  Plus,
  Users,
  Building,
  CreditCard,
  ArrowRight,
  X,
  Star,
  History
} from 'lucide-react'

interface Contact {
  id: string
  name: string
  email: string
  avatar: string
  accountType: 'internal' | 'external'
  lastTransfer?: string
  favorite?: boolean
}

interface TransferHistory {
  id: string
  recipient: string
  amount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
  type: 'sent' | 'received'
  description: string
}

export default function MoneyTransfer() {
  const [activeTab, setActiveTab] = useState<'send' | 'request' | 'history'>('send')
  const [transferStep, setTransferStep] = useState(1)
  const [transferData, setTransferData] = useState({
    recipient: '',
    amount: '',
    description: '',
    transferType: 'internal', // internal, external, international
    account: 'usd', // usd, eur, crypto
    urgency: 'standard' // instant, standard, scheduled
  })
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [showContactModal, setShowContactModal] = useState(false)

  // Sample contacts
  const recentContacts: Contact[] = [
    {
      id: '1',
      name: 'Sarah Martinez',
      email: 'sarah.martinez@email.com',
      avatar: 'SM',
      accountType: 'internal',
      lastTransfer: '2 days ago',
      favorite: true
    },
    {
      id: '2',
      name: 'Mike Chen',
      email: 'mike.chen@email.com',
      avatar: 'MC',
      accountType: 'internal',
      lastTransfer: '1 week ago',
      favorite: true
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@email.com',
      avatar: 'ER',
      accountType: 'external',
      lastTransfer: '3 days ago'
    },
    {
      id: '4',
      name: 'David Kim',
      email: 'david.kim@email.com',
      avatar: 'DK',
      accountType: 'internal',
      lastTransfer: '1 month ago'
    }
  ]

  // Sample transfer history
  const transferHistory: TransferHistory[] = [
    {
      id: '1',
      recipient: 'Sarah Martinez',
      amount: 250,
      date: '2 hours ago',
      status: 'completed',
      type: 'sent',
      description: 'Dinner split'
    },
    {
      id: '2',
      recipient: 'Mike Chen',
      amount: 1200,
      date: '1 day ago',
      status: 'completed',
      type: 'received',
      description: 'Freelance payment'
    },
    {
      id: '3',
      recipient: 'Emily Rodriguez',
      amount: 75,
      date: '3 days ago',
      status: 'pending',
      type: 'sent',
      description: 'Utilities bill'
    },
    {
      id: '4',
      recipient: 'CoinBank Savings',
      amount: 500,
      date: '1 week ago',
      status: 'completed',
      type: 'sent',
      description: 'Monthly savings'
    }
  ]

  const handleTransferSubmit = () => {
    // Simulate transfer processing
    setTransferStep(4)
    setTimeout(() => {
      setTransferStep(5) // Success
      // Reset after showing success
      setTimeout(() => {
        setTransferStep(1)
        setTransferData({
          recipient: '',
          amount: '',
          description: '',
          transferType: 'internal',
          account: 'usd',
          urgency: 'standard'
        })
        setSelectedContact(null)
      }, 3000)
    }, 2000)
  }

  const renderSendMoney = () => (
    <div className="space-y-6">
      {transferStep === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4">
            <button 
              onClick={() => setTransferData({...transferData, transferType: 'internal'})}
              className={`p-4 rounded-xl border-2 transition-all ${
                transferData.transferType === 'internal' 
                  ? 'border-emerald-500 bg-emerald-500/10' 
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              <Users className="h-6 w-6 text-emerald-400 mb-2 mx-auto" />
              <p className="text-white font-medium text-sm">CoinBank Users</p>
            </button>
            
            <button 
              onClick={() => setTransferData({...transferData, transferType: 'external'})}
              className={`p-4 rounded-xl border-2 transition-all ${
                transferData.transferType === 'external' 
                  ? 'border-blue-500 bg-blue-500/10' 
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              <Building className="h-6 w-6 text-blue-400 mb-2 mx-auto" />
              <p className="text-white font-medium text-sm">External Bank</p>
            </button>
            
            <button 
              onClick={() => setTransferData({...transferData, transferType: 'international'})}
              className={`p-4 rounded-xl border-2 transition-all ${
                transferData.transferType === 'international' 
                  ? 'border-purple-500 bg-purple-500/10' 
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              <ArrowLeftRight className="h-6 w-6 text-purple-400 mb-2 mx-auto" />
              <p className="text-white font-medium text-sm">International</p>
            </button>
          </div>

          {/* Recent Contacts */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Recent Contacts</h3>
              <button 
                onClick={() => setShowContactModal(true)}
                className="text-emerald-400 hover:text-emerald-300 text-sm font-medium"
              >
                View All
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {recentContacts.slice(0, 4).map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setSelectedContact(contact)
                    setTransferData({...transferData, recipient: contact.email})
                  }}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    selectedContact?.id === contact.id
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{contact.avatar}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium truncate">{contact.name}</p>
                      <p className="text-gray-400 text-sm truncate">{contact.lastTransfer}</p>
                    </div>
                    {contact.favorite && (
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Manual Entry */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Or Enter Details</h3>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Recipient email or account number"
                value={transferData.recipient}
                onChange={(e) => setTransferData({...transferData, recipient: e.target.value})}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <QrCode className="h-5 w-5 text-gray-400 hover:text-gray-300" />
              </button>
            </div>

            <button
              onClick={() => transferData.recipient && setTransferStep(2)}
              disabled={!transferData.recipient}
              className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              Continue
            </button>
          </div>
        </motion.div>
      )}

      {transferStep === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Amount Entry */}
          <div className="text-center">
            <label className="block text-gray-400 mb-2">Amount to Send</label>
            <div className="relative">
              <input
                type="number"
                placeholder="0.00"
                value={transferData.amount}
                onChange={(e) => setTransferData({...transferData, amount: e.target.value})}
                className="w-full text-4xl font-bold bg-transparent border-none text-white text-center placeholder-gray-600 focus:outline-none"
              />
              <div className="text-center mt-2">
                <select
                  value={transferData.account}
                  onChange={(e) => setTransferData({...transferData, account: e.target.value})}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white"
                >
                  <option value="usd">USD Account</option>
                  <option value="eur">EUR Account</option>
                  <option value="crypto">Crypto Wallet</option>
                </select>
              </div>
            </div>
          </div>

          {/* Quick Amount Buttons */}
          <div className="grid grid-cols-4 gap-3">
            {[50, 100, 250, 500].map((amount) => (
              <button
                key={amount}
                onClick={() => setTransferData({...transferData, amount: amount.toString()})}
                className="py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                ${amount}
              </button>
            ))}
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-400 mb-2">Description (Optional)</label>
            <input
              type="text"
              placeholder="What's this for?"
              value={transferData.description}
              onChange={(e) => setTransferData({...transferData, description: e.target.value})}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>

          {/* Transfer Speed */}
          <div>
            <label className="block text-gray-400 mb-3">Transfer Speed</label>
            <div className="space-y-3">
              {[
                { value: 'instant', label: 'Instant', time: 'Within minutes', fee: '$2.99' },
                { value: 'standard', label: 'Standard', time: '1-2 business days', fee: 'Free' },
                { value: 'scheduled', label: 'Scheduled', time: 'Choose date', fee: 'Free' }
              ].map((option) => (
                <button
                  key={option.value}
                  onClick={() => setTransferData({...transferData, urgency: option.value})}
                  className={`w-full p-4 rounded-lg border text-left transition-all ${
                    transferData.urgency === option.value
                      ? 'border-emerald-500 bg-emerald-500/10'
                      : 'border-gray-700 bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">{option.label}</p>
                      <p className="text-gray-400 text-sm">{option.time}</p>
                    </div>
                    <p className="text-emerald-400 font-medium">{option.fee}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTransferStep(1)}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Back
            </button>
            <button
              onClick={() => transferData.amount && setTransferStep(3)}
              disabled={!transferData.amount}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-colors"
            >
              Review
            </button>
          </div>
        </motion.div>
      )}

      {transferStep === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold text-white text-center">Review Transfer</h2>
          
          <div className="bg-gray-800/50 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Recipient</span>
              <span className="text-white font-medium">
                {selectedContact ? selectedContact.name : transferData.recipient}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Amount</span>
              <span className="text-2xl font-bold text-white">${transferData.amount}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">From Account</span>
              <span className="text-white font-medium capitalize">{transferData.account} Account</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Transfer Speed</span>
              <span className="text-white font-medium capitalize">{transferData.urgency}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Fee</span>
              <span className="text-emerald-400 font-medium">
                {transferData.urgency === 'instant' ? '$2.99' : 'Free'}
              </span>
            </div>
            
            {transferData.description && (
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Description</span>
                <span className="text-white font-medium">{transferData.description}</span>
              </div>
            )}
            
            <div className="border-t border-gray-700 pt-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold">Total</span>
                <span className="text-2xl font-bold text-white">
                  ${(parseFloat(transferData.amount) + (transferData.urgency === 'instant' ? 2.99 : 0)).toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setTransferStep(2)}
              className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
            >
              Edit
            </button>
            <button
              onClick={handleTransferSubmit}
              className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
            >
              <Send className="h-4 w-4" />
              Send Money
            </button>
          </div>
        </motion.div>
      )}

      {transferStep === 4 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Clock className="h-10 w-10 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Processing Transfer</h2>
          <p className="text-gray-400">Please wait while we process your transfer...</p>
        </motion.div>
      )}

      {transferStep === 5 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">Transfer Successful!</h2>
          <p className="text-gray-400 mb-6">
            ${transferData.amount} has been sent to {selectedContact ? selectedContact.name : transferData.recipient}
          </p>
          <button
            onClick={() => setActiveTab('history')}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors"
          >
            View Transaction
          </button>
        </motion.div>
      )}
    </div>
  )

  const renderTransferHistory = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Transfer History</h2>
        <div className="flex items-center gap-2">
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm">
            <option>All Transfers</option>
            <option>Sent</option>
            <option>Received</option>
          </select>
          <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1 text-white text-sm">
            <option>Last 30 days</option>
            <option>Last 7 days</option>
            <option>Last 3 months</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        {transferHistory.map((transfer) => (
          <div key={transfer.id} className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-full ${
                transfer.type === 'sent' ? 'bg-orange-500/20' : 'bg-emerald-500/20'
              }`}>
                {transfer.type === 'sent' ? (
                  <Send className="h-5 w-5 text-orange-400" />
                ) : (
                  <ArrowLeftRight className="h-5 w-5 text-emerald-400" />
                )}
              </div>
              <div>
                <p className="text-white font-medium">{transfer.recipient}</p>
                <p className="text-gray-400 text-sm">{transfer.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-bold ${
                transfer.type === 'sent' ? 'text-white' : 'text-emerald-400'
              }`}>
                {transfer.type === 'sent' ? '-' : '+'}${transfer.amount}
              </p>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  transfer.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                  transfer.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {transfer.status}
                </span>
                <span className="text-gray-400 text-sm">{transfer.date}</span>
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
          { id: 'send', label: 'Send Money', icon: <Send className="h-4 w-4" /> },
          { id: 'request', label: 'Request', icon: <ArrowLeftRight className="h-4 w-4" /> },
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
        {activeTab === 'send' && renderSendMoney()}
        {activeTab === 'request' && (
          <div className="text-center py-12">
            <ArrowLeftRight className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Request Money</h3>
            <p className="text-gray-400">Request money feature coming soon!</p>
          </div>
        )}
        {activeTab === 'history' && renderTransferHistory()}
      </div>

      {/* Contact Selection Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Select Contact</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search contacts..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>

            <div className="space-y-2 max-h-64 overflow-y-auto">
              {recentContacts.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => {
                    setSelectedContact(contact)
                    setTransferData({...transferData, recipient: contact.email})
                    setShowContactModal(false)
                  }}
                  className="w-full p-3 rounded-lg hover:bg-gray-800 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{contact.avatar}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">{contact.name}</p>
                      <p className="text-gray-400 text-sm">{contact.email}</p>
                    </div>
                    <div className="text-right">
                      {contact.favorite && (
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      )}
                      <p className="text-gray-400 text-xs">{contact.accountType}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowContactModal(false)}
              className="w-full mt-4 py-2 text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}