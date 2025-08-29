"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  CreditCard,
  DollarSign,
  Calculator,
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Building2,
  Zap,
  Target,
  Award,
  FileText,
  Users,
  Banknote,
  Percent,
  Calendar,
  Key
} from 'lucide-react'

interface LoanProduct {
  name: string
  maxLTV: string
  interestRate: string
  minAmount: string
  maxAmount: string
  term: string
  description: string
  features: string[]
  color: string
  collateralTypes: string[]
}

const loanProducts: LoanProduct[] = [
  {
    name: 'Instant Credit Line',
    maxLTV: '50%',
    interestRate: '6.8%',
    minAmount: '$1,000',
    maxAmount: '$100,000',
    term: 'Revolving',
    description: 'Flexible credit line backed by your crypto portfolio',
    features: ['Instant approval', 'No monthly payments', 'Interest-only option', 'Flexible repayment'],
    color: 'from-cyan-500 to-blue-600',
    collateralTypes: ['BTC', 'ETH', 'USDC', 'SOL']
  },
  {
    name: 'Term Loan',
    maxLTV: '65%',
    interestRate: '8.5%',
    minAmount: '$5,000',
    maxAmount: '$500,000',
    term: '1-5 years',
    description: 'Fixed-term loans with competitive rates and flexible terms',
    features: ['Fixed interest rate', 'Structured payments', 'Early repayment option', 'Multiple collateral types'],
    color: 'from-teal-500 to-cyan-600',
    collateralTypes: ['BTC', 'ETH', 'Multi-asset']
  },
  {
    name: 'Business Credit',
    maxLTV: '40%',
    interestRate: '12.5%',
    minAmount: '$10,000',
    maxAmount: '$2,000,000',
    term: '6 months - 3 years',
    description: 'Business loans for crypto companies and DeFi protocols',
    features: ['Business-focused', 'Institutional terms', 'Custom structures', 'Treasury management'],
    color: 'from-indigo-500 to-purple-600',
    collateralTypes: ['Multi-asset', 'Institutional custody']
  }
]

export default function BorrowPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Banknote className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Crypto-Backed Lending
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Unlock the value of your digital assets without selling them. Get instant liquidity
              with competitive rates and flexible terms while keeping your crypto investments.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$500M+</div>
                <div className="text-muted-foreground">Loans Originated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">6.8%</div>
                <div className="text-muted-foreground">Starting APR</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt; 5 min</div>
                <div className="text-muted-foreground">Approval Time</div>
              </div>
            </div>
          </motion.div>

          {/* Loan Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Loan Product
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {loanProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${product.color} rounded-xl flex items-center justify-center mb-6`}>
                    {index === 0 && <CreditCard className="w-8 h-8 text-white" />}
                    {index === 1 && <FileText className="w-8 h-8 text-white" />}
                    {index === 2 && <Building2 className="w-8 h-8 text-white" />}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-6">{product.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest Rate</span>
                      <span className="text-cyan-400 font-bold">{product.interestRate} APR</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Max LTV</span>
                      <span className="text-foreground">{product.maxLTV}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan Amount</span>
                      <span className="text-foreground">{product.minAmount} - {product.maxAmount}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Term</span>
                      <span className="text-foreground">{product.term}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-muted-foreground mb-2">Accepted Collateral:</div>
                    <div className="flex flex-wrap gap-2">
                      {product.collateralTypes.map((type, typeIndex) => (
                        <span key={typeIndex} className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Loan Calculator & Application */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Calculator className="w-5 h-5 mr-2 text-cyan-400" />
                Loan Calculator
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Collateral Asset
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-cyan-500/50 focus:outline-none">
                    <option>Bitcoin (BTC)</option>
                    <option>Ethereum (ETH)</option>
                    <option>USD Coin (USDC)</option>
                    <option>Solana (SOL)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Collateral Amount
                  </label>
                  <input
                    type="number"
                    placeholder="1.5"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-cyan-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Loan-to-Value Ratio
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="25"
                      max="65"
                      defaultValue="50"
                      className="flex-1"
                    />
                    <span className="text-cyan-400 font-bold">50%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Loan Term
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-cyan-500/50 focus:outline-none">
                    <option>6 months</option>
                    <option>1 year</option>
                    <option>2 years</option>
                    <option>3 years</option>
                  </select>
                </div>

                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Loan Amount</div>
                      <div className="text-2xl font-bold text-cyan-400">$56,125</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Monthly Payment</div>
                      <div className="text-xl font-bold text-foreground">$4,847</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Interest Rate</div>
                      <div className="text-lg font-bold text-foreground">6.8% APR</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Total Interest</div>
                      <div className="text-lg font-bold text-foreground">$2,264</div>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-cyan-500 to-teal-600 hover:from-cyan-600 hover:to-teal-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Get Pre-Approved
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose CoinBank Lending?</h3>
              <p className="text-muted-foreground mb-8">
                Experience the fastest, most secure crypto lending platform with institutional-grade
                custody and competitive rates designed for both retail and institutional clients.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: 'Instant Approval',
                    description: 'Get approved in under 5 minutes with automated underwriting'
                  },
                  {
                    icon: Shield,
                    title: 'Secure Custody',
                    description: 'Your collateral is protected by military-grade security systems'
                  },
                  {
                    icon: TrendingDown,
                    title: 'Competitive Rates',
                    description: 'Market-leading interest rates starting from 6.8% APR'
                  },
                  {
                    icon: Clock,
                    title: 'Flexible Terms',
                    description: 'Choose from revolving credit lines to fixed-term loans'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lending Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Simple Lending Process</h2>
              <p className="text-muted-foreground">Get your loan in 3 easy steps</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '1',
                  title: 'Submit Application',
                  description: 'Complete our quick application form and connect your wallet',
                  icon: FileText,
                  time: '2 minutes'
                },
                {
                  step: '2',
                  title: 'Deposit Collateral',
                  description: 'Transfer your crypto assets to our secure custody solution',
                  icon: Key,
                  time: '3 minutes'
                },
                {
                  step: '3',
                  title: 'Receive Funds',
                  description: 'Get your loan funds deposited directly to your account',
                  icon: DollarSign,
                  time: '< 5 minutes'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm text-cyan-400 font-bold mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                  <div className="text-cyan-400 font-semibold text-sm">{step.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Risk Management */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid md:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Risk Management</h3>
              <div className="space-y-4">
                {[
                  { label: 'Liquidation Threshold', value: '75% LTV', status: 'Safe' },
                  { label: 'Margin Call Alert', value: '70% LTV', status: 'Active' },
                  { label: 'Health Factor', value: '2.8', status: 'Excellent' },
                  { label: 'Current LTV', value: '50%', status: 'Conservative' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-secondary/20 rounded-xl">
                    <div>
                      <div className="text-sm text-muted-foreground">{item.label}</div>
                      <div className="font-bold text-foreground">{item.value}</div>
                    </div>
                    <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Loan Benefits</h3>
              <div className="space-y-4">
                {[
                  'No credit checks required',
                  'Keep your crypto investments',
                  'Tax-efficient borrowing',
                  'No prepayment penalties',
                  'Instant liquidity access',
                  'Portfolio diversification'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-cyan-500/10 via-teal-500/10 to-blue-500/10 rounded-3xl p-12"
          >
            <CreditCard className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Unlock Your Crypto's Value
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't sell your crypto. Borrow against it instead. Get the liquidity you need
              while keeping your digital assets for future growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Apply for Loan
                <Banknote className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Talk to Specialist
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
