"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Newspaper,
  Calendar,
  ExternalLink,
  Download,
  Award,
  TrendingUp,
  Users,
  Globe,
  Mail,
  Phone,
  FileText,
  ArrowRight,
  Eye,
  Star
} from 'lucide-react'

const pressReleases = [
  {
    title: "CoinBank Announces $200M Series C Funding Round Led by Andreessen Horowitz",
    date: "March 15, 2024",
    category: "Funding",
    excerpt: "CoinBank raises $200M in Series C funding to accelerate global expansion and product innovation in cryptocurrency banking services.",
    link: "#",
    featured: true
  },
  {
    title: "CoinBank Launches Institutional Custody Services for Digital Assets",
    date: "February 28, 2024", 
    category: "Product Launch",
    excerpt: "New custody platform offers institutional-grade security for corporate and institutional clients managing large cryptocurrency portfolios.",
    link: "#"
  },
  {
    title: "CoinBank Receives Banking License Approval in European Union",
    date: "February 10, 2024",
    category: "Regulatory",
    excerpt: "CoinBank becomes first cryptocurrency-focused bank to receive full banking license from EU regulatory authorities.",
    link: "#"
  },
  {
    title: "CoinBank Surpasses $10 Billion in Assets Under Management",
    date: "January 25, 2024",
    category: "Milestone",
    excerpt: "Platform reaches major milestone with over $10B in customer assets and 2 million active users worldwide.",
    link: "#"
  },
  {
    title: "CoinBank Partners with Visa for Global Crypto Card Program",
    date: "January 8, 2024",
    category: "Partnership",
    excerpt: "Strategic partnership with Visa enables CoinBank customers to spend cryptocurrency at over 50 million merchants worldwide.",
    link: "#"
  },
  {
    title: "CoinBank Introduces AI-Powered Trading Assistant",
    date: "December 20, 2023",
    category: "Innovation",
    excerpt: "New AI assistant provides personalized trading insights and portfolio management recommendations for CoinBank users.",
    link: "#"
  }
]

const mediaKit = [
  {
    title: "Company Logos",
    description: "High-resolution CoinBank logos in various formats",
    format: "PNG, SVG, EPS",
    size: "2.3 MB",
    icon: FileText
  },
  {
    title: "Brand Guidelines", 
    description: "Complete brand identity and usage guidelines",
    format: "PDF",
    size: "5.1 MB",
    icon: Award
  },
  {
    title: "Executive Photos",
    description: "Professional headshots of key executives",
    format: "JPG",
    size: "8.7 MB", 
    icon: Users
  },
  {
    title: "Product Screenshots",
    description: "High-quality screenshots of platform features",
    format: "PNG",
    size: "12.4 MB",
    icon: Eye
  },
  {
    title: "Company Fact Sheet",
    description: "Key statistics and company information",
    format: "PDF",
    size: "1.2 MB",
    icon: TrendingUp
  },
  {
    title: "Awards & Recognition",
    description: "List of industry awards and achievements",
    format: "PDF",
    size: "3.5 MB",
    icon: Star
  }
]

const mediaContacts = [
  {
    name: "Sarah Mitchell",
    title: "Head of Communications",
    email: "press@coinbank.com",
    phone: "+1 (555) 123-4567",
    location: "New York"
  },
  {
    name: "James Chen", 
    title: "PR Manager - APAC",
    email: "press.apac@coinbank.com",
    phone: "+65 6789 0123",
    location: "Singapore"
  },
  {
    name: "Emma Thompson",
    title: "PR Manager - Europe",
    email: "press.eu@coinbank.com", 
    phone: "+44 20 7123 4567",
    location: "London"
  }
]

const coverage = [
  {
    publication: "TechCrunch",
    headline: "CoinBank's $200M Series C Signals Growing Confidence in Crypto Banking",
    date: "March 16, 2024",
    type: "Feature Article"
  },
  {
    publication: "The Wall Street Journal",
    headline: "Digital Banking Startup CoinBank Expands to European Markets",
    date: "February 12, 2024", 
    type: "News Report"
  },
  {
    publication: "Forbes",
    headline: "The Future of Banking: How CoinBank is Leading Digital Transformation",
    date: "January 30, 2024",
    type: "Profile"
  },
  {
    publication: "Bloomberg",
    headline: "CoinBank's AUM Crosses $10B Milestone in Record Time",
    date: "January 26, 2024",
    type: "Breaking News"
  },
  {
    publication: "Coindesk",
    headline: "CoinBank CEO Discusses Regulatory Clarity and Industry Growth",
    date: "December 15, 2023",
    type: "Interview"
  }
]

export default function PressPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Newspaper className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Press & Media
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest news, announcements, and media coverage from CoinBank. 
              Access our press releases, media kit, and contact information for press inquiries.
            </p>
          </motion.div>

          {/* Latest Press Releases */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Latest Press Releases
            </h2>
            <div className="space-y-6">
              {pressReleases.map((release, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.05 * index) }}
                  className={`glass-effect rounded-2xl p-6 hover-lift cursor-pointer ${
                    release.featured ? 'border-2 border-purple-500/30' : ''
                  }`}
                >
                  {release.featured && (
                    <div className="flex items-center space-x-2 mb-4">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">Featured</span>
                    </div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                          {release.category}
                        </span>
                        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          <span>{release.date}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">{release.title}</h3>
                      <p className="text-muted-foreground">{release.excerpt}</p>
                    </div>

                    <div className="mt-4 lg:mt-0 lg:ml-6 flex items-center space-x-3">
                      <button className="btn-secondary">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Kit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Media Kit & Resources
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mediaKit.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0.05 * index) }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{item.format}</span>
                    <span>{item.size}</span>
                  </div>
                  
                  <button className="w-full btn-secondary text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Media Contacts
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {mediaContacts.map((contact, index) => (
                <motion.div
                  key={contact.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-foreground mb-1">{contact.name}</h3>
                  <p className="text-blue-400 font-medium mb-4">{contact.title}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{contact.email}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                      <Globe className="w-4 h-4" />
                      <span>{contact.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Coverage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Recent Media Coverage
            </h2>
            <div className="space-y-4">
              {coverage.map((article, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (0.05 * index) }}
                  className="glass-effect rounded-xl p-4 hover-lift cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="font-bold text-blue-400">{article.publication}</span>
                        <span className="text-xs bg-secondary/40 text-muted-foreground px-2 py-1 rounded">
                          {article.type}
                        </span>
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{article.headline}</h3>
                      <p className="text-sm text-muted-foreground">{article.date}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12"
          >
            <Mail className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Press Inquiries
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Looking for more information or want to schedule an interview? 
              Our press team is here to help with your story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Press Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Subscribe to Updates
              </button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              Response within 24 hours • Global media team • Exclusive interviews available
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}