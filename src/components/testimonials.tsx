"use client"

import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Portfolio Manager",
    company: "Crypto Capital Partners",
    image: "👩‍💼",
    rating: 5,
    quote: "CryptoBank has revolutionized how we manage institutional crypto portfolios. The trading interface is professional-grade, and the security measures give us complete peace of mind.",
    highlight: "Professional-grade trading"
  },
  {
    name: "Marcus Rodriguez",
    role: "DeFi Protocol Founder",
    company: "YieldForge",
    image: "👨‍💻",
    rating: 5,
    quote: "The yield farming features are incredibly sophisticated. We've been able to maximize our treasury returns while maintaining the security standards our investors expect.",
    highlight: "Sophisticated yield farming"
  },
  {
    name: "Emily Thompson",
    role: "Crypto Hedge Fund Manager",
    company: "Digital Asset Ventures",
    image: "👩‍🚀",
    rating: 5,
    quote: "The real-time analytics and institutional-grade infrastructure make CryptoBank our go-to platform for large-scale crypto operations. Exceptional service.",
    highlight: "Institutional-grade infrastructure"
  },
  {
    name: "David Kim",
    role: "Family Office CIO",
    company: "Heritage Wealth Management",
    image: "👨‍💼",
    rating: 5,
    quote: "For high-net-worth clients, security is paramount. CryptoBank's multi-signature wallets and insurance coverage provide the confidence we need.",
    highlight: "Unparalleled security"
  },
  {
    name: "Alexandra Petrov",
    role: "Blockchain Consultant",
    company: "NextGen Finance",
    image: "👩‍🔬",
    rating: 5,
    quote: "The integration between traditional banking and crypto services is seamless. It's exactly what the industry needed for mainstream adoption.",
    highlight: "Seamless integration"
  },
  {
    name: "James Wilson",
    role: "Investment Director",
    company: "Future Capital",
    image: "👨‍🎯",
    rating: 5,
    quote: "The global banking features with IBAN accounts make international crypto business operations incredibly smooth. Game-changing platform.",
    highlight: "Global banking excellence"
  }
]

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-secondary/10 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From hedge funds to family offices, professionals choose CryptoBank for
            institutional-grade crypto banking solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect rounded-3xl p-8 h-full hover-lift premium-shadow transition-all duration-300 group-hover:border-orange-500/30">
                {/* Quote Icon */}
                <div className="mb-6">
                  ●
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Highlight */}
                <div className="mb-6">
                  <span className="inline-block bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-400 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.highlight}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-orange-400">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center space-y-8">
            <h3 className="text-2xl font-semibold text-muted-foreground">
              Trusted by Over 150,000 Users Worldwide
            </h3>

            {/* Company Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {[
                "🏦 Goldman Sachs",
                "🌐 Binance",
                "🚀 Coinbase",
                "💎 Gemini",
                "⚡ Kraken",
                "🔥 FTX",
              ].map((company, index) => (
                <motion.div
                  key={company}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.6, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg font-medium text-muted-foreground hover:text-orange-400 transition-colors"
                >
                  {company}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
