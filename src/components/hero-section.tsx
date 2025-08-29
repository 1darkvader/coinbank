"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export function HeroSection() {
  const [bitcoinPrice, setBitcoinPrice] = useState(40875.55)
  const [ethPrice, setEthPrice] = useState(2564.37)
  const [totalBalance, setTotalBalance] = useState(23850.00)

  // Simulate live price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setBitcoinPrice(prev => prev + (Math.random() - 0.5) * 50)
      setEthPrice(prev => prev + (Math.random() - 0.5) * 20)
      setTotalBalance(prev => prev + (Math.random() - 0.5) * 100)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden sophisticated-bg pt-36 pb-24">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-pattern opacity-30" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Network lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${20 + i * 15}%`}
                y1="20%"
                x2={`${30 + i * 10}%`}
                y2="80%"
                stroke="url(#gradient)"
                strokeWidth="1"
                strokeDasharray="5,5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  delay: i * 0.2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00BCD4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#2196F3" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Professional Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-2"
            >
              <div className="inline-flex items-center space-x-2 bg-cyan-500/10 text-cyan-400 px-6 py-3 rounded-full text-sm font-semibold border border-cyan-500/20">
                ●
                <span>Next-Generation Banking Platform</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-bold leading-[0.9]">
                <div className="text-luxury">The Future</div>
                <div className="text-luxury">of <span className="gradient-text">Finance</span></div>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Experience next-gen banking and trading with CoinBank.
                Seamlessly manage digital assets with institutional-grade security and innovative financial tools.
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-4">
                <button className="group btn-primary">
                  <span className="flex items-center space-x-2">
                    ●
                    <span>Hey CoinBank...</span>
                  </span>
                </button>
                <button className="btn-secondary">
                  <span className="flex items-center space-x-2">
                    <span>Learn More</span>
                    ●
                  </span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  ●
                  <span>Bank-Grade Security</span>
                </div>
                <div className="flex items-center space-x-2">
                  ●
                  <span>Global Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  ●
                  <span>Instant Transfers</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Professional Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Network Sphere Visualization */}
            <motion.div
              className="absolute top-1/4 right-1/4 w-80 h-80"
              animate={{
                rotate: 360
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="relative w-full h-full">
                {/* Outer rings */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute inset-${i * 8} border border-cyan-400/20 rounded-full`}
                    animate={{
                      rotate: i % 2 === 0 ? 360 : -360
                    }}
                    transition={{
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                ))}

                {/* Central sphere */}
                <div className="absolute inset-1/3 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-full blur-xl animate-pulse-glow" />
                <div className="absolute inset-1/3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20" />

                {/* Network nodes */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                    style={{
                      left: `${50 + 30 * Math.cos(i * 30 * Math.PI / 180)}%`,
                      top: `${50 + 30 * Math.sin(i * 30 * Math.PI / 180)}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <div className="space-y-6">
              {/* BTC Price Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="glass-effect rounded-2xl p-6 hover-lift max-w-sm ml-auto"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold">₿</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">BTC</div>
                      <div className="text-sm text-muted-foreground">Bitcoin</div>
                    </div>
                  </div>
                  ●
                </div>
                <motion.div
                  key={bitcoinPrice.toFixed(2)}
                  initial={{ color: "#00BCD4" }}
                  animate={{ color: "#ffffff" }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl font-bold mt-4"
                >
                  {formatPrice(bitcoinPrice)}
                </motion.div>
              </motion.div>

              {/* Total Balance Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="glass-effect rounded-2xl p-6 hover-lift max-w-xs"
              >
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Total Balance</div>
                  <motion.div
                    key={totalBalance.toFixed(2)}
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-3xl font-bold gradient-text"
                  >
                    {formatPrice(totalBalance)}
                  </motion.div>
                  <div className="flex items-center space-x-2">
                    <div className="text-sm text-emerald-400">+5.67%</div>
                    <div className="text-xs text-muted-foreground">24h</div>
                  </div>
                </div>
              </motion.div>

              {/* Markets Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="glass-effect rounded-2xl p-6 hover-lift"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold text-foreground">Markets</div>
                    <div className="text-xs text-cyan-400 cursor-pointer hover:text-cyan-300">View All</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 rounded bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                          <span className="text-xs text-white font-bold">E</span>
                        </div>
                        <span className="text-sm font-medium">ETH</span>
                      </div>
                      <motion.div
                        key={ethPrice.toFixed(2)}
                        initial={{ color: "#00BCD4" }}
                        animate={{ color: "#ffffff" }}
                        transition={{ duration: 0.3 }}
                        className="text-sm font-mono"
                      >
                        {ethPrice.toFixed(2)}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* CoinBot Assistant */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="glass-effect rounded-2xl p-6 hover-lift max-w-sm ml-auto"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      ●
                    </div>
                    <span className="text-sm font-semibold text-foreground">CoinBot</span>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-4">
                    <p className="text-sm text-muted-foreground">
                      Hello! How can I assist you today?
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Recent Transaction */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="glass-effect rounded-2xl p-6 hover-lift max-w-xs"
              >
                <div className="space-y-4">
                  <div className="text-sm text-muted-foreground">Recent Transaction</div>
                  <div className="flex items-center space-x-3">
                    ●
                    <div>
                      <div className="text-sm font-semibold text-foreground">Bank Transfer</div>
                      <div className="text-lg font-bold text-foreground">1,200.00</div>
                    </div>
                    ●
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
