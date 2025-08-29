"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'

export default function ExpertisePage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
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
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <span className="text-4xl">💼</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              World-Class Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our leadership team combines decades of experience from traditional finance,
              technology, and cryptocurrency to deliver unparalleled financial services.
            </p>
          </motion.div>

          {/* Leadership Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: 'Sarah Johnson',
                  role: 'Chief Executive Officer',
                  background: 'Former Goldman Sachs MD, Harvard MBA',
                  experience: '20+ years in investment banking',
                  avatar: '👩‍💼',
                  achievements: ['Led $2B+ in digital asset deals', 'Built 3 fintech unicorns', 'Forbes 40 Under 40']
                },
                {
                  name: 'Michael Chen',
                  role: 'Chief Technology Officer',
                  background: 'Ex-Google Senior Principal Engineer',
                  experience: '15+ years in distributed systems',
                  avatar: '👨‍💻',
                  achievements: ['Built payments for 2B+ users', 'PhD Computer Science MIT', '50+ patents filed']
                },
                {
                  name: 'David Rodriguez',
                  role: 'Chief Risk Officer',
                  background: 'Former JP Morgan Chief Risk Officer',
                  experience: '25+ years in risk management',
                  avatar: '👨‍💼',
                  achievements: ['Managed $500B+ portfolios', 'CFA & FRM certified', 'Risk Management pioneer']
                },
                {
                  name: 'Emily Zhang',
                  role: 'Chief Compliance Officer',
                  background: 'Ex-CFTC Commissioner',
                  experience: '18+ years in financial regulation',
                  avatar: '👩‍⚖️',
                  achievements: ['Shaped crypto regulations', 'JD from Yale Law', 'Congressional testimony expert']
                },
                {
                  name: 'James Thompson',
                  role: 'Chief Security Officer',
                  background: 'Former NSA Cybersecurity Director',
                  experience: '22+ years in cybersecurity',
                  avatar: '👨‍🔬',
                  achievements: ['Protected national infrastructure', 'CISSP & CISSP certified', 'Zero breach record']
                },
                {
                  name: 'Lisa Wang',
                  role: 'Chief Product Officer',
                  background: 'Ex-Coinbase VP of Product',
                  experience: '12+ years in fintech products',
                  avatar: '👩‍🎨',
                  achievements: ['Launched products for 100M+ users', 'Stanford MBA', 'Product innovation awards']
                }
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{member.avatar}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-indigo-400 font-medium">{member.role}</p>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="text-sm text-muted-foreground">
                      <strong>Background:</strong> {member.background}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <strong>Experience:</strong> {member.experience}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">Key Achievements:</h4>
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-indigo-400">•</span>
                        <span className="text-xs text-muted-foreground">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advisory Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">🎯 Strategic Advisory Board</h2>
              <p className="text-muted-foreground">Industry luminaries guiding our strategic direction</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Janet Yellen', role: 'Former Fed Chair', company: 'US Treasury' },
                { name: 'Brian Armstrong', role: 'CEO', company: 'Coinbase' },
                { name: 'Christine Lagarde', role: 'President', company: 'European Central Bank' },
                { name: 'Satya Nadella', role: 'CEO', company: 'Microsoft' }
              ].map((advisor, index) => (
                <motion.div
                  key={advisor.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (0.1 * index) }}
                  className="text-center p-6 bg-secondary/20 rounded-xl"
                >
                  <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h3 className="font-bold text-foreground">{advisor.name}</h3>
                  <p className="text-sm text-indigo-400">{advisor.role}</p>
                  <p className="text-xs text-muted-foreground">{advisor.company}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Company Culture */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">🏢 Our Culture</h2>
              <div className="space-y-6">
                {[
                  {
                    title: '🎯 Innovation First',
                    description: 'We embrace cutting-edge technology and push the boundaries of financial services.'
                  },
                  {
                    title: '🤝 Collaborative Excellence',
                    description: 'Our diverse team works together to solve complex challenges and deliver exceptional results.'
                  },
                  {
                    title: '📈 Continuous Learning',
                    description: 'We invest heavily in our team\'s growth with education budgets and learning opportunities.'
                  },
                  {
                    title: '🌍 Global Impact',
                    description: 'We\'re building financial infrastructure that empowers people worldwide.'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + (0.1 * index) }}
                    className="flex items-start space-x-4"
                  >
                    <div className="text-2xl">{value.title.charAt(0)}</div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{value.title.substring(2)}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">📊 By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { label: 'Team Members', value: '450+' },
                  { label: 'Countries', value: '25' },
                  { label: 'PhD Holders', value: '65' },
                  { label: 'Years Combined Experience', value: '2,500+' },
                  { label: 'Patents Filed', value: '150+' },
                  { label: 'Published Papers', value: '300+' }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + (0.1 * index) }}
                    className="text-center p-4 bg-secondary/20 rounded-xl"
                  >
                    <div className="text-2xl font-bold text-indigo-400 mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-violet-500/10 rounded-3xl p-12"
          >
            <span className="text-6xl mb-6 block">💼</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Join Our World-Class Team
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for exceptional talent to help us build the future of finance.
              Explore opportunities to work with industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View Open Positions 🚀
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Contact Leadership
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
