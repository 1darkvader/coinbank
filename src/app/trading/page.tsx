"use client"

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Activity,
  DollarSign,
  Repeat,
  Plus,
  Minus,
  ArrowUpDown,
  Clock,
  Target,
  Zap
} from 'lucide-react'

interface CryptoPrice {
  symbol: string
  price: number
  change24h: number
  marketCap: number
  volume24h: number
}

interface TradingPair {
  base: string
  quote: string
  price: number
  change: number
  volume: number
}

export default function TradingPage() {
  const [selectedPair, setSelectedPair] = useState('BTC/USD')
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy')
  const [amount, setAmount] = useState('')
  const [price, setPrice] = useState('')
  const [cryptoPrices, setCryptoPrices] = useState<Record<string, CryptoPrice>>({})
  const [loading, setLoading] = useState(true)

  const tradingPairs: TradingPair[] = [
    { base: 'BTC', quote: 'USD', price: 45230.50, change: 2.45, volume: 15700000000 },
    { base: 'ETH', quote: 'USD', price: 2890.75, change: -1.23, volume: 8900000000 },
    { base: 'SOL', quote: 'USD', price: 98.45, change: 5.67, volume: 1200000000 },
    { base: 'ADA', quote: 'USD', price: 0.52, change: 3.21, volume: 450000000 },
    { base: 'DOT', quote: 'USD', price: 7.89, change: -0.89, volume: 280000000 },
  ]

  const recentTrades = [
    { price: 45235.20, amount: 0.025, time: '14:32:15', type: 'buy' },
    { price: 45230.50, amount: 0.1, time: '14:31:58', type: 'sell' },
    { price: 45238.75, amount: 0.05, time: '14:31:42', type: 'buy' },
    { price: 45225.00, amount: 0.075, time: '14:31:25', type: 'sell' },
    { price: 45240.10, amount: 0.15, time: '14:31:08', type: 'buy' },
  ]

  useEffect(() => {
    fetchCryptoPrices()
    const interval = setInterval(fetchCryptoPrices, 30000) // Update every 30 seconds
    return () => clearInterval(interval)
  }, [])

  const fetchCryptoPrices = async () => {
    try {
      const response = await fetch('/api/crypto/prices')
      if (response.ok) {
        const data = await response.json()
        setCryptoPrices(data.data)
      }
    } catch (error) {
      console.error('Error fetching prices:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleTrade = () => {
    // Mock trade execution
    alert(`${tradeType.toUpperCase()} order placed: ${amount} ${selectedPair.split('/')[0]} at ${orderType === 'market' ? 'market price' : `$${price}`}`)
  }

  const currentPair = tradingPairs.find(pair => `${pair.base}/${pair.quote}` === selectedPair) || tradingPairs[0]

  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      <CryptoTicker />
      
      <div className="pt-36 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Professional Crypto Trading
                </h1>
                <p className="text-gray-400">
                  Trade cryptocurrencies with institutional-grade tools and real-time market data
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="banking-card rounded-xl px-4 py-2">
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-emerald-400 mr-2" />
                    <span className="text-sm text-white">Market Open</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Trading Pairs */}
            <div className="lg:col-span-1">
              <div className="banking-card rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-4">Trading Pairs</h2>
                <div className="space-y-2">
                  {tradingPairs.map((pair) => (
                    <button
                      key={`${pair.base}/${pair.quote}`}
                      onClick={() => setSelectedPair(`${pair.base}/${pair.quote}`)}
                      className={`w-full p-3 rounded-xl text-left transition-colors ${
                        selectedPair === `${pair.base}/${pair.quote}`
                          ? 'bg-cyan-500/20 border border-cyan-500/30'
                          : 'bg-white/5 hover:bg-white/10 border border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-white">
                          {pair.base}/{pair.quote}
                        </span>
                        <span className={`text-sm ${
                          pair.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {pair.change >= 0 ? '+' : ''}{pair.change.toFixed(2)}%
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">
                        ${pair.price.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-400">
                        Vol: ${(pair.volume / 1000000).toFixed(1)}M
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Chart and Trading Interface */}
            <div className="lg:col-span-2">
              {/* Price Chart */}
              <div className="banking-card rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {selectedPair}
                    </h2>
                    <div className="flex items-center space-x-4 mt-2">
                      <span className="text-2xl font-bold text-white">
                        ${currentPair.price.toLocaleString()}
                      </span>
                      <div className={`flex items-center ${
                        currentPair.change >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {currentPair.change >= 0 ? 
                          <TrendingUp className="w-4 h-4 mr-1" /> :
                          <TrendingDown className="w-4 h-4 mr-1" />
                        }
                        <span className="text-sm font-medium">
                          {currentPair.change >= 0 ? '+' : ''}{currentPair.change.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {['1H', '1D', '1W', '1M', '1Y'].map((timeframe) => (
                      <button
                        key={timeframe}
                        className="px-3 py-1 text-sm rounded-lg bg-white/10 hover:bg-white/20 text-gray-400 hover:text-white transition-colors"
                      >
                        {timeframe}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mock Chart */}
                <div className="h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Interactive Trading Chart</p>
                    <p className="text-sm text-gray-500 mt-2">
                      Real-time price data and technical indicators
                    </p>
                  </div>
                </div>
              </div>

              {/* Order Book & Recent Trades */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="banking-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Order Book</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-2">
                      <div>Price (USD)</div>
                      <div className="text-center">Amount ({currentPair.base})</div>
                      <div className="text-right">Total (USD)</div>
                    </div>
                    {/* Sell Orders */}
                    {Array.from({length: 5}).map((_, i) => (
                      <div key={`sell-${i}`} className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-red-400">
                          {(currentPair.price + (5-i) * 10).toLocaleString()}
                        </div>
                        <div className="text-center text-gray-400">
                          {(Math.random() * 0.5).toFixed(3)}
                        </div>
                        <div className="text-right text-gray-400">
                          {(Math.random() * 20000).toFixed(0)}
                        </div>
                      </div>
                    ))}
                    <div className="border-t border-gray-700 pt-2">
                      <div className="text-center text-lg font-bold text-white">
                        ${currentPair.price.toLocaleString()}
                      </div>
                    </div>
                    {/* Buy Orders */}
                    {Array.from({length: 5}).map((_, i) => (
                      <div key={`buy-${i}`} className="grid grid-cols-3 gap-2 text-xs">
                        <div className="text-emerald-400">
                          {(currentPair.price - (i+1) * 10).toLocaleString()}
                        </div>
                        <div className="text-center text-gray-400">
                          {(Math.random() * 0.5).toFixed(3)}
                        </div>
                        <div className="text-right text-gray-400">
                          {(Math.random() * 20000).toFixed(0)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="banking-card rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Recent Trades</h3>
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-2">
                      <div>Price (USD)</div>
                      <div className="text-center">Amount</div>
                      <div className="text-right">Time</div>
                    </div>
                    {recentTrades.map((trade, i) => (
                      <div key={i} className="grid grid-cols-3 gap-2 text-xs">
                        <div className={trade.type === 'buy' ? 'text-emerald-400' : 'text-red-400'}>
                          ${trade.price.toLocaleString()}
                        </div>
                        <div className="text-center text-gray-400">
                          {trade.amount}
                        </div>
                        <div className="text-right text-gray-400">
                          {trade.time}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Panel */}
            <div className="lg:col-span-1">
              <div className="banking-card rounded-2xl p-6">
                <h2 className="text-lg font-bold text-white mb-4">Place Order</h2>
                
                {/* Trade Type Toggle */}
                <div className="flex bg-white/5 rounded-xl p-1 mb-4">
                  <button
                    onClick={() => setTradeType('buy')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      tradeType === 'buy'
                        ? 'bg-emerald-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Buy
                  </button>
                  <button
                    onClick={() => setTradeType('sell')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      tradeType === 'sell'
                        ? 'bg-red-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Sell
                  </button>
                </div>

                {/* Order Type */}
                <div className="flex bg-white/5 rounded-xl p-1 mb-4">
                  <button
                    onClick={() => setOrderType('market')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      orderType === 'market'
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Market
                  </button>
                  <button
                    onClick={() => setOrderType('limit')}
                    className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                      orderType === 'limit'
                        ? 'bg-cyan-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    Limit
                  </button>
                </div>

                <div className="space-y-4">
                  {/* Amount Input */}
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Amount ({currentPair.base})
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="professional-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                        placeholder="0.00"
                      />
                      <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-cyan-400 hover:text-cyan-300">
                        MAX
                      </button>
                    </div>
                  </div>

                  {/* Price Input (Limit Orders) */}
                  {orderType === 'limit' && (
                    <div>
                      <label className="text-sm font-medium text-gray-300 mb-2 block">
                        Price (USD)
                      </label>
                      <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="professional-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                        placeholder={currentPair.price.toString()}
                      />
                    </div>
                  )}

                  {/* Total */}
                  <div>
                    <label className="text-sm font-medium text-gray-300 mb-2 block">
                      Total (USD)
                    </label>
                    <div className="professional-input w-full px-4 py-3 rounded-xl text-gray-400 cursor-not-allowed">
                      ${amount && price ? (parseFloat(amount) * parseFloat(price)).toLocaleString() : 
                         amount ? (parseFloat(amount) * currentPair.price).toLocaleString() : '0.00'}
                    </div>
                  </div>

                  {/* Trade Button */}
                  <button
                    onClick={handleTrade}
                    disabled={!amount}
                    className={`professional-button w-full py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                      tradeType === 'buy' ? '' : 'bg-red-500 hover:bg-red-400'
                    }`}
                  >
                    {tradeType === 'buy' ? 'Buy' : 'Sell'} {currentPair.base}
                  </button>
                </div>

                {/* Account Balance */}
                <div className="mt-6 pt-6 border-t border-gray-700">
                  <h3 className="text-sm font-medium text-gray-300 mb-3">Account Balance</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">USD</span>
                      <span className="text-white">$12,450.75</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{currentPair.base}</span>
                      <span className="text-white">0.2567</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}