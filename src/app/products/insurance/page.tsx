"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Shield,
  Lock,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Clock,
  Award,
  Phone,
  DollarSign,
  TrendingUp,
  Eye,
  Globe,
  Zap
} from 'lucide-react'

const insuranceProducts = [
  {
    title: "Custody Protection",
    description: "Comprehensive insurance coverage for your digital assets held in CoinBank custody",
    icon: Lock,
    color: "from-blue-500 to-indigo-600",
    coverage: "Up to $250M",
    premium: "From 0.15%",
    features: [
      "Cold storage protection",
      "Hot wallet coverage", 
      "Internal fraud protection",
      "Regulatory compliance"
    ]
  },
  {
    title: "DeFi Smart Contract Insurance",
    description: "Protection against smart contract vulnerabilities and protocol failures in DeFi investments",
    icon: Shield,
    color: "from-purple-500 to-violet-600",
    coverage: "Up to $50M",
    premium: "From 2.5%",
    features: [
      "Smart contract auditing",
      "Protocol failure coverage",
      "Exploit protection",
      "Automated claims processing"
    ]
  }
]

export default function InsurancePage() {
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
              CoinBank Insurance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive protection for your digital assets. From custody insurance to DeFi coverage, 
              we provide institutional-grade protection against the unique risks of cryptocurrency.
            </p>
          </motion.div>

          {/* Insurance Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Comprehensive Coverage Options
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {insuranceProducts.map((product, index) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center`}>
                      <product.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-emerald-400">{product.coverage}</div>
                      <div className="text-sm text-muted-foreground">Coverage</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">{product.title}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}