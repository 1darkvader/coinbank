"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  TrendingUp,
  DollarSign,
  Shield,
  Clock,
  Percent,
  Award,
  CheckCircle2,
  ArrowRight,
  Zap,
  Target,
  BarChart3,
  Lock,
  Gift,
  Star,
  Calculator
} from 'lucide-react'

const earnProducts = [
  {
    title: "Crypto Staking",
    description: "Earn up to 12% APY by staking your favorite cryptocurrencies with institutional-grade security",
    icon: Lock,
    color: "from-blue-500 to-indigo-600",
    apy: "Up to 12%",
    features: ["No lock-up periods", "Daily rewards", "Auto-compounding", "Institutional custody"],
    cryptos: ["ETH", "SOL", "DOT", "ADA"]
  },
  {
    title: "High-Yield Savings",
    description: "Earn competitive interest on your stablecoin deposits with FDIC-equivalent protection",
    icon: Shield,
    color: "from-emerald-500 to-green-600",
    apy: "Up to 8.5%",
    features: ["FDIC-equivalent insurance", "Daily compounding", "Instant withdrawals", "No minimum balance"],
    cryptos: ["USDC", "USDT", "BUSD", "DAI"]
  },
  {
    title: "DeFi Yield Farming",
    description: "Access curated DeFi protocols with automated yield optimization and risk management",
    icon: TrendingUp,
    color: "from-purple-500 to-violet-600",
    apy: "Up to 25%",
    features: ["Automated optimization", "Risk diversification", "Yield compounding", "Expert curation"],
    cryptos: ["UNI", "AAVE", "COMP", "CRV"]
  },
  {
    title: "Lending Platform",
    description: "Lend your crypto assets to earn steady returns with collateralized borrowing protocols",
    icon: DollarSign,
    color: "from-orange-500 to-red-600",
    apy: "Up to 15%",
    features: ["Over-collateralized loans", "Flexible terms", "Real-time monitoring", "Liquidation protection"],
    cryptos: ["BTC", "ETH", "USDC", "LINK"]
  }
]

export default function EarnPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Earn with CoinBank
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Maximize your crypto earnings with our comprehensive suite of yield-generating products. 
              From conservative staking to advanced DeFi strategies, we've got options for every risk profile.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">25%</div>
                <div className="text-muted-foreground">Max APY</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$2B+</div>
                <div className="text-muted-foreground">Assets Earning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500K+</div>
                <div className="text-muted-foreground">Active Earners</div>
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
            <div className="grid md:grid-cols-2 gap-8">
              {earnProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-400">{product.apy}</div>
                      <div className="text-sm text-muted-foreground">APY</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-muted-foreground">Supported Assets:</span>
                    <div className="flex space-x-2">
                      {product.cryptos.map((crypto, cryptoIndex) => (
                        <span key={cryptoIndex} className="text-xs bg-secondary/40 text-blue-400 px-2 py-1 rounded">
                          {crypto}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    Start Earning
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-3xl p-12"
          >
            <Gift className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Earning Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 500,000 users already earning with CoinBank. Get started with as little as $100 
              and choose from multiple earning strategies tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Open Earn Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View All Strategies
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}