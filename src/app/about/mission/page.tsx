"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Target,
  Heart,
  Globe,
  Shield,
  Users,
  Lightbulb,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Building2,
  Zap,
  Lock,
  Star
} from 'lucide-react'

export default function MissionPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
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
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Our Mission
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              To democratize access to financial services by combining the security of traditional banking
              with the innovation of cryptocurrency technology.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-3xl p-12 mb-20 text-center"
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Building the Future of Digital Finance
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              At CoinBank, we believe that everyone deserves access to world-class financial services,
              regardless of their location or economic background. We're breaking down the barriers
              between traditional finance and the digital economy, creating a bridge that empowers
              individuals and businesses to participate in the global financial system with confidence.
            </p>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: 'Security First',
                  description: 'We prioritize the safety and security of our customers\' assets above all else, implementing military-grade security measures.',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  icon: Heart,
                  title: 'Customer-Centric',
                  description: 'Every decision we make puts our customers first. We listen, learn, and continuously improve our services.',
                  color: 'from-red-500 to-pink-600'
                },
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We embrace cutting-edge technology and innovative solutions to solve real-world financial challenges.',
                  color: 'from-yellow-500 to-orange-600'
                },
                {
                  icon: Users,
                  title: 'Transparency',
                  description: 'We believe in open communication, clear pricing, and honest relationships with our customers and partners.',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: Globe,
                  title: 'Global Accessibility',
                  description: 'Financial services should be available to everyone, everywhere. We\'re building a truly global platform.',
                  color: 'from-purple-500 to-violet-600'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in everything we do, from our technology to our customer service.',
                  color: 'from-cyan-500 to-blue-600'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We envision a world where digital and traditional finance seamlessly coexist,
                creating unprecedented opportunities for wealth creation, financial inclusion,
                and economic empowerment.
              </p>
              <div className="space-y-4">
                {[
                  'Bridge the gap between traditional and digital finance',
                  'Provide institutional-grade security for retail customers',
                  'Enable global financial inclusion through technology',
                  'Foster innovation in the fintech ecosystem'
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (0.1 * index) }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Our Impact</h3>
              <div className="space-y-6">
                {[
                  { label: 'Customers Served', value: '250,000+', icon: Users },
                  { label: 'Assets Secured', value: '$2.5B+', icon: Shield },
                  { label: 'Countries Supported', value: '150+', icon: Globe },
                  { label: 'Customer Satisfaction', value: '98%', icon: Star }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + (0.1 * index) }}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <stat.icon className="w-5 h-5 text-cyan-400" />
                      <span className="text-muted-foreground">{stat.label}</span>
                    </div>
                    <span className="text-2xl font-bold gradient-text">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Commitments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Commitments</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Regulatory Compliance',
                  description: 'We work closely with regulators worldwide to ensure full compliance with all applicable laws and regulations.',
                  icon: Building2,
                  features: ['Licensed financial institution', 'FDIC insured deposits', 'SOX compliance', 'Regular audits']
                },
                {
                  title: 'Environmental Responsibility',
                  description: 'We\'re committed to sustainable practices and supporting environmentally friendly blockchain technologies.',
                  icon: Globe,
                  features: ['Carbon-neutral operations', 'Green blockchain support', 'Sustainable investing options', 'Environmental partnerships']
                },
                {
                  title: 'Financial Education',
                  description: 'We believe in empowering our customers through education and providing the tools needed for financial success.',
                  icon: Lightbulb,
                  features: ['Free educational resources', 'Expert market insights', 'Webinars and workshops', 'Personalized guidance']
                },
                {
                  title: 'Community Support',
                  description: 'We actively support the communities we serve through charitable initiatives and local partnerships.',
                  icon: Heart,
                  features: ['Community grants', 'Financial literacy programs', 'Nonprofit partnerships', 'Local economic development']
                }
              ].map((commitment, index) => (
                <motion.div
                  key={commitment.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <commitment.icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-foreground">{commitment.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">{commitment.description}</p>
                  <div className="space-y-2">
                    {commitment.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
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
            className="text-center bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl p-12"
          >
            <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Us in Building the Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be part of the financial revolution. Together, we can create a more inclusive,
              secure, and innovative financial system for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Open Your Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn About Our Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
