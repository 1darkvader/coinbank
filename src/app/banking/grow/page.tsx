"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  TrendingUp,
  PiggyBank,
  Target,
  BarChart3,
  Briefcase,
  Award,
  Users,
  Shield,
  CheckCircle2,
  ArrowRight,
  DollarSign,
  Calendar,
  Star,
  Zap,
  Globe,
  LineChart,
  Layers,
  Brain
} from 'lucide-react'

interface InvestmentStrategy {
  name: string
  riskLevel: 'Conservative' | 'Moderate' | 'Aggressive'
  expectedReturn: string
  timeHorizon: string
  minInvestment: string
  description: string
  features: string[]
  color: string
}

const investmentStrategies: InvestmentStrategy[] = [
  {
    name: 'Conservative Growth',
    riskLevel: 'Conservative',
    expectedReturn: '8-12%',
    timeHorizon: '3-5 years',
    minInvestment: '$1,000',
    description: 'Steady growth with capital preservation focus',
    features: ['Stablecoin emphasis', 'Blue-chip cryptos', 'Risk management', 'Regular rebalancing'],
    color: 'from-emerald-500 to-green-600'
  },
  {
    name: 'Balanced Portfolio',
    riskLevel: 'Moderate',
    expectedReturn: '15-25%',
    timeHorizon: '2-4 years',
    minInvestment: '$5,000',
    description: 'Optimal risk-reward balance for long-term growth',
    features: ['Diversified assets', 'DeFi protocols', 'Auto-rebalancing', 'Tax optimization'],
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: 'Growth Accelerator',
    riskLevel: 'Aggressive',
    expectedReturn: '30-50%',
    timeHorizon: '1-3 years',
    minInvestment: '$10,000',
    description: 'High-growth potential with active management',
    features: ['Emerging protocols', 'Yield farming', 'Leveraged strategies', 'Professional management'],
    color: 'from-purple-500 to-violet-600'
  }
]

export default function GrowPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <TrendingUp className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Grow Your Wealth
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Professional investment strategies designed to maximize your returns while managing risk.
              From conservative growth to aggressive expansion, we have strategies for every investor.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$2.5B+</div>
                <div className="text-muted-foreground">Assets Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">22.8%</div>
                <div className="text-muted-foreground">Avg. Annual Return</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50,000+</div>
                <div className="text-muted-foreground">Investors</div>
              </div>
            </div>
          </motion.div>

          {/* Investment Strategies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Investment Strategy
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {investmentStrategies.map((strategy, index) => (
                <motion.div
                  key={strategy.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-xl flex items-center justify-center mb-6`}>
                    {index === 0 && <Shield className="w-8 h-8 text-white" />}
                    {index === 1 && <BarChart3 className="w-8 h-8 text-white" />}
                    {index === 2 && <Zap className="w-8 h-8 text-white" />}
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-foreground">{strategy.name}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      strategy.riskLevel === 'Conservative' ? 'bg-emerald-500/20 text-emerald-400' :
                      strategy.riskLevel === 'Moderate' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-purple-500/20 text-purple-400'
                    }`}>
                      {strategy.riskLevel}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6">{strategy.description}</p>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Expected Return</span>
                      <span className="text-purple-400 font-bold">{strategy.expectedReturn}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Time Horizon</span>
                      <span className="text-foreground">{strategy.timeHorizon}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Min. Investment</span>
                      <span className="text-foreground">{strategy.minInvestment}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {strategy.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full btn-primary">
                    Start Investing
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investment Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Brain className="w-5 h-5 mr-2 text-purple-400" />
                AI-Powered Portfolio Builder
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Investment Goal
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-purple-500/50 focus:outline-none">
                    <option>Retirement Planning</option>
                    <option>Wealth Accumulation</option>
                    <option>Income Generation</option>
                    <option>Capital Preservation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Risk Tolerance
                  </label>
                  <div className="flex space-x-2">
                    {['Low', 'Medium', 'High'].map((risk, index) => (
                      <button
                        key={risk}
                        className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                          index === 1 ? 'bg-purple-500/20 text-purple-400' : 'bg-secondary/20 text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {risk}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Investment Amount
                  </label>
                  <input
                    type="number"
                    placeholder="10,000"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-purple-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Time Horizon
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-purple-500/50 focus:outline-none">
                    <option>1-2 years</option>
                    <option>3-5 years</option>
                    <option>5-10 years</option>
                    <option>10+ years</option>
                  </select>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Build My Portfolio
                  <Target className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Professional Management</h3>
              <p className="text-muted-foreground mb-8">
                Our team of experienced portfolio managers and quantitative analysts use
                advanced algorithms and market insights to optimize your investments.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: LineChart,
                    title: 'Advanced Analytics',
                    description: 'Machine learning algorithms analyze market trends and optimize allocations'
                  },
                  {
                    icon: Layers,
                    title: 'Dynamic Rebalancing',
                    description: 'Automatic portfolio adjustments based on market conditions and performance'
                  },
                  {
                    icon: Shield,
                    title: 'Risk Management',
                    description: 'Sophisticated risk controls and downside protection strategies'
                  },
                  {
                    icon: Award,
                    title: 'Tax Optimization',
                    description: 'Strategic tax-loss harvesting and efficient asset allocation'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-purple-400" />
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

          {/* Performance Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Performance Track Record</h2>
              <p className="text-muted-foreground">Historical performance across our investment strategies</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { period: '1 Year', return: '+28.7%', benchmark: '+18.2%', strategy: 'Growth' },
                { period: '3 Years', return: '+156.4%', benchmark: '+87.3%', strategy: 'Balanced' },
                { period: '5 Years', return: '+324.8%', benchmark: '+145.7%', strategy: 'Conservative' },
                { period: 'All Time', return: '+892.3%', benchmark: '+234.6%', strategy: 'Aggressive' }
              ].map((performance, index) => (
                <motion.div
                  key={performance.period}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{performance.return}</div>
                  <div className="font-medium text-foreground mb-1">{performance.period} Return</div>
                  <div className="text-sm text-muted-foreground mb-2">vs {performance.benchmark} benchmark</div>
                  <div className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                    {performance.strategy}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Investment Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: PiggyBank,
                title: 'Automated Investing',
                description: 'Set up recurring investments and let our AI handle the rest',
                features: ['Dollar-cost averaging', 'Smart scheduling', 'Auto-rebalancing']
              },
              {
                icon: Globe,
                title: 'Global Diversification',
                description: 'Access worldwide markets and diverse asset classes',
                features: ['Multi-market exposure', 'Currency hedging', 'Sector allocation']
              },
              {
                icon: Users,
                title: 'Expert Guidance',
                description: 'Dedicated investment advisors for personalized support',
                features: ['1-on-1 consultations', 'Market insights', 'Strategy reviews']
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + (0.1 * index) }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="space-y-2">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                      <span className="text-xs text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 rounded-3xl p-12"
          >
            <Briefcase className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Building Wealth Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take control of your financial future with professional investment strategies
              designed to maximize returns while managing risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get Investment Plan
                <TrendingUp className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Talk to Advisor
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
