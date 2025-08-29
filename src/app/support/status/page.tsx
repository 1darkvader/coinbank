"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Activity,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Clock,
  TrendingUp,
  Server,
  Database,
  Globe,
  Zap,
  Shield,
  Smartphone,
  Calendar,
  ArrowUp,
  ArrowDown,
  Minus
} from 'lucide-react'

const currentStatus = {
  overall: "operational",
  lastUpdated: "2 minutes ago"
}

const services = [
  {
    name: "Trading Platform",
    status: "operational",
    uptime: "99.98%",
    response: "45ms",
    description: "Buy/sell cryptocurrencies and view market data"
  },
  {
    name: "API Services",
    status: "operational", 
    uptime: "99.99%",
    response: "12ms",
    description: "REST API and WebSocket connections"
  },
  {
    name: "Mobile App",
    status: "operational",
    uptime: "99.95%",
    response: "78ms",
    description: "iOS and Android mobile applications"
  },
  {
    name: "Banking Services",
    status: "operational",
    uptime: "99.97%",
    response: "234ms",
    description: "Deposits, withdrawals, and transfers"
  },
  {
    name: "Authentication",
    status: "operational",
    uptime: "99.99%",
    response: "89ms",
    description: "User login and security services"
  },
  {
    name: "Support System",
    status: "degraded",
    uptime: "98.45%",
    response: "1.2s",
    description: "Customer support and help desk"
  }
]

const incidents = [
  {
    title: "API Rate Limiting Adjustments",
    description: "We've temporarily reduced API rate limits to ensure optimal performance during high trading volume.",
    status: "investigating",
    time: "23 minutes ago",
    severity: "minor",
    affected: ["API Services"]
  },
  {
    title: "Scheduled Maintenance Complete",
    description: "Database optimization and security updates have been successfully completed.",
    status: "resolved",
    time: "2 hours ago",
    severity: "maintenance",
    affected: ["Trading Platform", "Banking Services"]
  },
  {
    title: "Mobile App Login Issues",
    description: "Some users experienced intermittent login failures on mobile. Issue has been resolved.",
    status: "resolved",
    time: "6 hours ago",
    severity: "minor",
    affected: ["Mobile App", "Authentication"]
  }
]

const metrics = [
  {
    label: "Overall Uptime",
    value: "99.97%",
    change: "+0.02%",
    trend: "up",
    period: "30 days"
  },
  {
    label: "Avg Response Time", 
    value: "89ms",
    change: "-12ms",
    trend: "up",
    period: "24 hours"
  },
  {
    label: "Active Users",
    value: "156K",
    change: "+2.3%",
    trend: "up",
    period: "Live"
  },
  {
    label: "Incidents Resolved",
    value: "99.8%",
    change: "0%",
    trend: "stable",
    period: "30 days"
  }
]

function StatusIcon({ status }: { status: string }) {
  switch (status) {
    case 'operational':
      return <CheckCircle2 className="w-5 h-5 text-emerald-400" />
    case 'degraded':
      return <AlertTriangle className="w-5 h-5 text-yellow-400" />
    case 'outage':
      return <XCircle className="w-5 h-5 text-red-400" />
    default:
      return <Clock className="w-5 h-5 text-muted-foreground" />
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'operational':
      return 'text-emerald-400'
    case 'degraded':
      return 'text-yellow-400'
    case 'outage':
      return 'text-red-400'
    default:
      return 'text-muted-foreground'
  }
}

function getIncidentColor(severity: string) {
  switch (severity) {
    case 'critical':
      return 'border-red-500/30 bg-red-500/10'
    case 'major':
      return 'border-orange-500/30 bg-orange-500/10'
    case 'minor':
      return 'border-yellow-500/30 bg-yellow-500/10'
    case 'maintenance':
      return 'border-blue-500/30 bg-blue-500/10'
    default:
      return 'border-border/30 bg-secondary/20'
  }
}

export default function StatusPage() {
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
              <Activity className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              System Status
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real-time status and uptime monitoring for all CoinBank services.
              Stay informed about any service disruptions or maintenance activities.
            </p>
            
            {/* Overall Status */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-12 inline-flex items-center space-x-3 bg-emerald-500/20 border border-emerald-500/30 rounded-2xl px-8 py-4"
            >
              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              <div className="text-left">
                <div className="text-lg font-bold text-emerald-400">All Systems Operational</div>
                <div className="text-sm text-muted-foreground">Last updated {currentStatus.lastUpdated}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* System Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (0.05 * index) }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">{metric.label}</h3>
                  <div className="flex items-center space-x-1">
                    {metric.trend === 'up' && <ArrowUp className="w-3 h-3 text-emerald-400" />}
                    {metric.trend === 'down' && <ArrowDown className="w-3 h-3 text-red-400" />}
                    {metric.trend === 'stable' && <Minus className="w-3 h-3 text-yellow-400" />}
                    <span className={`text-xs ${
                      metric.trend === 'up' ? 'text-emerald-400' : 
                      metric.trend === 'down' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                <div className="text-xs text-muted-foreground">{metric.period}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Service Status</h2>
            <div className="glass-effect rounded-2xl p-8">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (0.05 * index) }}
                    className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <StatusIcon status={service.status} />
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-6 text-sm">
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Uptime</div>
                        <div className="font-medium text-emerald-400">{service.uptime}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xs text-muted-foreground">Response</div>
                        <div className="font-medium text-blue-400">{service.response}</div>
                      </div>
                      <div className={`text-center capitalize ${getStatusColor(service.status)}`}>
                        <div className="text-xs text-muted-foreground">Status</div>
                        <div className="font-medium">{service.status}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Incidents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-foreground">Recent Incidents</h2>
              <button className="btn-secondary">
                View All Incidents
              </button>
            </div>
            <div className="space-y-4">
              {incidents.map((incident, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className={`glass-effect border rounded-xl p-6 ${getIncidentColor(incident.severity)}`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{incident.title}</h3>
                      <p className="text-sm text-muted-foreground">{incident.time}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        incident.status === 'resolved' 
                          ? 'bg-emerald-500/20 text-emerald-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {incident.status}
                      </span>
                      <span className="text-xs bg-secondary/40 text-muted-foreground px-2 py-1 rounded-full">
                        {incident.severity}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{incident.description}</p>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-muted-foreground">Affected services:</span>
                    {incident.affected.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Subscribe to Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12"
          >
            <Activity className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to status updates and get notified about any service disruptions
              or maintenance activities that might affect your trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-blue-500/50 focus:outline-none"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}