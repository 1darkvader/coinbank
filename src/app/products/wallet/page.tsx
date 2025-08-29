"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Wallet,
  Shield,
  Zap,
  Globe,
  Smartphone,
  CreditCard,
  Eye,
  Key,
  Lock,
  CheckCircle2,
  ArrowRight,
  Download,
  QrCode,
  Send,
  Receipt
} from 'lucide-react'

const walletFeatures = [
  {
    title: "Multi-Currency Support",
    description: "Store, send, and receive over 50 cryptocurrencies in one secure wallet",
    icon: Wallet,
    color: "from-blue-500 to-indigo-600",
    benefits: ["Bitcoin, Ethereum, Solana", "Major stablecoins", "ERC-20 tokens", "Cross-chain swaps"]
  },
  {
    title: "Military-Grade Security",
    description: "Your private keys are encrypted and stored with bank-level security",
    icon: Shield,
    color: "from-emerald-500 to-green-600", 
    benefits: ["Hardware wallet integration", "Biometric authentication", "Multi-signature support", "Cold storage backup"]
  },
  {
    title: "Lightning Fast",
    description: "Experience instant transactions with optimized blockchain connectivity",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    benefits: ["Sub-second confirmations", "Layer 2 scaling", "Smart fee optimization", "Batch processing"]
  },
  {
    title: "Global Access",
    description: "Access your wallet anywhere in the world with full mobile support",
    icon: Globe,
    color: "from-purple-500 to-violet-600",
    benefits: ["iOS & Android apps", "Web dashboard", "Offline access", "Multi-device sync"]
  }
]

export default function WalletPage() {
  return (
    <main className="min-h-screen professional-bg text-foreground">
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Wallet className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              CoinBank Digital Wallet
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The most secure and user-friendly cryptocurrency wallet. Store, send, and manage 
              your digital assets with institutional-grade security and consumer-friendly design.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-muted-foreground">Cryptocurrencies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$2B+</div>
                <div className="text-muted-foreground">Assets Secured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
            </div>
          </motion.div>

          {/* Wallet Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Everything You Need in a Crypto Wallet
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {walletFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Wallet Interface Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Intuitive Design</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our wallet interface is designed for both beginners and professionals, 
                with advanced features that don't compromise on simplicity.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Portfolio View */}
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Portfolio</h3>
                  <Eye className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="space-y-4">
                  {[
                    { symbol: 'BTC', name: 'Bitcoin', amount: '2.47531', value: '$127,439', change: '+5.2%', positive: true },
                    { symbol: 'ETH', name: 'Ethereum', amount: '15.8924', value: '$58,302', change: '-2.1%', positive: false },
                    { symbol: 'SOL', name: 'Solana', amount: '247.33', value: '$12,891', change: '+12.7%', positive: true }
                  ].map((coin, index) => (
                    <div key={index} className="flex items-center justify-between py-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{coin.symbol.charAt(0)}</span>
                        </div>
                        <div>
                          <div className="font-medium text-foreground">{coin.symbol}</div>
                          <div className="text-xs text-muted-foreground">{coin.amount}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium text-foreground">{coin.value}</div>
                        <div className={`text-xs ${coin.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                          {coin.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Send, label: 'Send', color: 'from-blue-500 to-indigo-600' },
                    { icon: Receipt, label: 'Receive', color: 'from-emerald-500 to-green-600' },
                    { icon: QrCode, label: 'QR Pay', color: 'from-purple-500 to-violet-600' },
                    { icon: CreditCard, label: 'Buy Crypto', color: 'from-orange-500 to-red-600' }
                  ].map((action, index) => (
                    <button
                      key={index}
                      className={`p-4 bg-gradient-to-br ${action.color} rounded-xl flex flex-col items-center space-y-2 hover:scale-105 transition-transform`}
                    >
                      <action.icon className="w-6 h-6 text-white" />
                      <span className="text-white text-sm font-medium">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Security Status */}
              <div className="glass-effect rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-foreground">Security</h3>
                  <Shield className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="space-y-3">
                  {[
                    { label: '2FA Enabled', status: 'Active', icon: CheckCircle2 },
                    { label: 'Biometric Lock', status: 'Active', icon: CheckCircle2 },
                    { label: 'Hardware Wallet', status: 'Connected', icon: CheckCircle2 },
                    { label: 'Backup Verified', status: 'Complete', icon: CheckCircle2 }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <item.icon className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                      <span className="text-xs text-emerald-400">{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12"
          >
            <Smartphone className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Get the CoinBank Wallet App
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Download our mobile app and web extension to access your crypto wallet 
              anywhere, anytime with the same security and features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="btn-primary text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download for iOS
              </button>
              <button className="btn-primary text-lg px-8 py-4">
                <Download className="w-5 h-5 mr-2" />
                Download for Android
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Web App
              </button>
            </div>
            <div className="text-sm text-muted-foreground">
              Available on all platforms • Sync across devices • Always secure
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}