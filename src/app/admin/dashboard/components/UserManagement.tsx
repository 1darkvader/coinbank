'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Eye, 
  Edit3, 
  UserCheck, 
  UserX, 
  Shield, 
  Ban, 
  Mail, 
  Phone,
  Calendar,
  DollarSign,
  Activity,
  ChevronDown,
  X,
  Check,
  AlertTriangle,
  Download,
  Plus
} from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  phone: string
  status: 'Active' | 'Pending' | 'Suspended' | 'Banned'
  role: 'User' | 'Premium' | 'VIP'
  balance: string
  totalTransactions: number
  lastActive: string
  joinedDate: string
  kycStatus: 'Verified' | 'Pending' | 'Rejected' | 'Not Started'
  riskLevel: 'Low' | 'Medium' | 'High'
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1 555-0123',
      status: 'Active',
      role: 'User',
      balance: '$25,450.00',
      totalTransactions: 47,
      lastActive: '2 hours ago',
      joinedDate: '2024-05-15',
      kycStatus: 'Verified',
      riskLevel: 'Low'
    }
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [roleFilter, setRoleFilter] = useState('All')
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const [showUserModal, setShowUserModal] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  // Filter users based on search and filters
  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'All' || user.status === statusFilter
    const matchesRole = roleFilter === 'All' || user.role === roleFilter
    
    return matchesSearch && matchesStatus && matchesRole
  })

  const handleUserAction = (userId: string, action: string) => {
    setUsers(prevUsers => 
      prevUsers.map(user => {
        if (user.id === userId) {
          switch (action) {
            case 'activate':
              return { ...user, status: 'Active' as const }
            case 'suspend':
              return { ...user, status: 'Suspended' as const }
            case 'ban':
              return { ...user, status: 'Banned' as const }
            default:
              return user
          }
        }
        return user
      })
    )
  }

  const UserModal = ({ user, onClose }: { user: User, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900 rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">{user.name.charAt(0)}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{user.name}</h2>
              <p className="text-gray-400">{user.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Basic Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <Mail className="h-5 w-5 text-cyan-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-white">{user.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <Phone className="h-5 w-5 text-green-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <p className="text-white">{user.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <Calendar className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Joined Date</p>
                      <p className="text-white">{new Date(user.joinedDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Status */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Account Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      user.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      user.status === 'Suspended' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">Role</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.role === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                      user.role === 'Premium' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {user.role}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                    <span className="text-gray-300">KYC Status</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      user.kycStatus === 'Verified' ? 'bg-emerald-500/20 text-emerald-400' :
                      user.kycStatus === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      user.kycStatus === 'Rejected' ? 'bg-red-500/20 text-red-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {user.kycStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Financial Overview</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <DollarSign className="h-5 w-5 text-emerald-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Current Balance</p>
                      <p className="text-white text-xl font-semibold">{user.balance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <Activity className="h-5 w-5 text-blue-400" />
                    <div>
                      <p className="text-gray-400 text-sm">Total Transactions</p>
                      <p className="text-white text-xl font-semibold">{user.totalTransactions}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg">
                    <AlertTriangle className={`h-5 w-5 ${
                      user.riskLevel === 'High' ? 'text-red-400' :
                      user.riskLevel === 'Medium' ? 'text-yellow-400' :
                      'text-emerald-400'
                    }`} />
                    <div>
                      <p className="text-gray-400 text-sm">Risk Level</p>
                      <p className={`text-lg font-semibold ${
                        user.riskLevel === 'High' ? 'text-red-400' :
                        user.riskLevel === 'Medium' ? 'text-yellow-400' :
                        'text-emerald-400'
                      }`}>
                        {user.riskLevel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Admin Actions */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Admin Actions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {user.status !== 'Active' && (
                    <button
                      onClick={() => handleUserAction(user.id, 'activate')}
                      className="flex items-center justify-center gap-2 p-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                    >
                      <UserCheck className="h-4 w-4" />
                      Activate
                    </button>
                  )}
                  {user.status === 'Active' && (
                    <button
                      onClick={() => handleUserAction(user.id, 'suspend')}
                      className="flex items-center justify-center gap-2 p-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg transition-colors"
                    >
                      <UserX className="h-4 w-4" />
                      Suspend
                    </button>
                  )}
                  <button
                    onClick={() => handleUserAction(user.id, 'ban')}
                    className="flex items-center justify-center gap-2 p-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
                  >
                    <Ban className="h-4 w-4" />
                    Ban User
                  </button>
                  <button 
                    onClick={() => alert(`Email sent to ${user.email}`)}
                    className="flex items-center justify-center gap-2 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Send Email
                  </button>
                  <button 
                    onClick={() => alert(`2FA reset for ${user.name}`)}
                    className="flex items-center justify-center gap-2 p-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                  >
                    <Shield className="h-4 w-4" />
                    Reset 2FA
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">User Management</h2>
          <p className="text-gray-400 mt-1">Manage user accounts, permissions, and settings</p>
        </div>
        <button 
          onClick={() => alert('Create new user form would open here')}
          className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg font-medium transition-colors"
        >
          <Plus className="h-4 w-4" />
          Add User
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
            />
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <Filter className="h-4 w-4" />
            Filters
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>

          <button 
            onClick={() => alert('Export user data feature would work here')}
            className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>

        {/* Expandable Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-700 flex flex-wrap gap-4"
          >
            <div>
              <label className="block text-sm text-gray-400 mb-2">Status</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="All">All Status</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Suspended">Suspended</option>
                <option value="Banned">Banned</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-2">Role</label>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white"
              >
                <option value="All">All Roles</option>
                <option value="User">User</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
          </motion.div>
        )}
      </div>

      {/* Users Table */}
      <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800/50">
              <tr>
                <th className="text-left p-4 text-gray-400 font-medium">User</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium">Role</th>
                <th className="text-left p-4 text-gray-400 font-medium">Balance</th>
                <th className="text-left p-4 text-gray-400 font-medium">Transactions</th>
                <th className="text-left p-4 text-gray-400 font-medium">Last Active</th>
                <th className="text-left p-4 text-gray-400 font-medium">KYC</th>
                <th className="text-left p-4 text-gray-400 font-medium">Risk</th>
                <th className="text-left p-4 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold text-sm">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{user.name}</div>
                        <div className="text-gray-400 text-sm">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.status === 'Active' ? 'bg-emerald-500/20 text-emerald-400' :
                      user.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      user.status === 'Suspended' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.role === 'VIP' ? 'bg-purple-500/20 text-purple-400' :
                      user.role === 'Premium' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-white font-medium">{user.balance}</td>
                  <td className="p-4 text-gray-300">{user.totalTransactions}</td>
                  <td className="p-4 text-gray-400 text-sm">{user.lastActive}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.kycStatus === 'Verified' ? 'bg-emerald-500/20 text-emerald-400' :
                      user.kycStatus === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                      user.kycStatus === 'Rejected' ? 'bg-red-500/20 text-red-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {user.kycStatus}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.riskLevel === 'High' ? 'bg-red-500/20 text-red-400' :
                      user.riskLevel === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {user.riskLevel}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => {
                          setSelectedUser(user)
                          setShowUserModal(true)
                        }}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors" 
                        title="View Details"
                      >
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                      <button 
                        onClick={() => alert(`Editing user: ${user.name}`)}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors" 
                        title="Edit User"
                      >
                        <Edit3 className="h-4 w-4 text-gray-400" />
                      </button>
                      <button 
                        onClick={() => alert(`More actions for: ${user.name}`)}
                        className="p-1.5 hover:bg-gray-700 rounded transition-colors" 
                        title="More Actions"
                      >
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
            Showing {filteredUsers.length} of {users.length} users
          </p>
        </div>
      </div>

      {/* User Details Modal */}
      {showUserModal && selectedUser && (
        <UserModal 
          user={selectedUser} 
          onClose={() => {
            setShowUserModal(false)
            setSelectedUser(null)
          }} 
        />
      )}
    </div>
  )
}

export default UserManagement