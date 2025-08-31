'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  PieChart, 
  Target, 
  Clock, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Minus,
  Eye,
  EyeOff,
  RefreshCw,
  Filter,
  Calendar,
  BarChart3,
  AlertCircle,
  CheckCircle2,
  Star,
  Zap,
  Shield
} from 'lucide-react'

interface Asset {
  id: string
  symbol: string
  name: string
  amount: number
  value: number
  change24h: number
  allocation: number
  price: number
  logo: string
}

interface PortfolioSummary {
  totalValue: number
  totalChange24h: number
  totalChangePercent: number
  profitLoss: number
}

const InvestmentPortfolio = () => {
  const [isBalanceVisible, setIsBalanceVisible] = useState(true)
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h')
  const [activeTab, setActiveTab] = useState('overview')
  const [loading, setLoading] = useState(true)
  const [cryptoPrices, setCryptoPrices] = useState<any>({})

  // Fetch real crypto prices
  useEffect(() => {
    const fetchCryptoPrices = async () => {
      try {
        const response = await fetch('/api/crypto/prices')
        const result = await response.json()
        
        if (result.success) {
          setCryptoPrices(result.data)
        }
      } catch (error) {
        console.error('Failed to fetch crypto prices:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCryptoPrices()
    
    // Update prices every 60 seconds
    const interval = setInterval(fetchCryptoPrices, 60000)
    return () => clearInterval(interval)
  }, [])

  // Calculate portfolio values using real prices
  const calculatePortfolioValue = () => {
    if (Object.keys(cryptoPrices).length === 0) {
      return portfolioSummary // Return default if no prices loaded yet
    }

    let totalValue = 0
    const updatedAssets = assets.map(asset => {
      const coinData = Object.values(cryptoPrices).find((coin: any) => coin.symbol === asset.symbol)
      
      if (coinData) {
        const currentPrice = (coinData as any).price
        const newValue = asset.amount * currentPrice
        const change24h = (coinData as any).changePercent24h || 0
        
        totalValue += newValue
        
        return {
          ...asset,
          price: currentPrice,
          value: newValue,
          change24h: change24h
        }
      }
      
      return asset
    })

    const totalChange24h = updatedAssets.reduce((acc, asset) => {
      const coinData = Object.values(cryptoPrices).find((coin: any) => coin.symbol === asset.symbol)
      if (coinData) {
        const change = (asset.amount * asset.price * (coinData as any).changePercent24h) / 100
        return acc + change
      }
      return acc
    }, 0)

    return {
      totalValue,
      totalChange24h,
      totalChangePercent: totalValue > 0 ? (totalChange24h / (totalValue - totalChange24h)) * 100 : 0,
      profitLoss: totalValue - (portfolioSummary.totalValue - portfolioSummary.profitLoss),
      assets: updatedAssets
    }
  }

  const currentPortfolio = calculatePortfolioValue()

  // Sample portfolio data as fallback
  const portfolioSummary: PortfolioSummary = {
    totalValue: 25450.75,
    totalChange24h: 1247.50,
    totalChangePercent: 5.15,
    profitLoss: 3247.85
  }

  const assets: Asset[] = [
    {
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      amount: 0.5847,
      value: 18234.50,
      change24h: 4.2,
      allocation: 71.6,
      price: 31200.00,
      logo: '₿'
    },
    {
      id: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      amount: 3.2145,
      value: 5876.40,
      change24h: 6.8,
      allocation: 23.1,
      price: 1828.00,
      logo: 'Ξ'
    },
    {
      id: '3',
      symbol: 'SOL',
      name: 'Solana',
      amount: 25.678,
      value: 1339.85,
      change24h: -2.1,
      allocation: 5.3,
      price: 52.18,
      logo: '◎'
    }
  ]

  const performanceHistory = [
    { date: '2024-06-20', value: 22150.25 },
    { date: '2024-06-21', value: 23420.10 },
    { date: '2024-06-22', value: 22890.75 },
    { date: '2024-06-23', value: 24100.60 },
    { date: '2024-06-24', value: 24203.25 },
    { date: '2024-06-25', value: 25450.75 }
  ]

  const recommendations = [
    {
      id: '1',
      type: 'rebalance',
      title: 'Portfolio Rebalancing',
      description: 'Consider rebalancing your portfolio to maintain target allocations',
      priority: 'medium',
      action: 'Rebalance Now'
    },
    {
      id: '2',
      type: 'opportunity',
      title: 'DCA Opportunity',
      description: 'ETH is down 3% from your average buy price - good time for DCA',
      priority: 'high',
      action: 'Buy ETH'
    },
    {
      id: '3',
      type: 'alert',
      title: 'High Concentration',
      description: 'BTC represents 71.6% of your portfolio - consider diversifying',
      priority: 'low',
      action: 'Diversify'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Investment Portfolio</h2>
          <p className="text-gray-400 mt-1">Track and manage your crypto investments</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsBalanceVisible(!isBalanceVisible)}
            className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            {isBalanceVisible ? <EyeOff className="h-5 w-5 text-gray-400" /> : <Eye className="h-5 w-5 text-gray-400" />}
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors">
            <Plus className="h-4 w-4" />
            Invest More
          </button>
        </div>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <DollarSign className="h-5 w-5 text-emerald-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">
              +{portfolioSummary.totalChangePercent.toFixed(2)}%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {isBalanceVisible ? `$${portfolioSummary.totalValue.toLocaleString()}` : '••••••'}
          </h3>
          <p className="text-gray-400 text-sm">Total Portfolio Value</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <TrendingUp className="h-5 w-5 text-blue-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium flex items-center gap-1">
              <ArrowUpRight className="h-3 w-3" />
              24h
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {isBalanceVisible ? `+$${portfolioSummary.totalChange24h.toLocaleString()}` : '••••••'}
          </h3>
          <p className="text-gray-400 text-sm">24h Change</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-500/20 rounded-lg">
              <Target className="h-5 w-5 text-purple-400" />
            </div>
            <span className="text-emerald-400 text-sm font-medium">
              +15.6%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            {isBalanceVisible ? `+$${portfolioSummary.profitLoss.toLocaleString()}` : '••••••'}
          </h3>
          <p className="text-gray-400 text-sm">Total P&L</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <PieChart className="h-5 w-5 text-cyan-400" />
            </div>
            <span className="text-gray-400 text-sm font-medium">
              {assets.length} Assets
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-1">
            Diversified
          </h3>
          <p className="text-gray-400 text-sm">Portfolio Status</p>
        </motion.div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'holdings', label: 'Holdings' },
          { id: 'performance', label: 'Performance' },
          { id: 'recommendations', label: 'Insights' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-emerald-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {/* Asset Allocation Chart */}
          <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Asset Allocation</h3>
            <div className="space-y-4">
              {assets.map((asset, index) => (
                <div key={asset.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
                      {asset.logo}
                    </div>
                    <div>
                      <p className="text-white font-medium">{asset.name}</p>
                      <p className="text-gray-400 text-sm">{asset.symbol}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium">{asset.allocation}%</p>
                    <div className="w-24 bg-gray-800 rounded-full h-2 mt-1">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                        style={{ width: `${asset.allocation}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center gap-3 p-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors text-left">
                <Plus className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Buy Crypto</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-left">
                <Minus className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Sell Crypto</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-left">
                <RefreshCw className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Rebalance</span>
              </button>
              <button className="w-full flex items-center gap-3 p-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors text-left">
                <Target className="h-5 w-5 text-white" />
                <span className="text-white font-medium">Set Goals</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Holdings Tab */}
      {activeTab === 'holdings' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-800">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Your Holdings</h3>
              <div className="flex items-center gap-2">
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Filter className="h-4 w-4 text-gray-400" />
                </button>
                <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <RefreshCw className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="text-left p-4 text-gray-400 font-medium">Asset</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Holdings</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Price</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Value</th>
                  <th className="text-left p-4 text-gray-400 font-medium">24h Change</th>
                  <th className="text-left p-4 text-gray-400 font-medium">Allocation</th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset) => (
                  <tr key={asset.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
                          {asset.logo}
                        </div>
                        <div>
                          <p className="text-white font-medium">{asset.name}</p>
                          <p className="text-gray-400 text-sm">{asset.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-white font-medium">{asset.amount.toFixed(4)}</p>
                      <p className="text-gray-400 text-sm">{asset.symbol}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-white font-medium">${asset.price.toLocaleString()}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-white font-medium">
                        {isBalanceVisible ? `$${asset.value.toLocaleString()}` : '••••••'}
                      </p>
                    </td>
                    <td className="p-4">
                      <span className={`font-medium flex items-center gap-1 ${
                        asset.change24h >= 0 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {asset.change24h >= 0 ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                        {Math.abs(asset.change24h)}%
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium">{asset.allocation}%</span>
                        <div className="w-16 bg-gray-800 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                            style={{ width: `${asset.allocation}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      )}

      {/* Performance Tab */}
      {activeTab === 'performance' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
            <select
              value={selectedTimeframe}
              onChange={(e) => setSelectedTimeframe(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
            >
              <option value="24h">24 Hours</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="90d">90 Days</option>
              <option value="1y">1 Year</option>
            </select>
          </div>
          
          <div className="space-y-4">
            {performanceHistory.map((data, index) => (
              <div key={data.date} className="flex items-center justify-between">
                <span className="text-gray-400">{new Date(data.date).toLocaleDateString()}</span>
                <div className="flex items-center gap-4">
                  <span className="text-white font-medium">
                    {isBalanceVisible ? `$${data.value.toLocaleString()}` : '••••••'}
                  </span>
                  <div className="w-32 bg-gray-800 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${(data.value / Math.max(...performanceHistory.map(p => p.value))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Recommendations Tab */}
      {activeTab === 'recommendations' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${
                  rec.priority === 'high' ? 'bg-red-500/20' :
                  rec.priority === 'medium' ? 'bg-yellow-500/20' :
                  'bg-blue-500/20'
                }`}>
                  {rec.type === 'rebalance' && <Target className={`h-5 w-5 ${
                    rec.priority === 'high' ? 'text-red-400' :
                    rec.priority === 'medium' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`} />}
                  {rec.type === 'opportunity' && <Zap className={`h-5 w-5 ${
                    rec.priority === 'high' ? 'text-red-400' :
                    rec.priority === 'medium' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`} />}
                  {rec.type === 'alert' && <AlertCircle className={`h-5 w-5 ${
                    rec.priority === 'high' ? 'text-red-400' :
                    rec.priority === 'medium' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`} />}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-semibold">{rec.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      rec.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                      rec.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {rec.priority.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{rec.description}</p>
                  <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
                    {rec.action}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default InvestmentPortfolio