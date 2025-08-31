'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Activity, 
  TrendingUp, 
  AlertTriangle, 
  Users, 
  DollarSign, 
  Globe, 
  Zap,
  RefreshCw,
  Clock,
  CheckCircle2,
  XCircle,
  Server,
  Database,
  Wifi,
  Shield,
  BarChart3,
  Bell
} from 'lucide-react'

const RealtimeMonitoring = () => {
  const [systemHealth, setSystemHealth] = useState(98.5)
  const [activeUsers, setActiveUsers] = useState(247)
  const [transactionsPerSecond, setTransactionsPerSecond] = useState(12.5)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemHealth(prev => Math.max(95, Math.min(100, prev + (Math.random() - 0.5) * 2)))
      setActiveUsers(prev => Math.max(200, Math.min(500, prev + Math.floor((Math.random() - 0.5) * 20))))
      setTransactionsPerSecond(prev => Math.max(5, Math.min(25, prev + (Math.random() - 0.5) * 3)))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const systemMetrics = [
    {
      title: 'System Health',
      value: `${systemHealth.toFixed(1)}%`,
      icon: <Zap className="h-6 w-6" />,
      color: systemHealth > 97 ? 'emerald' : systemHealth > 95 ? 'yellow' : 'red',
      trend: systemHealth > 97 ? '+0.2%' : '-0.1%'
    },
    {
      title: 'Active Users',
      value: activeUsers.toString(),
      icon: <Users className="h-6 w-6" />,
      color: 'blue',
      trend: '+8.5%'
    },
    {
      title: 'TPS',
      value: transactionsPerSecond.toFixed(1),
      icon: <Activity className="h-6 w-6" />,
      color: 'purple',
      trend: '+12.3%'
    },
    {
      title: 'Revenue/Hour',
      value: '$2,847',
      icon: <DollarSign className="h-6 w-6" />,
      color: 'cyan',
      trend: '+18.7%'
    }
  ]

  const serverStatus = [
    { name: 'Web Server', status: 'online', load: 34, region: 'US-East' },
    { name: 'API Gateway', status: 'online', load: 67, region: 'US-West' },
    { name: 'Database Primary', status: 'online', load: 23, region: 'EU-West' },
    { name: 'Database Replica', status: 'warning', load: 89, region: 'AP-South' },
    { name: 'Trading Engine', status: 'online', load: 45, region: 'US-East' },
    { name: 'Analytics Service', status: 'online', load: 56, region: 'EU-Central' }
  ]

  const realtimeAlerts = [
    {
      id: 1,
      type: 'warning',
      message: 'Database replica showing high CPU usage (89%)',
      timestamp: '2 min ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'success',
      message: 'Trading engine performance optimization completed',
      timestamp: '15 min ago',
      severity: 'low'
    },
    {
      id: 3,
      type: 'info',
      message: 'New user registration peak detected',
      timestamp: '28 min ago',
      severity: 'low'
    },
    {
      id: 4,
      type: 'error',
      message: 'Failed payment attempt from suspicious IP detected',
      timestamp: '1 hour ago',
      severity: 'high'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Real-time Monitoring</h2>
          <p className="text-gray-400 mt-1">Live system performance and health metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-lg">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">Live</span>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Real-time Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {systemMetrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 bg-${metric.color}-500/20 rounded-lg text-${metric.color}-400`}>
                {metric.icon}
              </div>
              <span className="text-emerald-400 text-sm font-medium">{metric.trend}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{metric.value}</h3>
            <p className="text-gray-400 text-sm">{metric.title}</p>
          </motion.div>
        ))}
      </div>

      {/* Server Status Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Server Status</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              <span className="text-emerald-400 text-sm">All Systems Operational</span>
            </div>
          </div>
          
          <div className="space-y-4">
            {serverStatus.map((server, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${
                    server.status === 'online' ? 'bg-emerald-500/20' :
                    server.status === 'warning' ? 'bg-yellow-500/20' :
                    'bg-red-500/20'
                  }`}>
                    <Server className={`h-4 w-4 ${
                      server.status === 'online' ? 'text-emerald-400' :
                      server.status === 'warning' ? 'text-yellow-400' :
                      'text-red-400'
                    }`} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{server.name}</p>
                    <p className="text-gray-400 text-sm">{server.region}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-white text-sm">Load: {server.load}%</p>
                    <div className="w-16 bg-gray-700 rounded-full h-1 mt-1">
                      <div 
                        className={`h-1 rounded-full ${
                          server.load > 80 ? 'bg-red-400' :
                          server.load > 60 ? 'bg-yellow-400' :
                          'bg-emerald-400'
                        }`}
                        style={{ width: `${server.load}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    server.status === 'online' ? 'bg-emerald-500/20 text-emerald-400' :
                    server.status === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {server.status.charAt(0).toUpperCase() + server.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Alerts */}
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Live Alerts</h3>
            <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">View All</button>
          </div>
          
          <div className="space-y-4">
            {realtimeAlerts.map((alert) => (
              <div key={alert.id} className={`p-4 rounded-lg border ${
                alert.type === 'error' ? 'bg-red-500/5 border-red-500/20' :
                alert.type === 'warning' ? 'bg-yellow-500/5 border-yellow-500/20' :
                alert.type === 'success' ? 'bg-emerald-500/5 border-emerald-500/20' :
                'bg-blue-500/5 border-blue-500/20'
              }`}>
                <div className="flex items-start gap-3">
                  <div className={`p-1 rounded-full ${
                    alert.type === 'error' ? 'bg-red-500/20' :
                    alert.type === 'warning' ? 'bg-yellow-500/20' :
                    alert.type === 'success' ? 'bg-emerald-500/20' :
                    'bg-blue-500/20'
                  }`}>
                    {alert.type === 'error' && <XCircle className="h-4 w-4 text-red-400" />}
                    {alert.type === 'warning' && <AlertTriangle className="h-4 w-4 text-yellow-400" />}
                    {alert.type === 'success' && <CheckCircle2 className="h-4 w-4 text-emerald-400" />}
                    {alert.type === 'info' && <Bell className="h-4 w-4 text-blue-400" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{alert.message}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-400 text-xs">{alert.timestamp}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        alert.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                        alert.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {alert.severity.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Network Traffic</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Incoming</span>
              <span className="text-emerald-400 font-medium">2.4 Gbps</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Outgoing</span>
              <span className="text-blue-400 font-medium">1.8 Gbps</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Peak Today</span>
              <span className="text-purple-400 font-medium">3.2 Gbps</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Database Performance</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Queries/sec</span>
              <span className="text-emerald-400 font-medium">1,247</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Avg Response</span>
              <span className="text-blue-400 font-medium">23ms</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Active Connections</span>
              <span className="text-purple-400 font-medium">89</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Security Events</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Blocked IPs</span>
              <span className="text-red-400 font-medium">23</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Failed Logins</span>
              <span className="text-yellow-400 font-medium">7</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Active Alerts</span>
              <span className="text-orange-400 font-medium">{realtimeAlerts.filter(a => a.severity === 'high').length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RealtimeMonitoring