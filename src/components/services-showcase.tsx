"use client"

import { motion } from 'framer-motion'

const services = [
  {
    symbol: "💼",
    title: "Digital Wallet",
    subtitle: "Secure & Instant",
    description: "Store, send, and receive cryptocurrencies with military-grade security. Multi-signature protection and cold storage for maximum safety.",
    features: ["Multi-sig security", "Cold storage", "Instant transfers", "Mobile app"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    symbol: "📈",
    title: "Earn Interest",
    subtitle: "Up to 12% APY",
    description: "Grow your crypto holdings with competitive yield farming, staking rewards, and DeFi protocols. Automated strategies for maximum returns.",
    features: ["12% APY on stables", "Auto-compounding", "DeFi protocols", "Risk management"],
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    symbol: "💳",
    title: "Crypto Card",
    subtitle: "Spend Anywhere",
    description: "Spend your crypto anywhere with our premium metal card. Real-time conversion, cashback rewards, and global acceptance.",
    features: ["Global acceptance", "Real-time conversion", "2% cashback", "Premium metal card"],
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-500/20 to-amber-500/20"
  },
  {
    symbol: "⚡",
    title: "Lightning Trading",
    subtitle: "Ultra-Fast Execution",
    description: "Trade with institutional-grade speed and liquidity. Advanced order types, margin trading, and professional analytics tools.",
    features: ["Sub-second execution", "Advanced orders", "Margin trading", "Professional tools"],
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-500/20 to-violet-500/20"
  },
  {
    symbol: "🛡️",
    title: "Insurance Vault",
    subtitle: "Ultimate Protection",
    description: "Comprehensive insurance coverage for your digital assets. Multi-layer protection against hacks, theft, and operational risks.",
    features: ["Full insurance", "Multi-layer security", "Regulatory compliance", "24/7 monitoring"],
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/20 to-rose-500/20"
  },
  {
    symbol: "🌍",
    title: "Global Banking",
    subtitle: "Worldwide Access",
    description: "Traditional banking services integrated with crypto. IBAN accounts, international transfers, and fiat on/off ramps.",
    features: ["IBAN accounts", "SWIFT transfers", "Fiat on/off ramps", "Regulatory compliant"],
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/20 to-blue-500/20"
  }
]

export function ServicesShowcase() {
  return (
    <section className="py-24 bg-gradient-to-br from-secondary/20 via-background to-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury">
            Complete <span className="gradient-text">Crypto Banking</span> Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need for modern digital finance. From secure storage to professional trading,
            we provide institutional-grade services for everyone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect rounded-3xl p-8 h-full hover-lift premium-shadow transition-all duration-300 group-hover:border-orange-500/30">
                {/* Header */}
                <div className="space-y-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.bgGradient} flex items-center justify-center`}>
                    <span className="text-3xl">{service.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-luxury">{service.title}</h3>
                    <p className={`text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <button className={`group/btn w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-${service.gradient.split(' ')[1]}/20 text-white`}>
                  <span>Learn More</span>
                  ●
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="glass-effect rounded-3xl p-8 premium-shadow">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { symbol: '🪙', value: '$2.4B+', label: 'Assets Under Management', color: 'text-yellow-400' },
                { symbol: '🛡️', value: '99.9%', label: 'Uptime Guarantee', color: 'text-green-400' },
                { symbol: '⏰', value: '<1s', label: 'Average Trade Execution', color: 'text-blue-400' },
                { symbol: '🌍', value: '150+', label: 'Countries Supported', color: 'text-purple-400' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <span className="text-3xl">{stat.symbol}</span>
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
