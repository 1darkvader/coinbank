'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Edit3, 
  Trash2, 
  Plus, 
  Search, 
  Filter,
  Save,
  X,
  Eye,
  Calendar,
  User,
  Clock,
  CheckCircle2,
  AlertCircle,
  Settings,
  Globe,
  Bell,
  Mail,
  MessageSquare,
  Bookmark,
  Tag,
  Upload,
  Download
} from 'lucide-react'

interface ContentItem {
  id: string
  title: string
  type: 'page' | 'announcement' | 'policy' | 'faq' | 'blog'
  content: string
  status: 'Published' | 'Draft' | 'Archived'
  author: string
  lastModified: string
  publishDate: string
  views: number
  category: string
}

interface Announcement {
  id: string
  title: string
  message: string
  type: 'info' | 'warning' | 'success' | 'error'
  active: boolean
  startDate: string
  endDate: string
  targetUsers: 'all' | 'premium' | 'new'
}

const ContentManagement = () => {
  const [activeTab, setActiveTab] = useState('content')
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showEditor, setShowEditor] = useState(false)
  const [editingContent, setEditingContent] = useState<ContentItem | null>(null)

  const [contentItems, setContentItems] = useState<ContentItem[]>([
    {
      id: '1',
      title: 'Terms of Service',
      type: 'policy',
      content: 'Terms of Service content...',
      status: 'Published',
      author: 'Admin User',
      lastModified: '2024-06-25T10:30:00Z',
      publishDate: '2024-06-01T00:00:00Z',
      views: 15420,
      category: 'Legal'
    },
    {
      id: '2',
      title: 'Privacy Policy',
      type: 'policy',
      content: 'Privacy Policy content...',
      status: 'Published',
      author: 'Legal Team',
      lastModified: '2024-06-24T15:20:00Z',
      publishDate: '2024-06-01T00:00:00Z',
      views: 12350,
      category: 'Legal'
    },
    {
      id: '3',
      title: 'Getting Started Guide',
      type: 'page',
      content: 'Getting started guide content...',
      status: 'Draft',
      author: 'Support Team',
      lastModified: '2024-06-25T09:15:00Z',
      publishDate: '',
      views: 0,
      category: 'Support'
    },
    {
      id: '4',
      title: 'How to Trade Crypto',
      type: 'faq',
      content: 'Trading guide content...',
      status: 'Published',
      author: 'Trading Team',
      lastModified: '2024-06-23T11:45:00Z',
      publishDate: '2024-06-20T00:00:00Z',
      views: 8930,
      category: 'Education'
    },
    {
      id: '5',
      title: 'New Feature Announcement',
      type: 'announcement',
      content: 'We are excited to announce new features...',
      status: 'Published',
      author: 'Product Team',
      lastModified: '2024-06-25T08:00:00Z',
      publishDate: '2024-06-25T08:00:00Z',
      views: 2580,
      category: 'Product'
    }
  ])

  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: '1',
      title: 'System Maintenance',
      message: 'Scheduled maintenance will occur on Sunday from 2-4 AM UTC.',
      type: 'warning',
      active: true,
      startDate: '2024-06-25T00:00:00Z',
      endDate: '2024-06-30T23:59:59Z',
      targetUsers: 'all'
    },
    {
      id: '2',
      title: 'New Trading Pairs Available',
      message: 'We have added 5 new cryptocurrency trading pairs to our platform.',
      type: 'success',
      active: true,
      startDate: '2024-06-24T00:00:00Z',
      endDate: '2024-07-01T23:59:59Z',
      targetUsers: 'all'
    },
    {
      id: '3',
      title: 'Premium Features Available',
      message: 'Upgrade to Premium for advanced trading features and lower fees.',
      type: 'info',
      active: false,
      startDate: '2024-06-20T00:00:00Z',
      endDate: '2024-06-27T23:59:59Z',
      targetUsers: 'new'
    }
  ])

  // Filter content
  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.author.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter
    
    return matchesSearch && matchesStatus
  })

  const handleEditContent = (content: ContentItem) => {
    setEditingContent(content)
    setShowEditor(true)
  }

  const handleSaveContent = () => {
    if (editingContent) {
      setContentItems(prevItems =>
        prevItems.map(item =>
          item.id === editingContent.id
            ? { ...editingContent, lastModified: new Date().toISOString() }
            : item
        )
      )
      setShowEditor(false)
      setEditingContent(null)
    }
  }

  const handleDeleteContent = (contentId: string) => {
    setContentItems(prevItems => prevItems.filter(item => item.id !== contentId))
  }

  const toggleAnnouncement = (announcementId: string) => {
    setAnnouncements(prevAnnouncements =>
      prevAnnouncements.map(announcement =>
        announcement.id === announcementId
          ? { ...announcement, active: !announcement.active }
          : announcement
      )
    )
  }

  const ContentEditor = () => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-gray-900 rounded-2xl border border-gray-800 max-w-4xl w-full max-h-[90vh] overflow-hidden"
      >
        <div className="p-6 border-b border-gray-800 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Edit Content</h2>
            <p className="text-gray-400">{editingContent?.title}</p>
          </div>
          <button onClick={() => setShowEditor(false)} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <X className="h-6 w-6 text-gray-400" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh]">
          {editingContent && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={editingContent.title}
                    onChange={(e) => setEditingContent({ ...editingContent, title: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
                  <select
                    value={editingContent.category}
                    onChange={(e) => setEditingContent({ ...editingContent, category: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="Legal">Legal</option>
                    <option value="Support">Support</option>
                    <option value="Education">Education</option>
                    <option value="Product">Product</option>
                    <option value="Marketing">Marketing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Content</label>
                <textarea
                  value={editingContent.content}
                  onChange={(e) => setEditingContent({ ...editingContent, content: e.target.value })}
                  rows={12}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 resize-none"
                  placeholder="Enter your content here..."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                  <select
                    value={editingContent.status}
                    onChange={(e) => setEditingContent({ ...editingContent, status: e.target.value as any })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  >
                    <option value="Draft">Draft</option>
                    <option value="Published">Published</option>
                    <option value="Archived">Archived</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Publish Date</label>
                  <input
                    type="datetime-local"
                    value={editingContent.publishDate ? new Date(editingContent.publishDate).toISOString().slice(0, 16) : ''}
                    onChange={(e) => setEditingContent({ ...editingContent, publishDate: e.target.value ? new Date(e.target.value).toISOString() : '' })}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-800 flex justify-end gap-3">
          <button
            onClick={() => setShowEditor(false)}
            className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveContent}
            className="flex items-center gap-2 px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>
        </div>
      </motion.div>
    </div>
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Content Management</h2>
          <p className="text-gray-400 mt-1">Manage pages, announcements, and system content</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
          <Plus className="h-4 w-4" />
          Create Content
        </button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-1 bg-gray-900/50 p-1 rounded-xl border border-gray-800">
        {[
          { id: 'content', label: 'Content Pages', icon: <FileText className="h-4 w-4" /> },
          { id: 'announcements', label: 'Announcements', icon: <Bell className="h-4 w-4" /> },
          { id: 'templates', label: 'Email Templates', icon: <Mail className="h-4 w-4" /> }
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

      {/* Content Pages Tab */}
      {activeTab === 'content' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Search and Filters */}
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search content by title, author, or content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>

              <div className="flex gap-2">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-3 text-white"
                >
                  <option value="All">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>

                <button className="flex items-center gap-2 px-4 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors">
                  <Download className="h-4 w-4" />
                  Export
                </button>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid gap-6">
            {filteredContent.map((content) => (
              <div key={content.id} className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{content.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        content.status === 'Published' ? 'bg-emerald-500/20 text-emerald-400' :
                        content.status === 'Draft' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {content.status}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        content.type === 'page' ? 'bg-blue-500/20 text-blue-400' :
                        content.type === 'policy' ? 'bg-purple-500/20 text-purple-400' :
                        content.type === 'faq' ? 'bg-green-500/20 text-green-400' :
                        content.type === 'blog' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {content.type.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">{content.content}</p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {content.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {new Date(content.lastModified).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {content.views.toLocaleString()} views
                      </div>
                      <div className="flex items-center gap-1">
                        <Tag className="h-4 w-4" />
                        {content.category}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 ml-4">
                    <button 
                      onClick={() => handleEditContent(content)}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors" 
                      title="Edit"
                    >
                      <Edit3 className="h-4 w-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-700 rounded-lg transition-colors" title="Preview">
                      <Eye className="h-4 w-4 text-gray-400" />
                    </button>
                    <button 
                      onClick={() => handleDeleteContent(content.id)}
                      className="p-2 hover:bg-red-700 rounded-lg transition-colors" 
                      title="Delete"
                    >
                      <Trash2 className="h-4 w-4 text-red-400" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Announcements Tab */}
      {activeTab === 'announcements' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">System Announcements</h3>
              <button className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
                <Plus className="h-4 w-4" />
                New Announcement
              </button>
            </div>

            <div className="space-y-4">
              {announcements.map((announcement) => (
                <div key={announcement.id} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h4 className="text-white font-semibold">{announcement.title}</h4>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          announcement.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' :
                          announcement.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
                          announcement.type === 'error' ? 'bg-red-500/20 text-red-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {announcement.type.toUpperCase()}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          announcement.targetUsers === 'all' ? 'bg-purple-500/20 text-purple-400' :
                          announcement.targetUsers === 'premium' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {announcement.targetUsers === 'all' ? 'All Users' : 
                           announcement.targetUsers === 'premium' ? 'Premium' : 'New Users'}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{announcement.message}</p>
                      
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(announcement.startDate).toLocaleDateString()} - {new Date(announcement.endDate).toLocaleDateString()}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 ml-4">
                      <button
                        onClick={() => toggleAnnouncement(announcement.id)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          announcement.active ? 'bg-cyan-600' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            announcement.active ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                      
                      <button className="p-2 hover:bg-gray-600 rounded-lg transition-colors">
                        <Edit3 className="h-4 w-4 text-gray-400" />
                      </button>
                      
                      <button className="p-2 hover:bg-red-600 rounded-lg transition-colors">
                        <Trash2 className="h-4 w-4 text-red-400" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className={`flex items-center gap-2 ${
                      announcement.active ? 'text-emerald-400' : 'text-gray-500'
                    }`}>
                      {announcement.active ? <CheckCircle2 className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
                      {announcement.active ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Email Templates Tab */}
      {activeTab === 'templates' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="text-center py-12">
              <Mail className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Email Templates</h3>
              <p className="text-gray-400 mb-6">Manage automated email templates and notifications</p>
              <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors">
                <Plus className="h-4 w-4" />
                Create Template
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content Editor Modal */}
      {showEditor && <ContentEditor />}
    </div>
  )
}

export default ContentManagement