"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Shield,
  Lock,
  Eye,
  Key,
  Server,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Award,
  Users,
  Clock,
  FileText,
  Zap,
  TrendingUp
} from 'lucide-react'

const securityFeatures = [
  {
    title: "Multi-Signature Cold Storage",
    description: "95% of customer funds stored offline in geographically distributed cold storage with multi-signature security",
    icon: Lock,
    color: "from-blue-500 to-indigo-600",
    details: [
      "Hardware Security Modules (HSMs)",
      "Geographic distribution across 5 locations", 
      "Multi-signature wallet architecture",
      "Air-gapped offline storage"
    ]
  },
  {
    title: "Advanced Threat Detection",
    description: "Real-time monitoring and AI-powered threat detection to identify and prevent security incidents",
    icon: Eye,
    color: "from-red-500 to-rose-600",
    details: [
      "24/7 SOC monitoring",
      "Machine learning threat detection",
      "Behavioral analysis systems",
      "Automated incident response"
    ]
  }
]

export default function SecurityPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Security at CoinBank
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your security is our highest priority. We employ institutional-grade security measures, 
              industry-leading practices, and cutting-edge technology to protect your digital assets.
            </p>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Multi-Layer Security Architecture
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  
                  <div className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}