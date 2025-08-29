"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'
import {
  BookOpen,
  TrendingUp,
  BarChart3,
  Calendar,
  Clock,
  User,
  Eye,
  MessageCircle,
  Share2,
  Bookmark,
  Bell,
  Search,
  Filter,
  ArrowRight,
  Target,
  Globe,
  Award,
  Zap
} from 'lucide-react'

interface Article {
  id: string
  title: string
  excerpt: string
  author: string
  publishDate: string
  readTime: string
  category: string
  featured: boolean
  views: string
  comments: number
  image?: string
  tags: string[]
}

const featuredArticles: Article[] = [
  {
    id: '1',
    title: 'Bitcoin ETF Approvals Signal Institutional Crypto Adoption Surge',
    excerpt: 'Major institutional players are embracing Bitcoin ETFs, signaling a new era of mainstream crypto adoption with significant implications for market dynamics.',
    author: 'Sarah Chen, Senior Analyst',
    publishDate: '2025-01-20',
    readTime: '8 min read',
    category: 'Market Analysis',
    featured: true,
    views: '12.5K',
    comments: 47,
    tags: ['Bitcoin', 'ETF', 'Institutional', 'Regulation']
  },
  {
    id: '2',
    title: 'DeFi Yields Surge as Staking Rewards Reach New Highs',
    excerpt: 'Decentralized finance protocols are offering unprecedented returns as institutional money flows into staking and yield farming opportunities.',
    author: 'Michael Rodriguez, DeFi Strategist',
    publishDate: '2025-01-19',
    readTime: '6 min read',
    category: 'DeFi Insights',
    featured: true,
    views: '8.3K',
    comments: 29,
    tags: ['DeFi', 'Staking', 'Yields', 'Protocols']
  },
  {
    id: '3',
    title: 'Central Bank Digital Currencies: The Global Implementation Roadmap',
    excerpt: 'An in-depth analysis of CBDC development across major economies and the potential impact on traditional banking and cryptocurrency markets.',
    author: 'Dr. Elena Vasquez, Policy Expert',
    publishDate: '2025-01-18',
    readTime: '12 min read',
    category: 'Policy & Regulation',
    featured: false,
    views: '15.7K',
    comments: 63,
    tags: ['CBDC', 'Policy', 'Banking', 'Government']
  }
]

export default function InsiderPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <CryptoTicker />
      <AIChatbot />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              CoinBank Insider
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert market insights, analysis, and research from our team of financial professionals.
              Stay ahead of the markets with exclusive content and data-driven perspectives.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">250+</div>
                <div className="text-muted-foreground">Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50K+</div>
                <div className="text-muted-foreground">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Daily</div>
                <div className="text-muted-foreground">Updates</div>
              </div>
            </div>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-2xl p-6 mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or authors..."
                  className="w-full pl-10 pr-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-indigo-500/50 focus:outline-none"
                />
              </div>
              <div className="flex space-x-2">
                <select className="px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-indigo-500/50 focus:outline-none">
                  <option>All Categories</option>
                  <option>Market Analysis</option>
                  <option>DeFi Insights</option>
                  <option>Policy & Regulation</option>
                  <option>Technology</option>
                </select>
                <button className="btn-secondary">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </button>
                <button className="btn-secondary">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground mb-12">Featured Articles</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-indigo-500/20 text-indigo-400 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 hover:text-indigo-400 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-foreground">{article.author}</div>
                        <div className="text-xs text-muted-foreground">{article.publishDate}</div>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">{article.readTime}</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span>{article.comments}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Bookmark className="w-4 h-4" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-secondary/20 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {article.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-secondary/20 text-muted-foreground px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          {/* Market Insights Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-foreground mb-8">Today's Market Insights</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Bitcoin Breaks $120K Resistance',
                    summary: 'Technical analysis suggests further upside potential with institutional buying pressure.',
                    time: '2 hours ago',
                    impact: 'High',
                    type: 'Breaking'
                  },
                  {
                    title: 'Ethereum 2.0 Staking Yields Hit 8.5%',
                    summary: 'Rising staking rewards as network participation increases following Shanghai upgrade.',
                    time: '4 hours ago',
                    impact: 'Medium',
                    type: 'Analysis'
                  },
                  {
                    title: 'DeFi TVL Surpasses $200B Milestone',
                    summary: 'Total value locked in DeFi protocols reaches new all-time high amid institutional adoption.',
                    time: '6 hours ago',
                    impact: 'High',
                    type: 'Data'
                  }
                ].map((insight, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (0.1 * index) }}
                    className="glass-effect rounded-xl p-6 hover-lift cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          insight.type === 'Breaking' ? 'bg-red-500/20 text-red-400' :
                          insight.type === 'Analysis' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-green-500/20 text-green-400'
                        }`}>
                          {insight.type}
                        </span>
                        <span className="text-xs text-muted-foreground">{insight.time}</span>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        insight.impact === 'High' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {insight.impact} Impact
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
                    <p className="text-sm text-muted-foreground">{insight.summary}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Trending Topics */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-6">Trending Topics</h3>
                <div className="space-y-4">
                  {[
                    { topic: 'Bitcoin ETF', mentions: '2.4K' },
                    { topic: 'Ethereum Staking', mentions: '1.8K' },
                    { topic: 'DeFi Yields', mentions: '1.2K' },
                    { topic: 'Layer 2 Solutions', mentions: '934' },
                    { topic: 'CBDC Development', mentions: '756' }
                  ].map((trend, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-foreground">{trend.topic}</span>
                      <span className="text-sm text-indigo-400">{trend.mentions}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-4">Daily Newsletter</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get market insights delivered to your inbox every morning
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-indigo-500/50 focus:outline-none"
                  />
                  <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                    Subscribe Now
                  </button>
                </div>
              </div>

              {/* Expert Authors */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-lg font-bold text-foreground mb-6">Expert Authors</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Sarah Chen', role: 'Senior Market Analyst', articles: 47 },
                    { name: 'Michael Rodriguez', role: 'DeFi Strategist', articles: 32 },
                    { name: 'Dr. Elena Vasquez', role: 'Policy Expert', articles: 28 }
                  ].map((author, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-foreground">{author.name}</div>
                        <div className="text-xs text-muted-foreground">{author.role}</div>
                      </div>
                      <div className="text-xs text-indigo-400">{author.articles} articles</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-3xl p-12"
          >
            <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Stay Ahead of the Markets
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who rely on CoinBank Insider for expert market
              analysis and exclusive research insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Subscribe to Insider
                <Bell className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Browse All Articles
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
