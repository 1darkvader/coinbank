"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'
import {
  TrendingUp,
  PiggyBank,
  Star,
  Target,
  Shield,
  Zap,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  BarChart3,
  Calendar,
  Award,
  Coins
} from 'lucide-react'

interface EarnProduct {
  name: string
  apy: string
  minAmount: string
  lockPeriod: string
  risk: 'Low' | 'Medium' | 'High'
  description: string
  features: string[]
  color: string
}

const earnProducts: EarnProduct[] = [
  {
    name: 'Stablecoin Vault',
    apy: '8.2%',
    minAmount: '$100',
    lockPeriod: 'Flexible',
    risk: 'Low',
    description: 'Earn consistent returns on USDC, USDT, and DAI with minimal risk',
    features: ['Daily compounding', 'Instant withdrawal', 'FDIC-like protection'],
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'ETH 2.0 Staking',
    apy: '6.8%',
    minAmount: '0.1 ETH',
    lockPeriod: '12 months',
    risk: 'Medium',
    description: 'Participate in Ethereum network validation and earn staking rewards',
    features: ['Network rewards', 'Liquid staking tokens', 'Professional validators'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'DeFi Yield Farm',
    apy: '24.5%',
    minAmount: '$1,000',
    lockPeriod: '3 months',
    risk: 'High',
    description: 'High-yield opportunities in vetted DeFi protocols and liquidity pools',
    features: ['Auto-compounding', 'Risk management', 'Professional monitoring'],
    color: 'from-purple-500 to-violet-600'
  }
]

export default function EarnPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <CryptoTicker />
      <AIChatbot />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Earn with Your Crypto
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Grow your crypto holdings with competitive yields. From stable returns to high-yield opportunities,
              we offer institutional-grade earning strategies for every risk profile.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Up to 24.5%</div>
                <div className="text-muted-foreground">Annual Yield</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$50M+</div>
                <div className="text-muted-foreground">Assets Earning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-muted-foreground">Earning Products</div>
              </div>
            </div>
          </motion.div>

          {/* Earning Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Earning Strategy
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {earnProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-6`}>
                    {index === 0 && <Shield className="w-8 h-8 text-white" />}
                    {index === 1 && <Star className="w-8 h-8 text-white" />}
                    {index === 2 && <Zap className="w-8 h-8 text-white" />}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      product.risk === 'Low' ? 'bg-emerald-500/20 text-emerald-400' :
                      product.risk === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {product.risk} Risk
                    </span>
                  </div>

                  <div className="text-3xl font-bold text-emerald-400 mb-4">
                    {product.apy} <span className="text-lg text-muted-foreground">APY</span>
                  </div>

                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Min. Amount</span>
                      <span className="text-foreground font-medium">{product.minAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Lock Period</span>
                      <span className="text-foreground font-medium">{product.lockPeriod}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary">
                    Start Earning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Earning Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calculator className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-foreground">Earnings Calculator</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Investment Amount
                  </label>
                  <input
                    type="number"
                    placeholder="10,000"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Expected APY
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-emerald-500/50 focus:outline-none">
                    <option>8.2% - Stablecoin Vault</option>
                    <option>6.8% - ETH 2.0 Staking</option>
                    <option>24.5% - DeFi Yield Farm</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Time Period
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-emerald-500/50 focus:outline-none">
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>5 years</option>
                  </select>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Estimated Earnings:</span>
                    <span className="text-2xl font-bold text-emerald-400">$820</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Value:</span>
                    <span className="text-lg font-medium text-foreground">$10,820</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose CoinBank Earn?</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: Shield,
                    title: 'Professional Risk Management',
                    description: 'Our expert team actively monitors and manages risk across all earning products'
                  },
                  {
                    icon: BarChart3,
                    title: 'Transparent Performance',
                    description: 'Real-time tracking of your earnings with detailed performance analytics'
                  },
                  {
                    icon: Zap,
                    title: 'Auto-Compounding',
                    description: 'Maximize your returns with automatic reinvestment of earned rewards'
                  },
                  {
                    icon: Clock,
                    title: 'Flexible Terms',
                    description: 'Choose from flexible to fixed-term products based on your needs'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Performance Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Proven Performance</h2>
              <p className="text-muted-foreground">Historical performance across our earning products</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Average APY', value: '12.8%', description: 'Across all products' },
                { label: 'Total Rewards Paid', value: '$45M+', description: 'To our customers' },
                { label: 'Customer Satisfaction', value: '97%', description: 'Would recommend' },
                { label: 'Uptime', value: '99.9%', description: 'Platform availability' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="font-medium text-foreground mb-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-3xl p-12"
          >
            <PiggyBank className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Earning Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let your crypto sit idle. Put it to work with our professional earning strategies
              and watch your wealth grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Browse Earning Products
                <Coins className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Talk to Specialist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
