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
    ],
    risks: ["Exchange hacks", "Internal theft", "Key mismanagement", "Technical failures"]
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
    ],
    risks: ["Smart contract bugs", "Protocol exploits", "Flash loan attacks", "Governance attacks"]
  },
  {
    title: "Trading & Settlement",
    description: "Insurance for trading activities and settlement failures across supported exchanges",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-600",
    coverage: "Up to $100M",
    premium: "From 0.25%",
    features: [
      "Counterparty risk coverage",
      "Settlement failure protection",
      "Market manipulation coverage",
      "Regulatory action protection"
    ],
    risks: ["Exchange insolvency", "Settlement delays", "Market manipulation", "Regulatory seizure"]
  },
  {
    title: "Personal Crypto Vault",
    description: "Individual wallet insurance for personal cryptocurrency holdings and transactions",
    icon: Eye,
    color: "from-orange-500 to-red-600",
    coverage: "Up to $10M",
    premium: "From 1.0%",
    features: [
      "Private key protection",
      "Phishing attack coverage",
      "Device theft protection",
      "Social engineering coverage"
    ],
    risks: ["Wallet hacks", "Phishing attacks", "SIM swapping", "Device compromise"]
  }
]

const coverageTiers = [
  {
    tier: "Essential",
    coverage: "Up to $100K",
    premium: "0.15% annually",
    color: "from-blue-500 to-indigo-600",
    features: [
      "Basic custody protection",
      "24/7 monitoring",
      "Standard claims processing",
      "Email support"
    ],
    popular: false
  },
  {
    tier: "Professional", 
    coverage: "Up to $5M",
    premium: "0.25% annually",
    color: "from-purple-500 to-violet-600",
    features: [
      "Extended coverage options",
      "Priority claims processing",
      "DeFi protocol coverage",
      "Phone & chat support",
      "Risk assessment reports"
    ],
    popular: true
  },
  {
    tier: "Institutional",
    coverage: "Up to $250M",
    premium: "Custom pricing",
    color: "from-emerald-500 to-green-600",
    features: [
      "Comprehensive coverage",
      "Instant claims processing",
      "Custom policy terms",
      "Dedicated account manager",
      "Real-time risk monitoring",
      "Regulatory compliance support"
    ],
    popular: false
  }
]

const claimsProcess = [
  {
    step: "Report Incident",
    description: "Submit a claim through our 24/7 incident reporting system",
    timeframe: "Immediate",
    icon: AlertTriangle
  },
  {
    step: "Investigation",
    description: "Our expert team investigates the incident with blockchain forensics",
    timeframe: "24-48 hours",
    icon: Eye
  },
  {
    step: "Assessment",
    description: "Professional assessment of damages and coverage verification",
    timeframe: "2-5 days", 
    icon: FileText
  },
  {
    step: "Settlement",
    description: "Fast settlement and reimbursement of covered losses",
    timeframe: "5-10 days",
    icon: DollarSign
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
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$250M</div>
                <div className="text-muted-foreground">Max Coverage</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$5B+</div>
                <div className="text-muted-foreground">Assets Insured</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.8%</div>
                <div className="text-muted-foreground">Claim Success</div>
              </div>
            </div>
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
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Premium</div>
                      <div className="font-bold text-blue-400">{product.premium}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Max Coverage</div>
                      <div className="font-bold text-emerald-400">{product.coverage}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Coverage Features:</h4>
                    <div className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-foreground mb-3">Protected Risks:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.risks.map((risk, riskIndex) => (
                        <span key={riskIndex} className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">
                          {risk}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Coverage Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Coverage Level
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {coverageTiers.map((tier, index) => (
                <motion.div
                  key={tier.tier}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0.1 * index) }}
                  className={`glass-effect rounded-2xl p-8 hover-lift text-center relative ${
                    tier.popular ? 'border-2 border-purple-500/50' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{tier.tier}</h3>
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{tier.coverage}</div>
                  <div className="text-sm text-muted-foreground mb-6">Maximum Coverage</div>
                  
                  <div className="text-xl font-bold text-blue-400 mb-8">{tier.premium}</div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700'
                      : 'btn-secondary'
                  }`}>
                    Select {tier.tier}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Claims Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Fast & Fair Claims Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {claimsProcess.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className="glass-effect rounded-xl p-6 text-center hover-lift"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-rose-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>
                  <div className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    {step.timeframe}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Risk Assessment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <div className="glass-effect rounded-3xl p-8">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-foreground mb-4">Risk Assessment & Pricing</h2>
                <p className="text-muted-foreground">Get personalized insurance quotes based on your risk profile</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Assessment Form */}
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Asset Value to Insure
                    </label>
                    <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-blue-500/50 focus:outline-none">
                      <option>$10K - $100K</option>
                      <option>$100K - $1M</option>
                      <option>$1M - $10M</option>
                      <option>$10M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Primary Risk Concern
                    </label>
                    <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-blue-500/50 focus:outline-none">
                      <option>Custody & Storage</option>
                      <option>DeFi Smart Contracts</option>
                      <option>Trading & Exchanges</option>
                      <option>Personal Wallet Security</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Coverage Duration
                    </label>
                    <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-blue-500/50 focus:outline-none">
                      <option>1 Year</option>
                      <option>2 Years</option>
                      <option>3 Years</option>
                      <option>Custom Term</option>
                    </select>
                  </div>
                </div>

                {/* Quote Results */}
                <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-foreground mb-6">Your Personalized Quote</h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Coverage Amount:</span>
                      <span className="text-lg font-bold text-foreground">$100,000</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Annual Premium:</span>
                      <span className="text-lg font-bold text-blue-400">$250</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground">Premium Rate:</span>
                      <span className="text-lg font-bold text-emerald-400">0.25%</span>
                    </div>
                    
                    <div className="flex justify-between items-center border-t border-border/40 pt-4">
                      <span className="text-muted-foreground">Risk Level:</span>
                      <span className="text-sm bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Low Risk</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-500 to-rose-600 text-white py-3 px-6 rounded-xl font-medium mt-6 transition-all hover:from-red-600 hover:to-rose-700">
                    Get Detailed Quote
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10 rounded-3xl p-12"
          >
            <Phone className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Protect Your Digital Assets Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't leave your cryptocurrency investments unprotected. Get comprehensive 
              insurance coverage tailored to your specific risk profile and asset holdings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Insurance Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Speak to Expert
              </button>
            </div>
            <div className="mt-6 text-sm text-muted-foreground">
              24/7 claims support • Fast processing • Competitive rates
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}