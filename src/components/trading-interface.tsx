"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface MarketData {
  symbol: string
  price: number
  change: number
  volume: string
  high: number
  low: number
}

const mockMarketData: MarketData[] = [
  { symbol: 'BTC/USD', price: 112250.14, change: 2.09, volume: '2.4B', high: 114500, low: 108900 },
  { symbol: 'ETH/USD', price: 3892.73, change: -1.15, volume: '1.8B', high: 4100, low: 3750 },
  { symbol: 'SOL/USD', price: 234.81, change: 5.60, volume: '890M', high: 245, low: 220 },
  { symbol: 'ADA/USD', price: 1.23, change: 6.98, volume: '450M', high: 1.35, low: 1.15 },
  { symbol: 'DOT/USD', price: 18.94, change: -3.81, volume: '320M', high: 20.5, low: 18.2 },
]

export function TradingInterface() {
  const [selectedPair, setSelectedPair] = useState(mockMarketData[0])
  const [orderType, setOrderType] = useState<'buy' | 'sell'>('buy')
  const [priceData, setPriceData] = useState(mockMarketData)

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPriceData(prev => prev.map(data => ({
        ...data,
        price: data.price + (Math.random() - 0.5) * (data.price * 0.001),
        change: data.change + (Math.random() - 0.5) * 0.2,
      })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury">
            Professional <span className="gradient-text">Trading Platform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Execute trades with institutional-grade tools, real-time data, and advanced analytics.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl p-8 premium-shadow"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Market Data */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold">Live Markets</h3>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  ●
                  <span>Real-time data</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl bg-secondary/20">
                <div className="grid grid-cols-6 gap-4 p-4 text-sm font-medium text-muted-foreground border-b border-border/40">
                  <div>Pair</div>
                  <div>Price</div>
                  <div>24h Change</div>
                  <div>Volume</div>
                  <div>High</div>
                  <div>Low</div>
                </div>
                {priceData.map((data, index) => (
                  <motion.div
                    key={data.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`grid grid-cols-6 gap-4 p-4 cursor-pointer hover:bg-white/5 transition-colors ${
                      selectedPair.symbol === data.symbol ? 'bg-orange-500/10' : ''
                    }`}
                    onClick={() => setSelectedPair(data)}
                  >
                    <div className="font-medium">{data.symbol}</div>
                    <motion.div
                      key={data.price.toFixed(2)}
                      initial={{ color: "#f97316" }}
                      animate={{ color: "#ffffff" }}
                      transition={{ duration: 0.3 }}
                      className="font-mono"
                    >
                      {formatPrice(data.price)}
                    </motion.div>
                    <div className={`flex items-center space-x-1 ${
                      data.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {data.change >= 0 ? (
                        <span>▲</span>
                      ) : (
                        <span>▼</span>
                      )}
                      <span>{data.change >= 0 ? '+' : ''}{data.change.toFixed(2)}%</span>
                    </div>
                    <div className="text-muted-foreground">{data.volume}</div>
                    <div className="text-muted-foreground">{formatPrice(data.high)}</div>
                    <div className="text-muted-foreground">{formatPrice(data.low)}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trading Panel */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Trade {selectedPair.symbol}</h3>

              {/* Order Type Toggle */}
              <div className="flex bg-secondary/20 rounded-xl p-1">
                <button
                  onClick={() => setOrderType('buy')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    orderType === 'buy'
                      ? 'bg-green-500/20 text-green-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Buy
                </button>
                <button
                  onClick={() => setOrderType('sell')}
                  className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                    orderType === 'sell'
                      ? 'bg-red-500/20 text-red-400'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Sell
                </button>
              </div>

              {/* Order Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Amount
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full bg-secondary/20 border border-border/40 rounded-xl px-4 py-3 text-foreground placeholder-muted-foreground focus:border-orange-500/50 focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      BTC
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Price
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={selectedPair.price.toFixed(2)}
                      className="w-full bg-secondary/20 border border-border/40 rounded-xl px-4 py-3 text-foreground focus:border-orange-500/50 focus:outline-none"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      USD
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-muted-foreground mb-2">
                    Total
                  </label>
                  <div className="bg-secondary/20 border border-border/40 rounded-xl px-4 py-3 text-muted-foreground">
                    $0.00 USD
                  </div>
                </div>

                <button className={`w-full py-4 rounded-xl font-semibold transition-all hover-lift ${
                  orderType === 'buy'
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                    : 'bg-gradient-to-r from-red-500 to-rose-500 hover:from-red-600 hover:to-rose-600 text-white'
                }`}>
                  {orderType === 'buy' ? 'Buy' : 'Sell'} {selectedPair.symbol.split('/')[0]}
                </button>
              </div>

              {/* Account Info */}
              <div className="bg-secondary/20 rounded-xl p-4 space-y-3">
                <h4 className="font-medium">Account Balance</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available USD</span>
                    <span className="font-mono">$124,567.89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Available BTC</span>
                    <span className="font-mono">2.4567 BTC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trading Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              symbol: "📊",
              title: "Advanced Charts",
              description: "Professional charting tools with technical indicators and drawing tools."
            },
            {
              symbol: "💰",
              title: "Low Fees",
              description: "Competitive trading fees starting from 0.1% with volume discounts."
            },
            {
              symbol: "📈",
              title: "Real-time Data",
              description: "Institutional-grade market data with microsecond latency."
            }
          ].map((feature, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center hover-lift">
              <span className="text-4xl text-orange-400 block mb-4">{feature.symbol}</span>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
