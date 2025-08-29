"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  TrendingUp,
  BarChart3,
  Zap,
  Target,
  Shield,
  Globe,
  Clock,
  Award,
  CheckCircle2,
  ArrowRight,
  Activity,
  LineChart,
  Layers,
  Settings
} from 'lucide-react'

const tradingFeatures = [
  {
    title: "Advanced Charting",
    description: "Professional-grade charts with 100+ technical indicators and drawing tools",
    icon: BarChart3,
    color: "from-blue-500 to-indigo-600",
    features: ["TradingView integration", "Custom indicators", "Multiple timeframes", "Pattern recognition"]
  },
  {
    title: "Lightning Execution",
    description: "Ultra-low latency order execution with institutional-grade infrastructure",
    icon: Zap,
    color: "from-yellow-500 to-orange-600",
    features: ["Sub-millisecond execution", "Smart order routing", "Minimal slippage", "High frequency ready"]
  },
  {
    title: "Advanced Orders",
    description: "Comprehensive order types for every trading strategy and risk management",
    icon: Target,
    color: "from-emerald-500 to-green-600",
    features: ["Stop-loss & take-profit", "Trailing stops", "Iceberg orders", "Algorithmic execution"]
  },
  {
    title: "Global Markets",
    description: "Trade across multiple exchanges and access deep liquidity pools",
    icon: Globe,
    color: "from-purple-500 to-violet-600",
    features: ["50+ trading pairs", "Cross-exchange arbitrage", "DeFi integration", "24/7 markets"]
  }
]

const orderTypes = [
  { name: "Market Order", description: "Execute immediately at current market price", fee: "0.1%" },
  { name: "Limit Order", description: "Set your desired price and wait for execution", fee: "0.05%" },
  { name: "Stop Loss", description: "Automatically sell when price drops to limit losses", fee: "0.1%" },
  { name: "Take Profit", description: "Automatically sell when target profit is reached", fee: "0.1%" },
  { name: "Trailing Stop", description: "Dynamic stop loss that follows price movements", fee: "0.15%" },
  { name: "Iceberg Order", description: "Large orders split into smaller hidden chunks", fee: "0.2%" }
]

export default function TradingPage() {
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
              Professional Trading Platform
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Trade cryptocurrencies like a professional with our advanced platform. 
              Deep liquidity, professional tools, and institutional-grade execution.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt;5ms</div>
                <div className="text-muted-foreground">Execution Speed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$50B+</div>
                <div className="text-muted-foreground">Daily Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">0.05%</div>
                <div className="text-muted-foreground">Starting Fees</div>
              </div>
            </div>
          </motion.div>

          {/* Trading Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Professional Trading Tools
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {tradingFeatures.map((feature, index) => (
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
                    {feature.features.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Trading Interface Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Trading Dashboard</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional trading interface designed for speed and precision. 
                Customizable layouts and one-click execution.
              </p>
            </div>

            <div className="glass-effect rounded-3xl p-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Market Data */}
                <div className="lg:col-span-2">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-foreground">BTC/USD</h3>
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl font-bold text-emerald-400">$67,234.56</span>
                      <span className="text-emerald-400">+5.2%</span>
                    </div>
                  </div>
                  
                  {/* Simulated Chart */}
                  <div className="h-64 bg-black/20 rounded-xl flex items-center justify-center mb-6">
                    <div className="text-center">
                      <LineChart className="w-16 h-16 text-emerald-400 mx-auto mb-2" />
                      <p className="text-muted-foreground">Advanced TradingView Charts</p>
                    </div>
                  </div>

                  {/* Order Book Preview */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Bids</h4>
                      <div className="space-y-1">
                        {[
                          { price: "67,234.50", size: "0.2847", total: "19,142" },
                          { price: "67,234.00", size: "1.5621", total: "18,987" },
                          { price: "67,233.50", size: "0.8934", total: "17,425" }
                        ].map((order, i) => (
                          <div key={i} className="grid grid-cols-3 gap-2 text-xs">
                            <span className="text-emerald-400">{order.price}</span>
                            <span className="text-foreground">{order.size}</span>
                            <span className="text-muted-foreground">{order.total}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2">Asks</h4>
                      <div className="space-y-1">
                        {[
                          { price: "67,235.00", size: "0.4523", total: "30,412" },
                          { price: "67,235.50", size: "1.2156", total: "31,678" },
                          { price: "67,236.00", size: "0.7834", total: "32,890" }
                        ].map((order, i) => (
                          <div key={i} className="grid grid-cols-3 gap-2 text-xs">
                            <span className="text-red-400">{order.price}</span>
                            <span className="text-foreground">{order.size}</span>
                            <span className="text-muted-foreground">{order.total}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trading Panel */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-4">Place Order</h3>
                    <div className="space-y-4">
                      <div className="flex space-x-2">
                        <button className="flex-1 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg">Buy</button>
                        <button className="flex-1 py-2 text-muted-foreground hover:bg-secondary/20 rounded-lg">Sell</button>
                      </div>
                      
                      <div>
                        <label className="text-xs text-muted-foreground">Price (USD)</label>
                        <input 
                          type="text" 
                          value="67,234.56" 
                          className="w-full mt-1 px-3 py-2 bg-secondary/20 border border-border/40 rounded-lg text-foreground"
                        />
                      </div>
                      
                      <div>
                        <label className="text-xs text-muted-foreground">Amount (BTC)</label>
                        <input 
                          type="text" 
                          placeholder="0.00000000" 
                          className="w-full mt-1 px-3 py-2 bg-secondary/20 border border-border/40 rounded-lg text-foreground"
                        />
                      </div>
                      
                      <div>
                        <label className="text-xs text-muted-foreground">Total (USD)</label>
                        <input 
                          type="text" 
                          placeholder="0.00" 
                          className="w-full mt-1 px-3 py-2 bg-secondary/20 border border-border/40 rounded-lg text-foreground"
                        />
                      </div>
                      
                      <button className="w-full py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium">
                        Buy BTC
                      </button>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-foreground mb-3">Open Orders</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-secondary/20 rounded">
                        <span className="text-muted-foreground">No open orders</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Order Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Advanced Order Types
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {orderTypes.map((order, index) => (
                <motion.div
                  key={order.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <h3 className="font-bold text-foreground mb-2">{order.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{order.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">Trading Fee</span>
                    <span className="text-sm font-medium text-emerald-400">{order.fee}</span>
                  </div>
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
            <Activity className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Trading Like a Pro
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust CoinBank for professional-grade 
              cryptocurrency trading with institutional execution and retail accessibility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Trading
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Trading Guide
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}