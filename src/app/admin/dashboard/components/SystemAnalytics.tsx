'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Activity, 
  DollarSign, 
  Globe,
  Calendar,
  Filter,
  Download,
  RefreshCw,
  ArrowUpRight,
  ArrowDownRight,
  Zap,
  Clock,
  Target,
  Smartphone,
  Monitor,
  Tablet
} from 'lucide-react'

const SystemAnalytics = () => {
  const [timeRange, setTimeRange] = useState('7d')
  const [activeTab, setActiveTab] = useState('overview')

  // Sample analytics data
  const overviewStats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+12.3%',
      trend: 'up',
      icon: <Users className="h-6 w-6" />,
      color: 'cyan'
    },
    {
      title: 'Active Users (24h)',
      value: '8,924',
      change: '+8.7%',
      trend: 'up',
      icon: <Activity className="h-6 w-6" />,
      color: 'emerald'
    },
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+18.2%',
      trend: 'up',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'purple'
    },
    {
      title: 'Transaction Volume',
      value: '$156.8M',
      change: '+25.4%',
      trend: 'up',
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'blue'
    }
  ]

  const userGrowthData = [
    { month: 'Jan', users: 8500, revenue: 1200000 },
    { month: 'Feb', users: 9200, revenue: 1350000 },
    { month: 'Mar', users: 9800, revenue: 1480000 },
    { month: 'Apr', users: 10500, revenue: 1620000 },
    { month: 'May', users: 11200, revenue: 1850000 },
    { month: 'Jun', users: 12847, revenue: 2400000 }
  ]

  const deviceStats = [
    { device: 'Desktop', users: 6423, percentage: 50 },
    { device: 'Mobile', users: 4520, percentage: 35.2 },
    { device: 'Tablet', users: 1904, percentage: 14.8 }
  ]

  const topCountries = [
    { country: 'United States', users: 3854, percentage: 30.0, flag: '🇺🇸' },
    { country: 'United Kingdom', users: 2568, percentage: 20.0, flag: '🇬🇧' },
    { country: 'Germany', users: 1927, percentage: 15.0, flag: '🇩🇪' },
    { country: 'Canada', users: 1284, percentage: 10.0, flag: '🇨🇦' },
    { country: 'Australia', users: 963, percentage: 7.5, flag: '🇦🇺' },
    { country: 'Others', users: 2251, percentage: 17.5, flag: '🌍' }
  ]

  const tradingPairs = [
    { pair: 'BTC/USD', volume: '$45.2M', change: '+15.3%', trades: 12847 },
    { pair: 'ETH/USD', volume: '$32.8M', change: '+12.7%', trades: 9632 },
    { pair: 'SOL/USD', volume: '$18.4M', change: '+8.9%', trades: 5421 },
    { pair: 'ADA/USD', volume: '$12.1M', change: '-2.4%', trades: 3204 },
    { pair: 'DOT/USD', volume: '$8.7M', change: '+4.2%', trades: 2145 }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">System Analytics</h2>
          <p className="text-gray-400 mt-1">Comprehensive platform performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm"
          >
            <option value="24h">Last 24 hours</option>
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'users', label: 'Users' },
          { id: 'trading', label: 'Trading' },
          { id: 'geography', label: 'Geography' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-cyan-600 text-white'
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
          className="space-y-6"
        >
          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`text-${stat.color}-400`}>
                    {stat.icon}
                  </div>
                  <span className={`text-sm font-medium flex items-center gap-1 ${
                    stat.trend === 'up' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                <p className="text-gray-400 text-sm">{stat.title}</p>
              </motion.div>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* User Growth Chart */}
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">User Growth</h3>
                <div className="flex items-center gap-2 text-emerald-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+12.3%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {userGrowthData.slice(-3).map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <span className="text-gray-400">{data.month}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-white font-medium">{data.users.toLocaleString()}</span>
                      <div className="w-24 bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${(data.users / 15000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-white">Revenue Trend</h3>
                <div className="flex items-center gap-2 text-emerald-400">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm font-medium">+18.2%</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {userGrowthData.slice(-3).map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <span className="text-gray-400">{data.month}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-white font-medium">${(data.revenue / 1000000).toFixed(1)}M</span>
                      <div className="w-24 bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                          style={{ width: `${(data.revenue / 3000000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-emerald-500/20 rounded-lg">
                  <Zap className="h-5 w-5 text-emerald-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">System Performance</h4>
                  <p className="text-gray-400 text-sm">Average response time</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">API Response</span>
                  <span className="text-emerald-400 font-medium">145ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Database Query</span>
                  <span className="text-emerald-400 font-medium">23ms</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Page Load</span>
                  <span className="text-emerald-400 font-medium">1.2s</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Activity className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Trading Activity</h4>
                  <p className="text-gray-400 text-sm">Last 24 hours</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Trades</span>
                  <span className="text-white font-medium">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Success Rate</span>
                  <span className="text-emerald-400 font-medium">99.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg Trade Size</span>
                  <span className="text-white font-medium">$2,341</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Target className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">User Engagement</h4>
                  <p className="text-gray-400 text-sm">Session metrics</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Avg Session</span>
                  <span className="text-white font-medium">24m 32s</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Bounce Rate</span>
                  <span className="text-yellow-400 font-medium">12.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Return Users</span>
                  <span className="text-emerald-400 font-medium">78.9%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Users Tab */}
      {activeTab === 'users' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* User Stats */}
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Device Breakdown</h3>
              <div className="space-y-4">
                {deviceStats.map((device, index) => (
                  <div key={device.device} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-gray-800 rounded-lg">
                        {device.device === 'Desktop' && <Monitor className="h-4 w-4 text-blue-400" />}
                        {device.device === 'Mobile' && <Smartphone className="h-4 w-4 text-emerald-400" />}
                        {device.device === 'Tablet' && <Tablet className="h-4 w-4 text-purple-400" />}
                      </div>
                      <span className="text-white">{device.device}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-gray-400">{device.users.toLocaleString()}</span>
                      <div className="w-20 bg-gray-800 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            device.device === 'Desktop' ? 'bg-blue-500' :
                            device.device === 'Mobile' ? 'bg-emerald-500' :
                            'bg-purple-500'
                          }`}
                          style={{ width: `${device.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-white font-medium w-12 text-right">{device.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">User Registration Trend</h3>
              <div className="space-y-4">
                {userGrowthData.slice(-4).map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <span className="text-gray-400">{data.month} 2024</span>
                    <div className="flex items-center gap-4">
                      <span className="text-white font-medium">{data.users.toLocaleString()}</span>
                      <div className="w-24 bg-gray-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                          style={{ width: `${(data.users / 15000) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Trading Tab */}
      {activeTab === 'trading' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Top Trading Pairs</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left py-3 text-gray-400 font-medium">Pair</th>
                    <th className="text-left py-3 text-gray-400 font-medium">24h Volume</th>
                    <th className="text-left py-3 text-gray-400 font-medium">24h Change</th>
                    <th className="text-left py-3 text-gray-400 font-medium">Trades</th>
                  </tr>
                </thead>
                <tbody>
                  {tradingPairs.map((pair, index) => (
                    <tr key={pair.pair} className="border-b border-gray-800/50">
                      <td className="py-4 text-white font-medium">{pair.pair}</td>
                      <td className="py-4 text-white">{pair.volume}</td>
                      <td className="py-4">
                        <span className={`font-medium ${
                          pair.change.startsWith('+') ? 'text-emerald-400' : 'text-red-400'
                        }`}>
                          {pair.change}
                        </span>
                      </td>
                      <td className="py-4 text-gray-300">{pair.trades.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}

      {/* Geography Tab */}
      {activeTab === 'geography' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Users by Country</h3>
            <div className="space-y-4">
              {topCountries.map((country, index) => (
                <div key={country.country} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-white">{country.country}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">{country.users.toLocaleString()}</span>
                    <div className="w-24 bg-gray-800 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                        style={{ width: `${country.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-white font-medium w-12 text-right">{country.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default SystemAnalytics