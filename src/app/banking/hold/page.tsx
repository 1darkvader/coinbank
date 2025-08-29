"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'
import {
  Vault,
  Shield,
  Lock,
  CheckCircle2,
  Globe,
  Zap,
  Users,
  Award,
  ArrowRight,
  Building2,
  Key,
  Eye,
  Clock,
  DollarSign
} from 'lucide-react'

export default function HoldPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Vault className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Hold Your Digital Assets
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Store, secure, and protect your cryptocurrencies with military-grade security.
              Multi-signature protection and cold storage for maximum safety.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="btn-primary text-lg px-8 py-4">
                Start Securing Assets
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: Shield,
                title: 'Military-Grade Security',
                description: 'Multi-signature wallets and hardware security modules protect your assets',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: Building2,
                title: 'Cold Storage',
                description: 'Offline storage systems keep your crypto safe from online threats',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Key,
                title: 'Private Key Control',
                description: 'You maintain full control of your private keys and seed phrases',
                color: 'from-purple-500 to-violet-600'
              },
              {
                icon: Eye,
                title: 'Real-Time Monitoring',
                description: '24/7 security monitoring and instant threat detection',
                color: 'from-orange-500 to-red-500'
              },
              {
                icon: Globe,
                title: 'Global Access',
                description: 'Access your assets securely from anywhere in the world',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Users,
                title: 'Multi-User Support',
                description: 'Share access with trusted parties using advanced permission controls',
                color: 'from-pink-500 to-rose-500'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-effect rounded-2xl p-8 hover-lift"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Security Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Institutional-Grade Protection</h2>
              <p className="text-muted-foreground">Trusted by professionals worldwide</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Assets Secured', value: '$2.5B+', icon: DollarSign },
                { label: 'Security Uptime', value: '99.99%', icon: Clock },
                { label: 'Zero Breaches', value: '5+ Years', icon: Shield },
                { label: 'Customer Trust', value: '98%', icon: Award }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Layers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Multiple Layers of Security
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Hardware Security Modules (HSM)',
                    description: 'FIPS 140-2 Level 3 certified hardware for key generation and storage'
                  },
                  {
                    title: 'Multi-Signature Architecture',
                    description: 'Require multiple approvals for any transaction, eliminating single points of failure'
                  },
                  {
                    title: 'Geographically Distributed',
                    description: 'Keys stored across multiple secure locations worldwide for maximum resilience'
                  },
                  {
                    title: 'Regular Security Audits',
                    description: 'Independent third-party security assessments and penetration testing'
                  }
                ].map((layer, index) => (
                  <motion.div
                    key={layer.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{layer.title}</h3>
                      <p className="text-muted-foreground">{layer.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Security Dashboard</h3>
              <div className="space-y-4">
                {[
                  { label: 'Wallet Status', status: 'Secure', color: 'emerald' },
                  { label: 'Multi-Sig Setup', status: '3 of 5 Required', color: 'blue' },
                  { label: 'Last Security Scan', status: '2 minutes ago', color: 'cyan' },
                  { label: 'Backup Status', status: 'Up to date', color: 'emerald' },
                  { label: 'Access Logs', status: 'All verified', color: 'emerald' }
                ].map((item, index) => (
                  <div key={item.label} className="flex items-center justify-between py-3 border-b border-border/20">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className={`text-${item.color}-400 font-medium`}>{item.status}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 btn-primary">
                View Full Security Report
              </button>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-3xl p-12"
          >
            <Vault className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Securing Your Digital Assets Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CoinBank with their digital wealth.
              Experience the peace of mind that comes with institutional-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Open Secure Vault
                <Vault className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Schedule Security Demo
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
