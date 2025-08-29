"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
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
  MessageCircle,
  PieChart,
  DollarSign,
  Euro,
  Bitcoin,
  Coffee,
  ShoppingBag,
  Target,
  Zap,
  Globe
} from 'lucide-react'

export default function TestDashboardPage() {
  const userName = "Alex Johnson" // Test user name

  return (
    <main className="min-h-screen professional-bg text-foreground">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Welcome Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, {userName}</h1>
            <p className="text-muted-foreground">Here's your portfolio overview for today</p>
            <div className="mt-4 p-3 bg-emerald-500/20 border border-emerald-500/30 rounded-xl">
              <p className="text-emerald-400 text-sm">✅ This is a TEST DASHBOARD - No authentication required</p>
            </div>
          </motion.div>

          {/* Main Dashboard Grid */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Left Sidebar */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Navigation Menu */}
                <div className="glass-effect rounded-2xl p-6">
                  <div className="space-y-4">
                    {[
                      { icon: Users, label: 'Accounts', active: true },
                      { icon: TrendingUp, label: 'Invest' },
                      { icon: Zap, label: 'Payments' },
                      { icon: Globe, label: 'Community' },
                      { icon: Gift, label: 'Rewards' },
                      { icon: PieChart, label: 'Dewrads' }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`flex items-center space-x-3 p-3 rounded-xl cursor-pointer transition-all ${
                          item.active 
                            ? 'bg-blue-500/20 text-blue-400' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/20'
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {/* Accounts Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="glass-effect rounded-2xl p-8"
                >
                  <h2 className="text-2xl font-bold text-foreground mb-6">Accounts</h2>
                  
                  {/* Total Balance */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Total Balance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                            <Wallet className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">Fiat Wallet</span>
                        </div>
                        <span className="text-xl font-bold text-foreground">$53,200</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                            <DollarSign className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">USD Account</span>
                        </div>
                        <span className="text-xl font-bold text-emerald-400">+$850</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
                            <Euro className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-foreground">EUR Account</span>
                        </div>
                        <span className="text-xl font-bold text-emerald-400">+€420</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mt-6 p-4 border-t border-border/20">
                      <span className="text-muted-foreground">Interest Paid this month</span>
                      <span className="text-lg font-bold text-emerald-400">$152 this month</span>
                    </div>
                  </div>

                  {/* Transaction History */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">Transaction History</h3>
                      <button className="text-blue-400 text-sm font-medium">View All</button>
                    </div>
                    
                    <div className="space-y-3">
                      {[
                        { icon: TrendingUp, name: 'Bolton Associates', amount: '$1,200', date: 'Apr 23', status: 'today' },
                        { icon: ArrowDownRight, name: 'Withdraw', amount: '$220', date: 'Apr 21', status: 'completed' },
                        { icon: ShoppingBag, name: 'Online Store', amount: '$59', date: 'Apr 19', status: 'spent' },
                        { icon: Bitcoin, name: 'Crypto Exchange', amount: '$1,500', date: 'Apr 16', status: 'sent' }
                      ].map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                              <transaction.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{transaction.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {transaction.amount} {transaction.status}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">{transaction.date}</div>
                            <div className="font-medium text-foreground">{transaction.amount}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button className="w-full mt-6 btn-primary">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Account
                    </button>
                  </div>
                </motion.div>

                {/* Portfolio Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-effect rounded-2xl p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-foreground">Portfolio</h2>
                    <select className="bg-secondary/20 border border-border/40 rounded-lg px-3 py-1 text-sm text-foreground">
                      <option>High Risk</option>
                      <option>Medium Risk</option>
                      <option>Low Risk</option>
                    </select>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <div className="text-4xl font-bold text-foreground mb-2">$82,750</div>
                      <div className="text-emerald-400 font-medium mb-6">+$3,270 today</div>
                      
                      {/* Crypto Holdings */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">Crypto</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Bitcoin</span>
                            <span className="text-foreground">$53,450</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">ETH</span>
                            <span className="text-foreground">18,290</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Solana</span>
                            <span className="text-foreground">1,977</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full btn-secondary">
                        Invest Now
                      </button>
                    </div>
                    
                    {/* Portfolio Chart Placeholder */}
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                        <div className="text-center">
                          <PieChart className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                          <div className="text-white font-bold">Portfolio</div>
                          <div className="text-white text-sm">Distribution</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-3">
              <div className="space-y-6">
                {/* Card Management */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">Card Management</h3>
                  
                  {/* Virtual Card */}
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-4 mb-6 text-white">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-sm opacity-90">CoinBank</div>
                      <div className="text-xl font-bold">VISA</div>
                    </div>
                    <div className="text-lg font-mono tracking-wider mb-4">1234 5678 9012 3456</div>
                    <div className="flex justify-between">
                      <div>
                        <div className="text-xs opacity-75">Cardholder</div>
                        <div className="text-sm font-medium">Alex Johnson</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs opacity-75">Expires</div>
                        <div className="text-sm font-medium">12/28</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card Controls */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <button className="flex items-center justify-center space-x-2 p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm font-medium">Lock Card</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-3 bg-purple-500/20 text-purple-400 rounded-xl">
                      <Plane className="w-4 h-4" />
                      <span className="text-sm font-medium">Travel Notice</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-3 bg-orange-500/20 text-orange-400 rounded-xl">
                      <Settings className="w-4 h-4" />
                      <span className="text-sm font-medium">Card Controls</span>
                    </button>
                    <button className="flex items-center justify-center space-x-2 p-3 bg-blue-500/20 text-blue-400 rounded-xl">
                      <RefreshCw className="w-4 h-4" />
                      <span className="text-sm font-medium">Replace Card</span>
                    </button>
                  </div>
                  
                  {/* Recent Transactions */}
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Recent Transactions</h4>
                    <div className="space-y-2">
                      {[
                        { icon: ShoppingBag, name: 'Online Store', date: 'Apr 23', amount: '$59', status: 'Spent' },
                        { icon: Coffee, name: 'Coffee Shop', date: 'Apr 21', amount: '$12', status: 'Refund' },
                        { icon: Bitcoin, name: 'Crypto Platform', date: 'Apr 20', amount: '$82', status: 'Saved' }
                      ].map((transaction, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-secondary/40 rounded-lg flex items-center justify-center">
                              <transaction.icon className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-foreground">{transaction.name}</div>
                              <div className="text-xs text-muted-foreground">{transaction.date} {transaction.status}</div>
                            </div>
                          </div>
                          <div className="text-sm font-medium text-foreground">{transaction.amount}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* AI Assistant */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-effect rounded-2xl p-6"
                >
                  <h3 className="text-lg font-bold text-foreground mb-4">AI Assistant</h3>
                  
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">What can I help you with?</div>
                      <div className="text-sm text-blue-400">AI assistant</div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-muted-foreground mb-2">VISA</div>
                    <div className="text-2xl font-bold text-foreground">$5,280</div>
                    <div className="text-sm text-muted-foreground">April ▲ 36%</div>
                  </div>
                  
                  <div className="p-3 bg-secondary/20 rounded-lg mb-4">
                    <div className="text-sm text-foreground mb-1">Prediction now 6:45 PM</div>
                    <div className="text-xs text-muted-foreground">Exchange rates are likely to rise</div>
                  </div>
                  
                  <div className="p-3 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg">
                    <div className="text-sm font-medium text-foreground">Cryptocurrencies 101</div>
                    <div className="text-xs text-muted-foreground mt-1">● ● ● ● ● 9/5</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}