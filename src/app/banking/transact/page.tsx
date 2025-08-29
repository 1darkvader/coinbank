"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { AIChatbot } from '@/components/ai-chatbot'

export default function TransactPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <span className="text-4xl">↔️</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Global Transactions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Send and receive digital assets instantly across 150+ countries. Lightning-fast transfers
              with bank-grade security and competitive rates.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt; 30s</div>
                <div className="text-muted-foreground">Average Transfer Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">150+</div>
                <div className="text-muted-foreground">Countries Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">0.1%</div>
                <div className="text-muted-foreground">Transaction Fee</div>
              </div>
            </div>
          </motion.div>

          {/* Transaction Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid lg:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                symbol: '⚡',
                title: 'Instant Send',
                description: 'Send crypto to anyone, anywhere in the world within seconds',
                features: ['Sub-30 second transfers', 'Global coverage', 'Multi-currency support'],
                color: 'from-yellow-500 to-orange-600'
              },
              {
                symbol: '📥',
                title: 'Smart Receive',
                description: 'Generate QR codes and payment links for easy crypto receiving',
                features: ['QR code generation', 'Payment links', 'Auto-conversion'],
                color: 'from-green-500 to-emerald-600'
              },
              {
                symbol: '🔄',
                title: 'Cross-Chain Swap',
                description: 'Exchange between different cryptocurrencies seamlessly',
                features: ['Best rates guaranteed', 'Cross-chain support', 'Minimal slippage'],
                color: 'from-purple-500 to-violet-600'
              }
            ].map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass-effect rounded-2xl p-8 hover-lift"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-xl flex items-center justify-center mb-6`}>
                  <span className="text-3xl">{type.symbol}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{type.title}</h3>
                <p className="text-muted-foreground mb-6">{type.description}</p>
                <div className="space-y-2 mb-6">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="w-full btn-primary">
                  Start Transaction →
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Transaction Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-xl font-bold text-foreground mb-6">Send Money</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Recipient Address</label>
                  <input
                    type="text"
                    placeholder="Enter wallet address or select contact"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Amount</label>
                    <input
                      type="number"
                      placeholder="0.00"
                      className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Currency</label>
                    <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground">
                      <option>Bitcoin (BTC)</option>
                      <option>Ethereum (ETH)</option>
                      <option>USDC</option>
                    </select>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Network Fee:</span>
                    <span className="text-orange-400">$2.50</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-muted-foreground">Service Fee:</span>
                    <span className="text-orange-400">$1.00</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span className="text-foreground">Total Cost:</span>
                    <span className="text-orange-400">$103.50</span>
                  </div>
                </div>

                <button className="w-full btn-primary text-lg py-4">
                  Send Transaction
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Recent Transactions</h3>
              <div className="space-y-4">
                {[
                  { type: 'Sent', amount: '0.25 BTC', to: 'John Doe', status: 'Completed', time: '2 min ago' },
                  { type: 'Received', amount: '500 USDC', from: 'Sarah Wilson', status: 'Completed', time: '1 hour ago' },
                  { type: 'Sent', amount: '2.5 ETH', to: 'Mike Chen', status: 'Pending', time: '3 hours ago' },
                  { type: 'Swap', amount: '1000 USDC → 0.15 BTC', to: 'Exchange', status: 'Completed', time: '1 day ago' }
                ].map((tx, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="glass-effect rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-foreground">{tx.amount}</div>
                        <div className="text-sm text-muted-foreground">{tx.type} {tx.to || tx.from}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          tx.status === 'Completed' ? 'text-emerald-400' : 'text-yellow-400'
                        }`}>
                          {tx.status}
                        </div>
                        <div className="text-xs text-muted-foreground">{tx.time}</div>
                      </div>
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
            className="text-center bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-3xl p-12"
          >
            <span className="text-6xl mb-6 block">↔️</span>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Transacting Globally
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join millions of users who trust CoinBank for fast, secure, and affordable
              global cryptocurrency transactions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Send Your First Transaction 🚀
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Transaction Fees
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
