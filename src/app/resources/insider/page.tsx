"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'

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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <span className="text-4xl">📚</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              CoinBank Insider
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Expert market insights, analysis, and educational content from our team of
              financial professionals and industry experts.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">2M+</div>
                <div className="text-muted-foreground">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">500+</div>
                <div className="text-muted-foreground">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Daily</div>
                <div className="text-muted-foreground">Market Updates</div>
              </div>
            </div>
          </motion.div>

          {/* Featured Articles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">📰 Featured Articles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Market Analysis',
                  title: 'Bitcoin ETF Approval: Impact on Institutional Adoption',
                  excerpt: 'Analyzing the long-term implications of Bitcoin ETF approvals on institutional cryptocurrency adoption and market dynamics.',
                  author: 'Sarah Johnson, CEO',
                  readTime: '8 min read',
                  publishedAt: '2 hours ago',
                  image: '📈',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  category: 'Technology',
                  title: 'The Future of Layer 2 Scaling Solutions',
                  excerpt: 'Deep dive into Layer 2 technologies and their role in making blockchain networks more scalable and cost-effective.',
                  author: 'Michael Chen, CTO',
                  readTime: '12 min read',
                  publishedAt: '1 day ago',
                  image: '⚡',
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  category: 'Regulation',
                  title: 'Global Crypto Regulation: 2025 Outlook',
                  excerpt: 'Comprehensive analysis of upcoming regulatory changes across major markets and their impact on the crypto ecosystem.',
                  author: 'Emily Zhang, CCO',
                  readTime: '15 min read',
                  publishedAt: '2 days ago',
                  image: '⚖️',
                  color: 'from-emerald-500 to-green-600'
                }
              ].map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${article.color} rounded-xl flex items-center justify-center mb-4`}>
                    <span className="text-2xl">{article.image}</span>
                  </div>

                  <div className="mb-3">
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>

                  <div className="text-xs text-purple-400 mt-2">
                    {article.publishedAt}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Content Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {[
              {
                symbol: '📊',
                title: 'Market Research',
                description: 'In-depth analysis of market trends, price movements, and investment opportunities',
                count: '150+ Reports'
              },
              {
                symbol: '🎓',
                title: 'Educational Content',
                description: 'Learn about blockchain technology, DeFi, and cryptocurrency fundamentals',
                count: '200+ Guides'
              },
              {
                symbol: '📈',
                title: 'Trading Insights',
                description: 'Professional trading strategies and technical analysis from our experts',
                count: '100+ Strategies'
              },
              {
                symbol: '🌍',
                title: 'Global News',
                description: 'Breaking news and developments from the global cryptocurrency ecosystem',
                count: 'Daily Updates'
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-effect rounded-xl p-6 text-center hover-lift cursor-pointer"
              >
                <div className="text-4xl mb-4">{category.symbol}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-3">{category.description}</p>
                <div className="text-purple-400 font-medium text-sm">{category.count}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">📬 Stay Informed</h2>
                <p className="text-muted-foreground mb-6">
                  Get our weekly newsletter with market insights, analysis, and exclusive content
                  delivered to your inbox every Friday.
                </p>
                <div className="flex space-x-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground"
                  />
                  <button className="btn-primary px-6">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Join 50,000+ subscribers. Unsubscribe anytime.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-foreground">🎯 What You'll Get:</h3>
                {[
                  'Weekly market analysis and price predictions',
                  'Exclusive interviews with industry leaders',
                  'Early access to new CoinBank features',
                  'Educational content and tutorials'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-purple-400">•</span>
                    <span className="text-muted-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Podcasts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">🎙️ CoinBank Podcast</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  episode: 'Episode 45',
                  title: 'The Future of Central Bank Digital Currencies',
                  guest: 'Former Fed Governor Dr. Sarah Miller',
                  duration: '42 minutes',
                  listens: '25K+',
                  description: 'Deep dive into CBDCs and their potential impact on the global financial system.'
                },
                {
                  episode: 'Episode 44',
                  title: 'Institutional Crypto Adoption in 2025',
                  guest: 'BlackRock VP John Anderson',
                  duration: '38 minutes',
                  listens: '31K+',
                  description: 'How traditional asset managers are embracing cryptocurrency investments.'
                }
              ].map((podcast, index) => (
                <motion.div
                  key={podcast.episode}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (0.1 * index) }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <span className="text-xl">🎙️</span>
                    </div>
                    <div>
                      <div className="text-purple-400 text-sm">{podcast.episode}</div>
                      <div className="text-xs text-muted-foreground">{podcast.listens} listens</div>
                    </div>
                  </div>

                  <h3 className="font-bold text-foreground mb-2">{podcast.title}</h3>
                  <p className="text-purple-400 text-sm mb-2">Guest: {podcast.guest}</p>
                  <p className="text-muted-foreground text-sm mb-4">{podcast.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{podcast.duration}</span>
                    <button className="btn-secondary text-sm px-4 py-2">
                      ▶️ Listen Now
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-purple-500/10 via-indigo-500/10 to-blue-500/10 rounded-3xl p-12"
          >
            <span className="text-6xl mb-6 block">📚</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Access Premium Content
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Become a CoinBank customer to unlock exclusive research reports,
              advanced analytics, and direct access to our expert team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Open Account for Premium Access 🚀
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Browse Free Content
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
