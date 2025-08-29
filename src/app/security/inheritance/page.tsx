"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Users,
  Heart,
  Shield,
  Key,
  FileText,
  Clock,
  CheckCircle2,
  ArrowRight,
  Lock,
  Eye,
  Calendar,
  Building2,
  Award,
  Target,
  Globe,
  Layers
} from 'lucide-react'

export default function InheritancePage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Heart className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Digital Asset Inheritance
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Secure your family's financial future with our comprehensive digital asset inheritance planning.
              Ensure your crypto wealth is passed on safely to your loved ones with professional estate planning tools.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$2.5B+</div>
                <div className="text-muted-foreground">Assets Protected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10,000+</div>
                <div className="text-muted-foreground">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Inheritance Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: Key,
                title: 'Secure Key Management',
                description: 'Multi-signature inheritance with time-locked smart contracts',
                color: 'from-emerald-500 to-green-600',
                features: ['Multi-sig wallets', 'Time locks', 'Dead man switches', 'Backup protocols']
              },
              {
                icon: Users,
                title: 'Beneficiary Management',
                description: 'Flexible beneficiary setup with customizable inheritance rules',
                color: 'from-blue-500 to-indigo-600',
                features: ['Multiple beneficiaries', 'Percentage allocation', 'Conditional transfers', 'Trust structures']
              },
              {
                icon: FileText,
                title: 'Legal Documentation',
                description: 'Professional will and estate planning with crypto-specific provisions',
                color: 'from-purple-500 to-violet-600',
                features: ['Digital wills', 'Legal review', 'State compliance', 'Tax optimization']
              },
              {
                icon: Shield,
                title: 'Security Protocols',
                description: 'Military-grade security ensuring assets remain protected during transition',
                color: 'from-orange-500 to-red-600',
                features: ['Cold storage', 'Encryption', 'Access controls', 'Audit trails']
              },
              {
                icon: Clock,
                title: 'Time-Based Triggers',
                description: 'Automated inheritance triggers based on customizable conditions',
                color: 'from-cyan-500 to-blue-600',
                features: ['Inactivity detection', 'Health monitoring', 'Manual triggers', 'Emergency protocols']
              },
              {
                icon: Building2,
                title: 'Trust Services',
                description: 'Professional trust administration for complex estate structures',
                color: 'from-pink-500 to-rose-600',
                features: ['Corporate trustees', 'Family trusts', 'Charitable giving', 'Generation skipping']
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
                <p className="text-muted-foreground leading-relaxed mb-6">{feature.description}</p>
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

          {/* Inheritance Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Simple Estate Planning Process</h2>
              <p className="text-muted-foreground">Protect your digital assets in 4 easy steps</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: '1',
                  title: 'Asset Assessment',
                  description: 'Comprehensive review of your digital asset portfolio and estate planning needs',
                  icon: Eye,
                  time: '30 minutes'
                },
                {
                  step: '2',
                  title: 'Plan Design',
                  description: 'Custom inheritance plan with beneficiaries, triggers, and security protocols',
                  icon: FileText,
                  time: '1-2 days'
                },
                {
                  step: '3',
                  title: 'Legal Setup',
                  description: 'Professional legal documentation and smart contract deployment',
                  icon: Award,
                  time: '3-5 days'
                },
                {
                  step: '4',
                  title: 'Ongoing Management',
                  description: 'Regular reviews and updates to ensure plan remains current',
                  icon: Target,
                  time: 'Annual'
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-sm text-emerald-400 font-bold mb-2">Step {step.step}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{step.description}</p>
                  <div className="text-emerald-400 font-semibold text-sm">{step.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Estate Planning Calculator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Target className="w-5 h-5 mr-2 text-emerald-400" />
                Estate Planning Calculator
              </h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Total Digital Assets Value
                  </label>
                  <input
                    type="number"
                    placeholder="1,000,000"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-emerald-500/50 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Beneficiaries
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-emerald-500/50 focus:outline-none">
                    <option>1 Beneficiary</option>
                    <option>2-3 Beneficiaries</option>
                    <option>4-5 Beneficiaries</option>
                    <option>5+ Beneficiaries</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estate Complexity
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-emerald-500/50 focus:outline-none">
                    <option>Simple (Direct inheritance)</option>
                    <option>Moderate (Conditional triggers)</option>
                    <option>Complex (Trust structures)</option>
                  </select>
                </div>

                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Setup Fee</div>
                      <div className="text-2xl font-bold text-emerald-400">$2,500</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Annual Fee</div>
                      <div className="text-xl font-bold text-foreground">$500</div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Includes legal documentation, smart contracts, and ongoing management
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Start Estate Planning
                  <Users className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Digital Asset Inheritance Matters</h3>
              <p className="text-muted-foreground mb-8">
                Without proper planning, digital assets worth billions are lost forever each year.
                Don't let your family struggle to access your crypto wealth.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Lock,
                    title: 'Prevent Asset Loss',
                    description: 'Ensure your crypto doesn\'t become permanently inaccessible'
                  },
                  {
                    icon: Globe,
                    title: 'Global Accessibility',
                    description: 'Beneficiaries can access assets from anywhere in the world'
                  },
                  {
                    icon: Layers,
                    title: 'Tax Efficiency',
                    description: 'Optimize estate taxes and minimize burden on beneficiaries'
                  },
                  {
                    icon: Calendar,
                    title: 'Peace of Mind',
                    description: 'Know your family is protected regardless of what happens'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 rounded-3xl p-12"
          >
            <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Protect Your Family's Future
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't leave your digital wealth to chance. Create a comprehensive inheritance plan
              that ensures your crypto assets are safely passed to your loved ones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Estate Planning
                <Users className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Talk to Estate Planner
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
