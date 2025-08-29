"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Building2,
  DollarSign,
  Shield,
  BarChart3,
  TrendingUp,
  Vault,
  Award,
  CheckCircle2,
  ArrowRight,
  Globe,
  Eye,
  FileText,
  Calculator,
  Layers,
  Target,
  Clock,
  Users,
  Lock
} from 'lucide-react'

interface ReserveAsset {
  name: string
  symbol: string
  amount: string
  valueUSD: string
  percentage: number
  description: string
  color: string
}

const reserveAssets: ReserveAsset[] = [
  {
    name: 'US Treasury Bills',
    symbol: 'T-Bills',
    amount: '450M',
    valueUSD: '$450,000,000',
    percentage: 35,
    description: 'Short-term government securities providing stability and liquidity',
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'Cash & Equivalents',
    symbol: 'USD',
    amount: '320M',
    valueUSD: '$320,000,000',
    percentage: 25,
    description: 'Liquid cash holdings and money market instruments',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Investment Grade Bonds',
    symbol: 'IG Bonds',
    amount: '260M',
    valueUSD: '$260,000,000',
    percentage: 20,
    description: 'High-quality corporate and municipal bonds',
    color: 'from-purple-500 to-violet-600'
  },
  {
    name: 'Gold & Precious Metals',
    symbol: 'Au/Ag',
    amount: '130M',
    valueUSD: '$130,000,000',
    percentage: 10,
    description: 'Physical and digital gold reserves for inflation hedge',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    name: 'Blue Chip Crypto',
    symbol: 'BTC/ETH',
    amount: '130M',
    valueUSD: '$130,000,000',
    percentage: 10,
    description: 'Bitcoin and Ethereum holdings for digital asset exposure',
    color: 'from-orange-500 to-red-600'
  }
]

export default function ReservePage() {
  const totalReserves = 1290000000 // $1.29B
  const reserveRatio = 125 // 125%
  const customerDeposits = 1032000000 // $1.032B

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
            <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Vault className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Reserve Transparency
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Full transparency into our financial reserves and asset backing. Every customer deposit
              is backed by high-quality assets with real-time reporting and independent audits.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$1.29B</div>
                <div className="text-muted-foreground">Total Reserves</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">125%</div>
                <div className="text-muted-foreground">Reserve Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">AAA</div>
                <div className="text-muted-foreground">Credit Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Reserve Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Reserve Composition</h2>
              <p className="text-muted-foreground">Diversified portfolio ensuring stability and growth</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Reserve Breakdown */}
              <div className="space-y-6">
                {reserveAssets.map((asset, index) => (
                  <motion.div
                    key={asset.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (0.1 * index) }}
                    className="glass-effect rounded-2xl p-6"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${asset.color} rounded-xl flex items-center justify-center`}>
                          <span className="text-white font-bold text-sm">{asset.symbol.slice(0, 2)}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{asset.name}</h3>
                          <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-yellow-400">{asset.percentage}%</div>
                        <div className="text-sm text-muted-foreground">{asset.valueUSD}</div>
                      </div>
                    </div>

                    <div className="w-full bg-secondary/20 rounded-full h-2 mb-3">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${asset.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${asset.percentage * 2.8}%` }}
                        transition={{ duration: 1, delay: 0.3 + (index * 0.1) }}
                      />
                    </div>

                    <p className="text-sm text-muted-foreground">{asset.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Reserve Stats */}
              <div className="space-y-6">
                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Reserve Metrics</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Total Customer Deposits', value: '$1.032B', status: 'Fully Backed' },
                      { label: 'Excess Reserves', value: '$258M', status: 'Safety Buffer' },
                      { label: 'Reserve Ratio', value: '125%', status: 'Above Required' },
                      { label: 'Liquidity Ratio', value: '85%', status: 'Excellent' },
                      { label: 'Last Audit', value: '2 days ago', status: 'Current' }
                    ].map((metric, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-xl">
                        <div>
                          <div className="text-sm text-muted-foreground">{metric.label}</div>
                          <div className="font-bold text-foreground">{metric.value}</div>
                        </div>
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                          {metric.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-effect rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-foreground mb-6">Risk Metrics</h3>
                  <div className="space-y-4">
                    {[
                      { metric: 'Credit Risk', score: '95%', color: 'emerald' },
                      { metric: 'Liquidity Risk', score: '92%', color: 'emerald' },
                      { metric: 'Market Risk', score: '88%', color: 'yellow' },
                      { metric: 'Operational Risk', score: '97%', color: 'emerald' }
                    ].map((risk, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{risk.metric}</span>
                          <span className={`text-${risk.color}-400 font-semibold`}>{risk.score}</span>
                        </div>
                        <div className="w-full bg-secondary/20 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-${risk.color}-400`}
                            style={{ width: risk.score }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Audit & Compliance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Independent Audits</h2>
              <p className="text-muted-foreground mb-8">
                Our reserves are audited monthly by top-tier accounting firms to ensure
                full transparency and regulatory compliance.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: FileText,
                    title: 'Monthly Attestations',
                    description: 'Independent verification of all reserve holdings and customer deposits'
                  },
                  {
                    icon: Eye,
                    title: 'Real-Time Transparency',
                    description: 'Live dashboard showing current reserve composition and ratios'
                  },
                  {
                    icon: Shield,
                    title: 'Regulatory Compliance',
                    description: 'Full compliance with banking regulations and capital requirements'
                  },
                  {
                    icon: Award,
                    title: 'Credit Rating',
                    description: 'AAA credit rating from major rating agencies'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Latest Audit Report</h3>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Audit Firm</span>
                  <span className="text-foreground font-medium">Deloitte & Touche LLP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Report Date</span>
                  <span className="text-foreground font-medium">January 20, 2025</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Opinion</span>
                  <span className="text-emerald-400 font-medium">Unqualified</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Assets Verified</span>
                  <span className="text-foreground font-medium">100%</span>
                </div>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-emerald-400 mb-1">Clean Audit Opinion</h4>
                    <p className="text-sm text-muted-foreground">
                      All reserve holdings verified and confirmed to be held in accordance
                      with stated policies and regulatory requirements.
                    </p>
                  </div>
                </div>
              </div>

              <button className="w-full btn-primary">
                View Full Report
                <FileText className="w-4 h-4 ml-2" />
              </button>
            </div>
          </motion.div>

          {/* Insurance & Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Additional Protection</h2>
              <p className="text-muted-foreground">Multiple layers of insurance and protection for your peace of mind</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Building2,
                  title: 'FDIC Insurance',
                  amount: '$250,000',
                  description: 'Per depositor coverage for traditional banking products',
                  color: 'from-blue-500 to-indigo-600'
                },
                {
                  icon: Lock,
                  title: 'Crypto Insurance',
                  amount: '$500M',
                  description: 'Digital asset coverage from leading insurance providers',
                  color: 'from-emerald-500 to-green-600'
                },
                {
                  icon: Shield,
                  title: 'Excess Coverage',
                  amount: '$1B',
                  description: 'Additional umbrella coverage for institutional clients',
                  color: 'from-purple-500 to-violet-600'
                }
              ].map((protection, index) => (
                <motion.div
                  key={protection.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${protection.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <protection.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{protection.title}</h3>
                  <div className="text-2xl font-bold text-yellow-400 mb-3">{protection.amount}</div>
                  <p className="text-muted-foreground">{protection.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 rounded-3xl p-12"
          >
            <Building2 className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Transparent & Secure Banking
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Bank with confidence knowing your deposits are fully backed by high-quality reserves
              with complete transparency and independent verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View Live Reserve Data
                <BarChart3 className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Download Audit Reports
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
