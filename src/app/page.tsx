"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  Shield, 
  TrendingUp, 
  Zap, 
  Globe, 
  Lock,
  CreditCard,
  BarChart3,
  Users,
  ArrowRight,
  CheckCircle2,
  Star,
  DollarSign
} from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-luxury mb-8">
              The Future of
              <br />
              <span className="gradient-text">Digital Banking</span>
            </h1>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Experience sophisticated crypto banking with institutional-grade security,
              seamless trading, and innovative financial services.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Open Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                Watch Demo
              </Button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-4 gap-8 mb-20"
          >
            {[
              { label: 'Assets Under Management', value: '$2.5B+', icon: DollarSign },
              { label: 'Active Users', value: '250K+', icon: Users },
              { label: 'Countries Supported', value: '150+', icon: Globe },
              { label: 'Customer Rating', value: '4.9★', icon: Star }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                className="glass-effect rounded-2xl p-6 text-center hover-lift"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Crypto Banking Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need for digital finance in one sophisticated platform
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Military-Grade Security',
                description: 'Multi-signature wallets, cold storage, and institutional-grade custody solutions.',
                color: 'from-emerald-500 to-green-600'
              },
              {
                icon: TrendingUp,
                title: 'Advanced Trading',
                description: 'Professional trading tools with real-time market data and algorithmic strategies.',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: CreditCard,
                title: 'Crypto Debit Card',
                description: 'Spend your crypto anywhere with our premium metal debit card.',
                color: 'from-purple-500 to-violet-600'
              },
              {
                icon: BarChart3,
                title: 'Portfolio Management',
                description: 'Comprehensive portfolio tracking with advanced analytics and insights.',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: Zap,
                title: 'Instant Transactions',
                description: 'Lightning-fast deposits, withdrawals, and transfers across 150+ countries.',
                color: 'from-yellow-500 to-orange-600'
              },
              {
                icon: Lock,
                title: 'Yield Farming',
                description: 'Earn competitive yields through our curated DeFi and staking programs.',
                color: 'from-red-500 to-pink-600'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-effect rounded-2xl p-8 hover-lift"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 premium-shadow`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Digital Banking Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust CoinBank for their digital finance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-8 py-4">
                Open Free Account
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
                Schedule a Call
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}