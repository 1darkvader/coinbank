'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  Bitcoin, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Minus,
  Clock,
  CheckCircle2,
  AlertCircle,
  Zap,
  Target,
  BarChart3,
  LineChart,
  DollarSign,
  Percent,
  RefreshCw,
  Eye,
  Star,
  Filter,
  Search,
  ShoppingCart,
  Wallet,
  Activity,
  Info
} from 'lucide-react'

interface CryptoAsset {
  id: string
  symbol: string
  name: string
  price: number
  change24h: number
  changePercent24h: number
  marketCap: number
  volume24h: number
  logo: string
  trending: boolean
}

interface Portfolio {
  symbol: string
  name: string
  amount: number
  value: number
  avgBuyPrice: number
  profitLoss: number
  profitLossPercent: number
}

interface TradeOrder {
  id: string
  type: 'buy' | 'sell'
  symbol: string
  amount: number
  price: number
  total: number
  status: 'pending' | 'completed' | 'cancelled'
  timestamp: string
}

export default function CryptoTrading() {
  const [activeTab, setActiveTab] = useState<'market' | 'portfolio' | 'orders'>('market')
  const [selectedAsset, setSelectedAsset] = useState<CryptoAsset | null>(null)
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy')
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market')
  const [tradeAmount, setTradeAmount] = useState('')
  const [tradePrice, setTradePrice] = useState('')
  const [showTradeModal, setShowTradeModal] = useState(false)
  const [watchlist, setWatchlist] = useState<string[]>(['BTC', 'ETH', 'SOL'])

  // Real-time crypto data from CoinGecko API
  const [cryptoData, setCryptoData] = useState<CryptoAsset[]>([])
  const [loading, setLoading] = useState(true)
  const [marketOverview, setMarketOverview] = useState({
    totalMarketCap: 0,
    totalVolume24h: 0,
    btcDominance: 0,
    marketCapChange24h: 0
  })

  // Portfolio data
  const portfolio: Portfolio[] = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.75,
      value: 50565.38,
      avgBuyPrice: 62400,
      profitLoss: 3720.38,
      profitLossPercent: 7.94
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 12.5,
      value: 33135.00,
      avgBuyPrice: 2800,
      profitLoss: -1865.00,
      profitLossPercent: -5.33
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      amount: 45.2,
      value: 6452.30,
      avgBuyPrice: 138.50,
      profitLoss: 192.30,
      profitLossPercent: 3.07
    }
  ]

  // Trading orders
  const [orders, setOrders] = useState<TradeOrder[]>([
    {
      id: '1',
      type: 'buy',
      symbol: 'BTC',
      amount: 0.1,
      price: 67000,
      total: 6700,
      status: 'completed',
      timestamp: '2 hours ago'
    },
    {
      id: '2',
      type: 'sell',
      symbol: 'ETH',
      amount: 2.5,
      price: 2680,
      total: 6700,
      status: 'pending',
      timestamp: '1 hour ago'
    },
    {
      id: '3',
      type: 'buy',
      symbol: 'SOL',
      amount: 10,
      price: 140,
      total: 1400,
      status: 'completed',
      timestamp: '30 mins ago'
    }
  ])

  // Fetch real crypto data from CoinGecko API
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch('/api/crypto/prices')
        const result = await response.json()
        
        if (result.success) {
          // Transform the data to match our interface
          const transformedData = Object.entries(result.data).map(([id, data]: [string, any]) => ({
            id,
            symbol: data.symbol,
            name: data.name,
            price: data.price,
            change24h: data.change24h,
            changePercent24h: data.changePercent24h,
            marketCap: data.marketCap,
            volume24h: data.volume24h,
            logo: data.logo || getDefaultLogo(data.symbol),
            trending: data.rank <= 5
          }))
          
          setCryptoData(transformedData)
        }
      } catch (error) {
        console.error('Failed to fetch crypto data:', error)
      } finally {
        setLoading(false)
      }
    }

    const fetchMarketOverview = async () => {
      try {
        const response = await fetch('/api/crypto/market-overview')
        const result = await response.json()
        
        if (result.success) {
          setMarketOverview(result.data)
        }
      } catch (error) {
        console.error('Failed to fetch market overview:', error)
      }
    }

    // Initial fetch
    fetchCryptoData()
    fetchMarketOverview()

    // Set up polling every 60 seconds (respecting free API limits)
    const interval = setInterval(() => {
      fetchCryptoData()
      fetchMarketOverview()
    }, 60000)

    return () => clearInterval(interval)
  }, [])

  // Helper function to get default logos
  const getDefaultLogo = (symbol: string) => {
    const logoMap: { [key: string]: string } = {
      'BTC': '₿',
      'ETH': 'Ξ',
      'SOL': '◎',
      'ADA': '₳',
      'DOT': '⬟',
      'MATIC': '⬟',
      'LINK': '🔗',
      'LTC': 'Ł',
      'XRP': '⊗',
      'DOGE': 'Ð'
    }
    return logoMap[symbol] || '●'
  }

  const handleTrade = () => {
    if (!selectedAsset || !tradeAmount) return

    const newOrder: TradeOrder = {
      id: Date.now().toString(),
      type: tradeType,
      symbol: selectedAsset.symbol,
      amount: parseFloat(tradeAmount),
      price: orderType === 'market' ? selectedAsset.price : parseFloat(tradePrice),
      total: parseFloat(tradeAmount) * (orderType === 'market' ? selectedAsset.price : parseFloat(tradePrice)),
      status: 'pending',
      timestamp: 'Just now'
    }

    setOrders(prev => [newOrder, ...prev])
    setShowTradeModal(false)
    setTradeAmount('')
    setTradePrice('')
    
    // Simulate order completion
    setTimeout(() => {
      setOrders(prev => prev.map(order => 
        order.id === newOrder.id ? { ...order, status: 'completed' } : order
      ))
    }, 3000)
  }

  const toggleWatchlist = (symbol: string) => {
    setWatchlist(prev => 
      prev.includes(symbol) 
        ? prev.filter(s => s !== symbol)
        : [...prev, symbol]
    )
  }

  const formatPrice = (price: number) => {
    return price < 1 ? price.toFixed(4) : price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  }

  const formatLargeNumber = (num: number) => {
    if (num >= 1e12) return `$${(num / 1e12).toFixed(2)}T`
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`
    return `$${num.toLocaleString()}`
  }

  const renderMarketView = () => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-12">
          <div className="flex items-center gap-3">
            <RefreshCw className="h-6 w-6 text-emerald-400 animate-spin" />
            <span className="text-white">Loading market data...</span>
          </div>
        </div>
      )
    }

    return (
    <div className="space-y-6">
      {/* Market Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-emerald-400" />
            <span className="text-gray-400 text-sm">Market Cap</span>
          </div>
          <p className="text-2xl font-bold text-white">${formatLargeNumber(marketOverview.totalMarketCap)}</p>
          <p className="text-emerald-400 text-sm">+{marketOverview.marketCapChange24h.toFixed(1)}% 24h</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-4 w-4 text-blue-400" />
            <span className="text-gray-400 text-sm">24h Volume</span>
          </div>
          <p className="text-2xl font-bold text-white">${formatLargeNumber(marketOverview.totalVolume24h)}</p>
          <p className="text-blue-400 text-sm">+12.8% 24h</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-purple-400" />
            <span className="text-gray-400 text-sm">BTC Dominance</span>
          </div>
          <p className="text-2xl font-bold text-white">{marketOverview.btcDominance.toFixed(1)}%</p>
          <p className="text-purple-400 text-sm">+0.8% 24h</p>
        </div>
      </div>

      {/* Top Gainers/Losers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-bold text-white">Top Gainers</h3>
          </div>
          <div className="space-y-3">
            {cryptoData
              .filter(asset => asset.changePercent24h > 0)
              .sort((a, b) => b.changePercent24h - a.changePercent24h)
              .slice(0, 3)
              .map((asset) => (
                <div key={asset.id} className="flex items-center justify-between p-3 bg-emerald-500/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{asset.logo}</span>
                    <div>
                      <p className="text-white font-medium">{asset.symbol}</p>
                      <p className="text-gray-400 text-sm">{asset.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">${formatPrice(asset.price)}</p>
                    <p className="text-emerald-400 text-sm">+{asset.changePercent24h.toFixed(2)}%</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingDown className="h-5 w-5 text-red-400" />
            <h3 className="text-lg font-bold text-white">Top Losers</h3>
          </div>
          <div className="space-y-3">
            {cryptoData
              .filter(asset => asset.changePercent24h < 0)
              .sort((a, b) => a.changePercent24h - b.changePercent24h)
              .slice(0, 3)
              .map((asset) => (
                <div key={asset.id} className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{asset.logo}</span>
                    <div>
                      <p className="text-white font-medium">{asset.symbol}</p>
                      <p className="text-gray-400 text-sm">{asset.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">${formatPrice(asset.price)}</p>
                    <p className="text-red-400 text-sm">{asset.changePercent24h.toFixed(2)}%</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* All Assets Table */}
      <div className="bg-gray-800/50 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">All Assets</h3>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search assets..."
                  className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 w-48"
                />
              </div>
              <button className="p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <Filter className="h-4 w-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-700/50">
              <tr>
                <th className="text-left p-4 text-gray-400 font-medium">Asset</th>
                <th className="text-right p-4 text-gray-400 font-medium">Price</th>
                <th className="text-right p-4 text-gray-400 font-medium">24h Change</th>
                <th className="text-right p-4 text-gray-400 font-medium">Market Cap</th>
                <th className="text-right p-4 text-gray-400 font-medium">Volume</th>
                <th className="text-center p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map((asset) => (
                <tr key={asset.id} className="border-t border-gray-700 hover:bg-gray-700/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleWatchlist(asset.symbol)}
                        className="p-1 hover:bg-gray-600 rounded transition-colors"
                      >
                        <Star className={`h-4 w-4 ${watchlist.includes(asset.symbol) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                      </button>
                      <span className="text-xl">{asset.logo}</span>
                      <div>
                        <p className="text-white font-medium">{asset.symbol}</p>
                        <p className="text-gray-400 text-sm">{asset.name}</p>
                      </div>
                      {asset.trending && (
                        <div className="px-2 py-1 bg-orange-500/20 rounded text-orange-400 text-xs">
                          🔥 Trending
                        </div>
                      )}
                    </div>
                  </td>
                  <td className="p-4 text-right text-white font-medium">${formatPrice(asset.price)}</td>
                  <td className="p-4 text-right">
                    <div className={`flex items-center justify-end gap-1 ${
                      asset.changePercent24h >= 0 ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {asset.changePercent24h >= 0 ? (
                        <ArrowUpRight className="h-4 w-4" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4" />
                      )}
                      <span className="font-medium">{Math.abs(asset.changePercent24h).toFixed(2)}%</span>
                    </div>
                  </td>
                  <td className="p-4 text-right text-gray-300">{formatLargeNumber(asset.marketCap)}</td>
                  <td className="p-4 text-right text-gray-300">{formatLargeNumber(asset.volume24h)}</td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedAsset(asset)
                          setTradeType('buy')
                          setShowTradeModal(true)
                        }}
                        className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-lg transition-colors"
                      >
                        Buy
                      </button>
                      <button
                        onClick={() => {
                          setSelectedAsset(asset)
                          setTradeType('sell')
                          setShowTradeModal(true)
                        }}
                        className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                      >
                        Sell
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderPortfolioView = () => (
    <div className="space-y-6">
      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-emerald-600 to-cyan-600 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Wallet className="h-5 w-5 text-white" />
            <span className="text-white/90">Total Value</span>
          </div>
          <p className="text-3xl font-bold text-white">${portfolio.reduce((sum, item) => sum + item.value, 0).toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-5 w-5 text-emerald-400" />
            <span className="text-gray-400">24h P&L</span>
          </div>
          <p className="text-2xl font-bold text-emerald-400">+$2,047</p>
          <p className="text-emerald-400 text-sm">+2.34%</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            <span className="text-gray-400">Holdings</span>
          </div>
          <p className="text-2xl font-bold text-white">{portfolio.length}</p>
          <p className="text-gray-400 text-sm">Assets</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2">
            <Percent className="h-5 w-5 text-purple-400" />
            <span className="text-gray-400">Best Performer</span>
          </div>
          <p className="text-2xl font-bold text-emerald-400">BTC</p>
          <p className="text-emerald-400 text-sm">+7.94%</p>
        </div>
      </div>

      {/* Holdings */}
      <div className="bg-gray-800/50 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <h3 className="text-lg font-bold text-white">Your Holdings</h3>
        </div>

        <div className="p-6 space-y-4">
          {portfolio.map((holding, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{holding.symbol}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{holding.name}</p>
                  <p className="text-gray-400 text-sm">{holding.amount} {holding.symbol}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-white font-bold">${holding.value.toLocaleString()}</p>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${holding.profitLoss >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {holding.profitLoss >= 0 ? '+' : ''}${holding.profitLoss.toLocaleString()}
                  </span>
                  <span className={`text-sm ${holding.profitLossPercent >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    ({holding.profitLossPercent >= 0 ? '+' : ''}{holding.profitLossPercent.toFixed(2)}%)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    const asset = cryptoData.find(a => a.symbol === holding.symbol)
                    if (asset) {
                      setSelectedAsset(asset)
                      setTradeType('buy')
                      setShowTradeModal(true)
                    }
                  }}
                  className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white text-sm rounded-lg transition-colors"
                >
                  Buy More
                </button>
                <button
                  onClick={() => {
                    const asset = cryptoData.find(a => a.symbol === holding.symbol)
                    if (asset) {
                      setSelectedAsset(asset)
                      setTradeType('sell')
                      setShowTradeModal(true)
                    }
                  }}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded-lg transition-colors"
                >
                  Sell
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderOrdersView = () => (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-4 w-4 text-yellow-400" />
            <span className="text-gray-400 text-sm">Pending Orders</span>
          </div>
          <p className="text-2xl font-bold text-white">{orders.filter(o => o.status === 'pending').length}</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-gray-400 text-sm">Completed Today</span>
          </div>
          <p className="text-2xl font-bold text-white">{orders.filter(o => o.status === 'completed').length}</p>
        </div>
        
        <div className="bg-gray-800/50 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-blue-400" />
            <span className="text-gray-400 text-sm">Total Volume</span>
          </div>
          <p className="text-2xl font-bold text-white">${orders.reduce((sum, order) => sum + order.total, 0).toLocaleString()}</p>
        </div>
      </div>

      {/* Orders List */}
      <div className="bg-gray-800/50 rounded-xl overflow-hidden">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Recent Orders</h3>
            <div className="flex items-center gap-2">
              <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white text-sm">
                <option>All Orders</option>
                <option>Buy Orders</option>
                <option>Sell Orders</option>
              </select>
              <select className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-1 text-white text-sm">
                <option>All Status</option>
                <option>Pending</option>
                <option>Completed</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-3">
          {orders.map((order) => (
            <div key={order.id} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-xl">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-full ${
                  order.type === 'buy' ? 'bg-emerald-500/20' : 'bg-red-500/20'
                }`}>
                  {order.type === 'buy' ? (
                    <Plus className="h-5 w-5 text-emerald-400" />
                  ) : (
                    <Minus className="h-5 w-5 text-red-400" />
                  )}
                </div>
                <div>
                  <p className="text-white font-medium">{order.type.toUpperCase()} {order.symbol}</p>
                  <p className="text-gray-400 text-sm">{order.amount} @ ${order.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-white font-bold">${order.total.toLocaleString()}</p>
                <p className="text-gray-400 text-sm">{order.timestamp}</p>
              </div>

              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  order.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                  order.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {order.status}
                </span>
                {order.status === 'pending' && (
                  <button
                    onClick={() => setOrders(prev => prev.map(o => 
                      o.id === order.id ? { ...o, status: 'cancelled' } : o
                    ))}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex bg-gray-800/50 rounded-xl p-1">
        {[
          { id: 'market', label: 'Market', icon: <BarChart3 className="h-4 w-4" /> },
          { id: 'portfolio', label: 'Portfolio', icon: <Wallet className="h-4 w-4" /> },
          { id: 'orders', label: 'Orders', icon: <Clock className="h-4 w-4" /> }
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
        {activeTab === 'market' && renderMarketView()}
        {activeTab === 'portfolio' && renderPortfolioView()}
        {activeTab === 'orders' && renderOrdersView()}
      </div>

      {/* Trading Modal */}
      {showTradeModal && selectedAsset && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-6 w-full max-w-md border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">
                {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedAsset.symbol}
              </h3>
              <button
                onClick={() => setShowTradeModal(false)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <RefreshCw className="h-5 w-5 text-gray-400" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Current Price */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Current Price</span>
                  <span className="text-white font-bold">${formatPrice(selectedAsset.price)}</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-gray-400 text-sm">24h Change</span>
                  <span className={`text-sm ${selectedAsset.changePercent24h >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {selectedAsset.changePercent24h >= 0 ? '+' : ''}{selectedAsset.changePercent24h.toFixed(2)}%
                  </span>
                </div>
              </div>

              {/* Order Type */}
              <div>
                <label className="block text-gray-400 mb-2">Order Type</label>
                <div className="flex bg-gray-800 rounded-lg p-1">
                  <button
                    onClick={() => setOrderType('market')}
                    className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                      orderType === 'market' ? 'bg-emerald-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    Market
                  </button>
                  <button
                    onClick={() => setOrderType('limit')}
                    className={`flex-1 py-2 px-4 rounded-md transition-colors ${
                      orderType === 'limit' ? 'bg-emerald-600 text-white' : 'text-gray-400'
                    }`}
                  >
                    Limit
                  </button>
                </div>
              </div>

              {/* Amount */}
              <div>
                <label className="block text-gray-400 mb-2">
                  Amount ({selectedAsset.symbol})
                </label>
                <input
                  type="number"
                  placeholder="0.00"
                  value={tradeAmount}
                  onChange={(e) => setTradeAmount(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>

              {/* Limit Price */}
              {orderType === 'limit' && (
                <div>
                  <label className="block text-gray-400 mb-2">Limit Price (USD)</label>
                  <input
                    type="number"
                    placeholder={selectedAsset.price.toString()}
                    value={tradePrice}
                    onChange={(e) => setTradePrice(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              {/* Total */}
              <div className="bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Total</span>
                  <span className="text-white font-bold">
                    ${tradeAmount && (parseFloat(tradeAmount) * (orderType === 'market' ? selectedAsset.price : parseFloat(tradePrice) || selectedAsset.price)).toLocaleString()}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowTradeModal(false)}
                  className="flex-1 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleTrade}
                  disabled={!tradeAmount}
                  className={`flex-1 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                    tradeType === 'buy'
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      : 'bg-red-600 hover:bg-red-700 text-white'
                  } disabled:bg-gray-700 disabled:cursor-not-allowed`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {tradeType === 'buy' ? 'Buy' : 'Sell'} {selectedAsset.symbol}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}