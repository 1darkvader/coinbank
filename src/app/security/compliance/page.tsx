"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Scale,
  Shield,
  FileText,
  CheckCircle2,
  Award,
  Building2,
  Globe,
  Users,
  Eye,
  Lock,
  Search,
  AlertTriangle,
  Clock,
  ArrowRight
} from 'lucide-react'

export default function CompliancePage() {
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
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Regulatory Compliance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CoinBank operates under the highest regulatory standards with full compliance across
              all jurisdictions. We maintain licenses, certifications, and oversight from leading
              financial authorities worldwide.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50+</div>
                <div className="text-muted-foreground">Jurisdictions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-muted-foreground">Licenses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">100%</div>
                <div className="text-muted-foreground">Compliance Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Compliance Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: Search,
                title: 'KYC & Identity Verification',
                description: 'Multi-layered identity verification with 99.8% automation rate',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Eye,
                title: 'Transaction Monitoring',
                description: '24/7 real-time analysis using advanced AI and ML algorithms',
                color: 'from-emerald-500 to-green-600'
              },
              {
                icon: AlertTriangle,
                title: 'AML & Sanctions Screening',
                description: 'Comprehensive anti-money laundering with <2 hour response',
                color: 'from-orange-500 to-red-600'
              },
              {
                icon: Award,
                title: 'Regulatory Licenses',
                description: 'Licensed across 15+ jurisdictions with full authorization',
                color: 'from-purple-500 to-violet-600'
              },
              {
                icon: Shield,
                title: 'Data Protection',
                description: 'GDPR and CCPA compliant with privacy-by-design approach',
                color: 'from-cyan-500 to-blue-600'
              },
              {
                icon: Users,
                title: 'Staff Training',
                description: '100% completion rate for compliance training programs',
                color: 'from-pink-500 to-rose-600'
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

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12"
          >
            <Scale className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Compliance You Can Trust
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bank with confidence knowing we operate under the strictest regulatory oversight
              with full transparency and accountability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View Compliance Reports
                <FileText className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Contact Compliance Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
