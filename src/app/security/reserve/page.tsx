"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'

export default function ReservePage() {
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
              <span className="text-4xl">🏢</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Reserve & Asset Backing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Transparency and trust through full asset backing. Our reserves are audited monthly
              and fully insured to protect your digital wealth.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">$2.8B</div>
                <div className="text-muted-foreground">Total Reserves</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">125%</div>
                <div className="text-muted-foreground">Reserve Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Monthly</div>
                <div className="text-muted-foreground">Audit Reports</div>
              </div>
            </div>
          </motion.div>

          {/* Reserve Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Reserve Composition</h2>
              <div className="space-y-6">
                {[
                  { asset: 'Bitcoin (BTC)', amount: '$1.2B', percentage: '43%', color: 'bg-orange-500' },
                  { asset: 'Ethereum (ETH)', amount: '$650M', percentage: '23%', color: 'bg-blue-500' },
                  { asset: 'Stablecoins (USDC/USDT)', amount: '$550M', percentage: '20%', color: 'bg-green-500' },
                  { asset: 'Cash & Equivalents', amount: '$275M', percentage: '10%', color: 'bg-gray-500' },
                  { asset: 'Other Digital Assets', amount: '$125M', percentage: '4%', color: 'bg-purple-500' }
                ].map((item, index) => (
                  <motion.div
                    key={item.asset}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + (0.1 * index) }}
                    className="glass-effect rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-4 h-4 rounded-full ${item.color}`}></div>
                        <span className="font-semibold text-foreground">{item.asset}</span>
                      </div>
                      <span className="text-lg font-bold text-yellow-400">{item.amount}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full bg-secondary/20 rounded-full h-2 mr-4">
                        <div
                          className={`h-2 rounded-full ${item.color}`}
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                      <span className="text-yellow-400 font-medium">{item.percentage}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">🏦 Reserve Management</h3>
              <div className="space-y-6">
                <div className="border-b border-border/20 pb-4">
                  <h4 className="font-semibold text-foreground mb-2">💰 Custody Partners</h4>
                  <p className="text-muted-foreground text-sm">
                    Assets are held with tier-1 institutional custodians including Coinbase Custody,
                    BitGo, and Fidelity Digital Assets.
                  </p>
                </div>

                <div className="border-b border-border/20 pb-4">
                  <h4 className="font-semibold text-foreground mb-2">🔐 Security Measures</h4>
                  <p className="text-muted-foreground text-sm">
                    Multi-signature wallets, hardware security modules, and geographically
                    distributed cold storage ensure maximum protection.
                  </p>
                </div>

                <div className="border-b border-border/20 pb-4">
                  <h4 className="font-semibold text-foreground mb-2">📊 Real-Time Monitoring</h4>
                  <p className="text-muted-foreground text-sm">
                    24/7 monitoring of all reserve assets with automated alerts and
                    real-time rebalancing to maintain optimal reserve ratios.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">🛡️ Insurance Coverage</h4>
                  <p className="text-muted-foreground text-sm">
                    All customer funds are covered by comprehensive insurance policies
                    with Lloyd's of London and other top-tier insurers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Audit Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">📋 Recent Audit Reports</h2>
              <p className="text-muted-foreground">Independently verified by leading audit firms</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  firm: 'Deloitte',
                  date: 'January 2025',
                  status: 'Clean Opinion',
                  highlights: ['125% reserve ratio verified', 'All assets accounted for', 'Security controls validated']
                },
                {
                  firm: 'PwC',
                  date: 'December 2024',
                  status: 'Unqualified',
                  highlights: ['Custody verification complete', 'Insurance policies confirmed', 'Operational controls effective']
                },
                {
                  firm: 'EY',
                  date: 'November 2024',
                  status: 'Clean Opinion',
                  highlights: ['Reserve calculations accurate', 'Multi-sig setup verified', 'Compliance maintained']
                }
              ].map((audit, index) => (
                <motion.div
                  key={audit.firm}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (0.1 * index) }}
                  className="bg-secondary/20 rounded-xl p-6"
                >
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-foreground">{audit.firm}</div>
                    <div className="text-muted-foreground">{audit.date}</div>
                    <div className="inline-block bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm mt-2">
                      {audit.status}
                    </div>
                  </div>
                  <div className="space-y-2">
                    {audit.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 btn-secondary text-sm">
                    Download Report
                  </button>
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
            <span className="text-6xl mb-6 block">🏢</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Transparency You Can Trust
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our commitment to transparency ensures your assets are always fully backed
              and independently verified by world-class audit firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View Live Reserve Data 📊
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Download Latest Audit
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
