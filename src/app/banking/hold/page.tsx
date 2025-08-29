"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'

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
              <span className="text-4xl">🔒</span>
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
                Start Securing Assets →
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
                symbol: '🛡️',
                title: 'Military-Grade Security',
                description: 'Multi-signature wallets and hardware security modules protect your assets',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                symbol: '🏢',
                title: 'Cold Storage',
                description: 'Offline storage systems keep your crypto safe from online threats',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                symbol: '🔑',
                title: 'Private Key Control',
                description: 'You maintain full control of your private keys and seed phrases',
                color: 'from-purple-500 to-violet-600'
              },
              {
                symbol: '👁️',
                title: 'Real-Time Monitoring',
                description: '24/7 security monitoring and instant threat detection',
                color: 'from-orange-500 to-red-500'
              },
              {
                symbol: '🌍',
                title: 'Global Access',
                description: 'Access your assets securely from anywhere in the world',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                symbol: '👥',
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
                  <span className="text-2xl">{feature.symbol}</span>
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
                { label: 'Assets Secured', value: '$2.5B+', symbol: '💰' },
                { label: 'Security Uptime', value: '99.99%', symbol: '⏰' },
                { label: 'Zero Breaches', value: '5+ Years', symbol: '🛡️' },
                { label: 'Customer Trust', value: '98%', symbol: '🏆' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{stat.symbol}</span>
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 rounded-3xl p-12"
          >
            <span className="text-6xl mb-6 block">🔒</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Securing Your Digital Assets Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CoinBank with their digital wealth.
              Experience the peace of mind that comes with institutional-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Open Secure Vault 🔒
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
