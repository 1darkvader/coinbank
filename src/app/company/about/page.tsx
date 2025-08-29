"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Building2,
  Users,
  Award,
  Globe,
  Shield,
  Target,
  TrendingUp,
  Heart,
  CheckCircle2,
  ArrowRight,
  Zap,
  Star
} from 'lucide-react'

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "CoinBank was established with a vision to bridge traditional banking and cryptocurrency",
    achievement: "Secured $10M Series A funding"
  },
  {
    year: "2020", 
    title: "Regulatory Approval",
    description: "Obtained banking license and regulatory approvals across multiple jurisdictions",
    achievement: "First crypto bank license in NY"
  },
  {
    year: "2021",
    title: "Platform Launch",
    description: "Launched comprehensive crypto banking platform with advanced trading features",
    achievement: "100K+ customers in first year"
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Expanded operations to Europe and Asia with local regulatory partnerships",
    achievement: "$1B+ in managed assets"
  },
  {
    year: "2023",
    title: "Innovation Leadership", 
    description: "Introduced AI-powered trading and institutional-grade custody solutions",
    achievement: "Industry's first AI banking assistant"
  },
  {
    year: "2024",
    title: "Market Leader",
    description: "Recognized as the leading cryptocurrency banking platform globally",
    achievement: "$10B+ assets under management"
  }
]

const values = [
  {
    icon: Shield,
    title: "Security First",
    description: "We prioritize security above all else, implementing military-grade protection for every customer asset",
    color: "from-red-500 to-rose-600"
  },
  {
    icon: Users,
    title: "Customer Centric", 
    description: "Every decision we make is guided by what's best for our customers and their financial success",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Zap,
    title: "Innovation Driven",
    description: "We continuously push the boundaries of what's possible in cryptocurrency banking technology",
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Heart,
    title: "Transparent & Ethical",
    description: "We operate with complete transparency and hold ourselves to the highest ethical standards",
    color: "from-emerald-500 to-green-600"
  }
]

const stats = [
  { label: "Customers Worldwide", value: "2M+", icon: Users },
  { label: "Assets Under Management", value: "$10B+", icon: TrendingUp },
  { label: "Countries Served", value: "50+", icon: Globe },
  { label: "Security Incidents", value: "0", icon: Shield }
]

export default function AboutPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Building2 className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              About CoinBank
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We're revolutionizing cryptocurrency banking by combining the security and trust of 
              traditional banking with the innovation and opportunity of digital assets.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (0.05 * index) }}
                className="glass-effect rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <div className="glass-effect rounded-3xl p-12 text-center">
              <Target className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                To democratize access to cryptocurrency banking services while maintaining the highest 
                standards of security, compliance, and customer service. We believe that everyone deserves 
                access to the financial opportunities that digital assets provide, backed by institutional-grade 
                infrastructure and regulatory compliance.
              </p>
            </div>
          </motion.div>

          {/* Company Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Journey</h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 + (0.1 * index) }}
                  className="flex items-start space-x-6"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                      {milestone.year.slice(-2)}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent mt-4" />
                    )}
                  </div>
                  <div className="glass-effect rounded-xl p-6 flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                      <span className="text-sm font-medium text-blue-400">{milestone.year}</span>
                    </div>
                    <p className="text-muted-foreground mb-3">{milestone.description}</p>
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-sm font-medium text-yellow-400">{milestone.achievement}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Leadership Team Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Chen", role: "Chief Executive Officer", experience: "Former Goldman Sachs VP" },
                { name: "Michael Rodriguez", role: "Chief Technology Officer", experience: "Ex-Coinbase Lead Engineer" },
                { name: "Emily Watson", role: "Chief Compliance Officer", experience: "Former SEC Director" }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12"
          >
            <Star className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the future of banking. Whether you're looking to invest, trade, or 
              build your career with us, we're here to support your journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Open Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Careers
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}