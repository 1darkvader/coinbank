"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  ArrowRight,
  Send,
  Globe,
  Zap,
  Clock,
  Shield,
  CreditCard,
  Smartphone,
  Building2,
  CheckCircle2,
  ArrowDownLeft,
  QrCode,
  Users,
  TrendingUp,
  DollarSign,
  Target,
  Award
} from 'lucide-react'

interface TransactionMethod {
  name: string
  description: string
  fee: string
  speed: string
  icon: React.ElementType
  color: string
  features: string[]
}

const transactionMethods: TransactionMethod[] = [
  {
    name: 'Instant Transfer',
    description: 'Lightning-fast crypto transfers worldwide',
    fee: '0.1%',
    speed: '< 30 seconds',
    icon: Zap,
    color: 'from-yellow-500 to-orange-600',
    features: ['Global reach', 'Real-time settlement', 'Multi-currency support', '24/7 availability']
  },
  {
    name: 'Wire Transfer',
    description: 'Traditional banking integration for fiat currencies',
    fee: '$25',
    speed: '1-3 business days',
    icon: Building2,
    color: 'from-blue-500 to-indigo-600',
    features: ['SWIFT network', 'Bank integration', 'Large amounts', 'Regulatory compliant']
  },
  {
    name: 'Card Payment',
    description: 'Direct payments using your CoinBank card',
    fee: '1.5%',
    speed: 'Instant',
    icon: CreditCard,
    color: 'from-purple-500 to-violet-600',
    features: ['Global acceptance', 'Contactless payment', 'Real-time conversion', 'Cashback rewards']
  },
  {
    name: 'Mobile Pay',
    description: 'Peer-to-peer payments via mobile app',
    fee: 'Free',
    speed: 'Instant',
    icon: Smartphone,
    color: 'from-emerald-500 to-green-600',
    features: ['QR code scanning', 'Contact integration', 'Split payments', 'Payment requests']
  }
]

export default function TransactPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Global Transactions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Send and receive money globally with lightning speed and bank-grade security.
              Connect traditional finance with the digital economy seamlessly.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt; 30s</div>
                <div className="text-muted-foreground">Transfer Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$5B+</div>
                <div className="text-muted-foreground">Monthly Volume</div>
              </div>
            </div>
          </motion.div>

          {/* Transaction Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Payment Method
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {transactionMethods.map((method, index) => (
                <motion.div
                  key={method.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mb-6`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{method.name}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground">Fee</div>
                      <div className="text-lg font-bold text-orange-400">{method.fee}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Speed</div>
                      <div className="text-lg font-bold text-emerald-400">{method.speed}</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {method.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary">
                    Use This Method
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transaction Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Send className="w-5 h-5 mr-2 text-orange-400" />
                Send Money
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Recipient
                  </label>
                  <input
                    type="text"
                    placeholder="Enter email, phone, or wallet address"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-orange-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-orange-500/50 focus:outline-none"
                    />
                    <select className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent text-foreground focus:outline-none">
                      <option>USD</option>
                      <option>BTC</option>
                      <option>ETH</option>
                      <option>USDC</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    placeholder="Add a note..."
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-orange-500/50 focus:outline-none resize-none"
                    rows={3}
                  />
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Fee:</span>
                    <span className="text-orange-400">$2.50</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Exchange Rate:</span>
                    <span className="text-foreground">1 USD = 0.0000112 BTC</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground font-semibold">Total:</span>
                    <span className="text-orange-400 font-bold">$102.50</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Send Payment
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Global Reach</h3>
              <p className="text-muted-foreground mb-8">
                Send money to family, friends, and businesses in over 150 countries
                with competitive exchange rates and transparent fees.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Globe,
                    title: 'Worldwide Coverage',
                    description: 'Send to 150+ countries with local currency support'
                  },
                  {
                    icon: Shield,
                    title: 'Bank-Grade Security',
                    description: 'Military-grade encryption and fraud protection'
                  },
                  {
                    icon: Clock,
                    title: 'Real-Time Tracking',
                    description: 'Monitor your transaction status every step of the way'
                  },
                  {
                    icon: Target,
                    title: 'Competitive Rates',
                    description: 'Best-in-class exchange rates with transparent pricing'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Transaction Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Transaction Analytics</h2>
              <p className="text-muted-foreground">Real-time insights into global payment flows</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Daily Volume', value: '$167M', change: '+12.3%', icon: TrendingUp },
                { label: 'Active Users', value: '89,234', change: '+5.7%', icon: Users },
                { label: 'Success Rate', value: '99.97%', change: '+0.02%', icon: CheckCircle2 },
                { label: 'Avg. Speed', value: '23 sec', change: '-2 sec', icon: Zap }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-orange-400" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="font-medium text-foreground mb-1">{stat.label}</div>
                  <div className={`text-sm ${stat.change.startsWith('+') || stat.change.startsWith('-2') ? 'text-emerald-400' : 'text-orange-400'}`}>
                    {stat.change}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: QrCode,
                title: 'QR Pay',
                description: 'Instant payments using QR code scanning',
                action: 'Scan QR Code'
              },
              {
                icon: ArrowDownLeft,
                title: 'Request Payment',
                description: 'Send payment requests to contacts',
                action: 'Create Request'
              },
              {
                icon: Users,
                title: 'Split Bill',
                description: 'Split expenses with friends and family',
                action: 'Split Payment'
              }
            ].map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (0.1 * index) }}
                className="glass-effect rounded-2xl p-6 hover-lift text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <action.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{action.title}</h3>
                <p className="text-muted-foreground mb-6">{action.description}</p>
                <button className="btn-secondary">
                  {action.action}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl p-12"
          >
            <Send className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Sending Money Globally
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of users who trust CoinBank for fast, secure, and affordable
              international money transfers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Send Your First Payment
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Fee Calculator
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
