'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock,
  Key,
  UserX,
  Globe,
  Activity,
  Settings,
  Bell,
  Clock,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Search,
  Filter,
  MoreHorizontal,
  Smartphone,
  Monitor,
  MapPin,
  Ban,
  Flag
} from 'lucide-react'

interface SecurityEvent {
  id: string
  type: 'login_attempt' | 'failed_login' | 'suspicious_activity' | 'password_change' | 'api_access' | 'admin_action'
  user: string
  userEmail: string
  description: string
  timestamp: string
  ipAddress: string
  location: string
  device: string
  riskLevel: 'Low' | 'Medium' | 'High' | 'Critical'
  status: 'Active' | 'Resolved' | 'Investigating'
}

interface SecurityRule {
  id: string
  name: string
  description: string
  enabled: boolean
  type: 'rate_limit' | 'geo_block' | 'device_trust' | 'anomaly_detection'
  severity: 'Low' | 'Medium' | 'High'
}

const SecurityControls = () => {
  const [activeTab, setActiveTab] = useState('events')
  const [searchTerm, setSearchTerm] = useState('')
  const [riskFilter, setRiskFilter] = useState('All')
  const [showFilters, setShowFilters] = useState(false)

  const [securityEvents, setSecurityEvents] = useState<SecurityEvent[]>([
    {
      id: '1',
      type: 'failed_login',
      user: 'Unknown',
      userEmail: 'attacker@suspicious.com',
      description: 'Multiple failed login attempts from suspicious IP',
      timestamp: '2024-06-25T10:45:00Z',
      ipAddress: '192.168.1.100',
      location: 'Unknown Location',
      device: 'Automated Bot',
      riskLevel: 'Critical',
      status: 'Active'
    },
    {
      id: '2',
      type: 'login_attempt',
      user: 'Sarah Johnson',
      userEmail: 'sarah@example.com',
      description: 'Login from new device detected',
      timestamp: '2024-06-25T10:30:00Z',
      ipAddress: '203.0.113.45',
      location: 'New York, US',
      device: 'iPhone 15 Pro',
      riskLevel: 'Medium',
      status: 'Resolved'
    },
    {
      id: '3',
      type: 'suspicious_activity',
      user: 'Mike Chen',
      userEmail: 'mike@example.com',
      description: 'Unusual trading pattern detected',
      timestamp: '2024-06-25T10:15:00Z',
      ipAddress: '198.51.100.23',
      location: 'San Francisco, US',
      device: 'Chrome/Mac',
      riskLevel: 'High',
      status: 'Investigating'
    },
    {
      id: '4',
      type: 'password_change',
      user: 'Emma Davis',
      userEmail: 'emma@example.com',
      description: 'Password changed successfully',
      timestamp: '2024-06-25T09:45:00Z',
      ipAddress: '203.0.113.67',
      location: 'London, UK',
      device: 'Firefox/Windows',
      riskLevel: 'Low',
      status: 'Resolved'
    },
    {
      id: '5',
      type: 'admin_action',
      user: 'Admin User',
      userEmail: 'admin@coinbank.com',
      description: 'User account suspended by admin',
      timestamp: '2024-06-25T09:30:00Z',
      ipAddress: '203.0.113.89',
      location: 'Seattle, US',
      device: 'Chrome/Windows',
      riskLevel: 'Low',
      status: 'Resolved'
    }
  ])

  const [securityRules, setSecurityRules] = useState<SecurityRule[]>([
    {
      id: '1',
      name: 'Rate Limiting',
      description: 'Limit API requests per user per minute',
      enabled: true,
      type: 'rate_limit',
      severity: 'High'
    },
    {
      id: '2',
      name: 'Geo-blocking',
      description: 'Block access from high-risk countries',
      enabled: true,
      type: 'geo_block',
      severity: 'Medium'
    },
    {
      id: '3',
      name: 'Device Trust',
      description: 'Require verification for new devices',
      enabled: true,
      type: 'device_trust',
      severity: 'Medium'
    },
    {
      id: '4',
      name: 'Anomaly Detection',
      description: 'Detect unusual user behavior patterns',
      enabled: false,
      type: 'anomaly_detection',
      severity: 'High'
    }
  ])

  // Filter events
  const filteredEvents = securityEvents.filter(event => {
    const matchesSearch = event.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.userEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.ipAddress.includes(searchTerm)
    
    const matchesRisk = riskFilter === 'All' || event.riskLevel === riskFilter
    
    return matchesSearch && matchesRisk
  })

  const toggleRule = (ruleId: string) => {
    setSecurityRules(prevRules =>
      prevRules.map(rule =>
        rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule
      )
    )
  }

  const handleEventAction = (eventId: string, action: 'resolve' | 'investigate' | 'block') => {
    setSecurityEvents(prevEvents =>
      prevEvents.map(event => {
        if (event.id === eventId) {
          switch (action) {
            case 'resolve':
              return { ...event, status: 'Resolved' as const }
            case 'investigate':
              return { ...event, status: 'Investigating' as const }
            case 'block':
              return { ...event, status: 'Resolved' as const, riskLevel: 'Critical' as const }
            default:
              return event
          }
        }
        return event
      })
    )
  }

  // Security stats
  const securityStats = {
    totalEvents: securityEvents.length,
    criticalEvents: securityEvents.filter(e => e.riskLevel === 'Critical').length,
    activeEvents: securityEvents.filter(e => e.status === 'Active').length,
    resolvedToday: securityEvents.filter(e => e.status === 'Resolved').length,
    activeRules: securityRules.filter(r => r.enabled).length,
    totalRules: securityRules.length
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Security Controls</h2>
          <p className="text-gray-400 mt-1">Monitor security events and manage system protection</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={() => alert('Security alert sent to all admins!')}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <Shield className="h-4 w-4" />
            Security Alert
          </button>
          <button 
            onClick={() => {
              // Refresh security data
              alert('Security data refreshed!')
              // In a real app, you would refetch security events here
            }}
            className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh
          </button>
        </div>
      </div>

      {/* Security Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-500/20 rounded-lg">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Critical Events</p>
              <p className="text-2xl font-bold text-white">{securityStats.criticalEvents}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-yellow-500/20 rounded-lg">
              <Clock className="h-5 w-5 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Events</p>
              <p className="text-2xl font-bold text-white">{securityStats.activeEvents}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Resolved Today</p>
              <p className="text-2xl font-bold text-white">{securityStats.resolvedToday}</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-6 border border-gray-800">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Shield className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Rules</p>
              <p className="text-2xl font-bold text-white">{securityStats.activeRules}/{securityStats.totalRules}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
        {[
          { id: 'events', label: 'Security Events', icon: <AlertTriangle className="h-4 w-4" /> },
          { id: 'rules', label: 'Security Rules', icon: <Shield className="h-4 w-4" /> },
          { id: 'settings', label: 'Security Settings', icon: <Settings className="h-4 w-4" /> }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'bg-cyan-600 text-white'
                : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Security Events Tab */}
      {activeTab === 'events' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Search and Filters */}
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search events by user, email, or IP address..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>

              {/* Risk Filter */}
              <div className="flex gap-2">
                <select
                  value={riskFilter}
                  onChange={(e) => setRiskFilter(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-white"
                >
                  <option value="All">All Risk Levels</option>
                  <option value="Critical">Critical</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>

                <button className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  <Download className="h-4 w-4" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Events Table */}
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left p-4 text-gray-400 font-medium">Event</th>
                    <th className="text-left p-4 text-gray-400 font-medium">User</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Risk Level</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Location</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Time</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEvents.map((event) => (
                    <tr key={event.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className={`p-1.5 rounded-full ${
                              event.type === 'failed_login' ? 'bg-red-500/20' :
                              event.type === 'suspicious_activity' ? 'bg-orange-500/20' :
                              event.type === 'login_attempt' ? 'bg-blue-500/20' :
                              event.type === 'password_change' ? 'bg-green-500/20' :
                              'bg-gray-500/20'
                            }`}>
                              {event.type === 'failed_login' && <XCircle className="h-3 w-3 text-red-400" />}
                              {event.type === 'suspicious_activity' && <AlertTriangle className="h-3 w-3 text-orange-400" />}
                              {event.type === 'login_attempt' && <Eye className="h-3 w-3 text-blue-400" />}
                              {event.type === 'password_change' && <Key className="h-3 w-3 text-green-400" />}
                              {event.type === 'admin_action' && <Shield className="h-3 w-3 text-purple-400" />}
                            </div>
                            <span className="text-white font-medium capitalize">
                              {event.type.replace('_', ' ')}
                            </span>
                          </div>
                          <p className="text-gray-400 text-sm mt-1">{event.description}</p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div>
                          <div className="text-white font-medium">{event.user}</div>
                          <div className="text-gray-400 text-sm">{event.userEmail}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.riskLevel === 'Critical' ? 'bg-red-500/20 text-red-400' :
                          event.riskLevel === 'High' ? 'bg-orange-500/20 text-orange-400' :
                          event.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {event.riskLevel}
                        </span>
                      </td>
                      <td className="p-4">
                        <div>
                          <div className="text-white text-sm">{event.location}</div>
                          <div className="text-gray-400 text-xs">{event.ipAddress}</div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          event.status === 'Active' ? 'bg-red-500/20 text-red-400' :
                          event.status === 'Investigating' ? 'bg-yellow-500/20 text-yellow-400' :
                          'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {event.status}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400 text-sm">
                        {new Date(event.timestamp).toLocaleString()}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          {event.status === 'Active' && (
                            <>
                              <button 
                                onClick={() => handleEventAction(event.id, 'resolve')}
                                className="p-1.5 hover:bg-emerald-600/20 rounded transition-colors" 
                                title="Resolve"
                              >
                                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                              </button>
                              <button 
                                onClick={() => handleEventAction(event.id, 'investigate')}
                                className="p-1.5 hover:bg-yellow-600/20 rounded transition-colors" 
                                title="Investigate"
                              >
                                <Eye className="h-4 w-4 text-yellow-400" />
                              </button>
                              <button 
                                onClick={() => handleEventAction(event.id, 'block')}
                                className="p-1.5 hover:bg-red-600/20 rounded transition-colors" 
                                title="Block"
                              >
                                <Ban className="h-4 w-4 text-red-400" />
                              </button>
                            </>
                          )}
                          <button className="p-1.5 hover:bg-gray-700 rounded transition-colors" title="More Actions">
                            <MoreHorizontal className="h-4 w-4 text-gray-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Results Summary */}
            <div className="p-4 border-t border-gray-800 bg-gray-800/25">
              <p className="text-gray-400 text-sm">
                Showing {filteredEvents.length} of {securityEvents.length} events
              </p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Security Rules Tab */}
      {activeTab === 'rules' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Security Rules Configuration</h3>
              <button 
                onClick={() => alert('Add new security rule form would open here')}
                className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
              >
                <Shield className="h-4 w-4" />
                Add Rule
              </button>
            </div>

            <div className="grid gap-4">
              {securityRules.map((rule) => (
                <div key={rule.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${
                        rule.type === 'rate_limit' ? 'bg-blue-500/20' :
                        rule.type === 'geo_block' ? 'bg-red-500/20' :
                        rule.type === 'device_trust' ? 'bg-green-500/20' :
                        'bg-purple-500/20'
                      }`}>
                        {rule.type === 'rate_limit' && <Activity className="h-5 w-5 text-blue-400" />}
                        {rule.type === 'geo_block' && <Globe className="h-5 w-5 text-red-400" />}
                        {rule.type === 'device_trust' && <Smartphone className="h-5 w-5 text-green-400" />}
                        {rule.type === 'anomaly_detection' && <AlertTriangle className="h-5 w-5 text-purple-400" />}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{rule.name}</h4>
                        <p className="text-gray-400 text-sm">{rule.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        rule.severity === 'High' ? 'bg-red-500/20 text-red-400' :
                        rule.severity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {rule.severity}
                      </span>
                      
                      <button
                        onClick={() => toggleRule(rule.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          rule.enabled ? 'bg-cyan-600' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            rule.enabled ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className={`flex items-center gap-2 ${
                      rule.enabled ? 'text-emerald-400' : 'text-gray-500'
                    }`}>
                      {rule.enabled ? <CheckCircle2 className="h-4 w-4" /> : <XCircle className="h-4 w-4" />}
                      {rule.enabled ? 'Active' : 'Disabled'}
                    </span>
                    
                    <div className="flex items-center gap-2">
                      <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                        <Settings className="h-4 w-4 text-gray-400" />
                      </button>
                      <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Security Settings Tab */}
      {activeTab === 'settings' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Authentication Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Two-Factor Authentication</p>
                    <p className="text-gray-400 text-sm">Require 2FA for all admin accounts</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Session Timeout</p>
                    <p className="text-gray-400 text-sm">Auto logout after inactivity</p>
                  </div>
                  <select className="bg-gray-800 border border-gray-700 rounded px-3 py-1 text-white text-sm">
                    <option>30 minutes</option>
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>Never</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Password Policy</p>
                    <p className="text-gray-400 text-sm">Enforce strong password requirements</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
              <h3 className="text-lg font-semibold text-white mb-6">Monitoring Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Real-time Alerts</p>
                    <p className="text-gray-400 text-sm">Instant notifications for critical events</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Audit Logging</p>
                    <p className="text-gray-400 text-sm">Log all admin actions and changes</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-cyan-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-gray-400 text-sm">Send security alerts via email</p>
                  </div>
                  <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default SecurityControls