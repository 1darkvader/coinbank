"use client";

import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import { HeroSection } from '@/components/hero-section'
import { ServicesShowcase } from '@/components/services-showcase'
import { TradingInterface } from '@/components/trading-interface'
import { Testimonials } from '@/components/testimonials'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen professional-bg text-foreground overflow-x-hidden">
      <Navigation />
      <CryptoTicker />

      {/* Main Content with proper spacing for fixed elements */}
      <div className="relative">
        <HeroSection />

        {/* Professional Banking Products Section */}
        <section className="py-32 relative">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 grid-pattern opacity-5" />
            <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-blue-500/10 to-transparent" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
                Professional Banking <span className="gradient-text">Products</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive digital banking solutions designed for the modern economy
              </p>
            </div>

            {/* Main Products Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Digital Wallet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-effect rounded-3xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V9C21 7.89543 20.1046 7 19 7Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 10H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Digital Wallet</h3>
                <p className="text-cyan-400 font-medium mb-4">Secure & Instant</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Store, send, and receive cryptocurrencies with military-grade security. Multi-signature
                  protection and cold storage for maximum safety.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Multi-sig security</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Cold storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Instant transfers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Mobile app</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Learn More →
                </button>
              </motion.div>

              {/* Earn Interest */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-effect rounded-3xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12L18 8L14 12L10 8L6 12L2 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 20L18 16L14 20L10 16L6 20L2 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Earn Interest</h3>
                <p className="text-emerald-400 font-medium mb-4">Up to 12% APY</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Grow your crypto holdings with competitive yield farming, staking rewards, and DeFi
                  protocols. Automated strategies for maximum returns.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">12% APY on stables</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Auto-compounding</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">DeFi protocols</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Risk management</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Learn More →
                </button>
              </motion.div>

              {/* Crypto Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-effect rounded-3xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" stroke="white" strokeWidth="2"/>
                    <line x1="1" y1="10" x2="23" y2="10" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Crypto Card</h3>
                <p className="text-orange-400 font-medium mb-4">Spend Anywhere</p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Spend your crypto anywhere with our premium metal card. Real-time conversion,
                  cashback rewards, and global acceptance.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Global acceptance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Real-time conversion</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">2% cashback</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Premium metal card</span>
                  </div>
                </div>
                <button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Learn More →
                </button>
              </motion.div>
            </div>

            {/* Secondary Products Grid */}
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Lightning Trading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-effect rounded-3xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Lightning Trading</h3>
                <p className="text-purple-400 font-medium mb-4">Ultra-Fast Execution</p>
                <p className="text-muted-foreground leading-relaxed">
                  Professional trading platform with institutional-grade features and lightning-fast execution.
                </p>
              </motion.div>

              {/* Insurance Vault */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-effect rounded-3xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22S8 18 8 13V6L12 4L16 6V13C16 18 12 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Insurance Vault</h3>
                <p className="text-rose-400 font-medium mb-4">Ultimate Protection</p>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive insurance coverage for your digital assets with our industry-leading protection.
                </p>
              </motion.div>

              {/* Global Banking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="glass-effect rounded-3xl p-8 hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                    <line x1="2" y1="12" x2="22" y2="12" stroke="white" strokeWidth="2"/>
                    <path d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="white" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Global Banking</h3>
                <p className="text-teal-400 font-medium mb-4">Worldwide Access</p>
                <p className="text-muted-foreground leading-relaxed">
                  Traditional banking services with global reach, supporting 150+ countries and currencies.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <div className="relative">
          <ServicesShowcase />
        </div>

        {/* Trading Section */}
        <div className="relative">
          <TradingInterface />
        </div>

        {/* Testimonials Section */}
        <div className="relative">
          <Testimonials />
        </div>

        {/* Premium CTA Section */}
        <section className="py-32 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-luxury">
                Ready to Experience the Future of{' '}
                <span className="gradient-text">Digital Banking?</span>
              </h2>
              <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Join over 250,000 professionals who trust CoinBank for institutional-grade
                crypto banking solutions. Start your digital finance journey today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group btn-primary text-lg px-12 py-5">
                <span className="flex items-center space-x-3">
                  <span>Start Your Journey</span>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </span>
              </button>
              <button className="btn-secondary text-lg px-12 py-5">
                <span className="flex items-center space-x-3">
                  <span>Schedule Consultation</span>
                </span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid md:grid-cols-3 gap-8 pt-12">
              {[
                { icon: '🛡️', title: 'Bank-Grade Security', desc: 'Multi-signature wallets & cold storage' },
                { icon: '⚡', title: 'Lightning Fast', desc: 'Sub-second transaction processing' },
                { icon: '🌍', title: 'Global Coverage', desc: '150+ countries supported worldwide' }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center space-y-3 p-6 glass-effect rounded-2xl hover-lift">
                  <div className="text-4xl">{item.icon}</div>
                  <div className="text-lg font-semibold text-foreground">{item.title}</div>
                  <div className="text-sm text-muted-foreground text-center">{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Professional Credentials */}
            <div className="pt-16 border-t border-cyan-500/20">
              <div className="text-sm text-muted-foreground mb-8">
                Trusted by leading financial institutions worldwide
              </div>
              <div className="flex flex-wrap items-center justify-center gap-12 opacity-60">
                {[
                  '🏦 Goldman Sachs',
                  '🌐 Binance',
                  '🚀 Coinbase',
                  '💎 Gemini',
                  '⚡ Kraken',
                  '🔷 BitGo'
                ].map((company, index) => (
                  <div
                    key={company}
                    className="text-lg font-medium text-muted-foreground hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Premium Footer */}
        <footer className="relative bg-secondary/30 border-t border-cyan-500/20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 grid-pattern opacity-5" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">CoinBank</div>
                    <div className="text-sm text-muted-foreground">Digital Banking</div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-md text-lg">
                  The future of digital banking. Combining traditional banking security
                  with cutting-edge crypto innovation for professionals worldwide.
                </p>
                <div className="flex space-x-6">
                  {[
                    { icon: '📧', label: 'Email' },
                    { icon: '🐦', label: 'Twitter' },
                    { icon: '📱', label: 'LinkedIn' },
                    { icon: '💼', label: 'GitHub' }
                  ].map((social, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center hover-lift cursor-pointer group"
                      title={social.label}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform">
                        {social.icon}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Links */}
              {[
                {
                  title: 'Products',
                  links: ['Digital Wallet', 'Trading Platform', 'Crypto Card', 'Earn Interest', 'Insurance Vault']
                },
                {
                  title: 'Company',
                  links: ['About Us', 'Careers', 'Press', 'Security', 'Compliance']
                },
                {
                  title: 'Support',
                  links: ['Help Center', 'Contact Us', 'API Documentation', 'System Status', 'Bug Bounty']
                }
              ].map((section, index) => (
                <div key={index} className="space-y-6">
                  <h3 className="font-semibold text-lg text-foreground">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-muted-foreground hover:text-cyan-400 transition-colors text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-cyan-500/20 mt-16 pt-12">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
                <div className="text-muted-foreground text-sm">
                  © 2025 CoinBank. All rights reserved. | Licensed financial institution | FDIC Insured
                </div>
                <div className="flex flex-wrap gap-8 text-sm">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Compliance'].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="text-muted-foreground hover:text-cyan-400 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="mt-8 p-6 glass-effect rounded-2xl">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  CoinBank is a licensed financial institution regulated by leading financial authorities.
                  Cryptocurrency services provided by CoinBank Digital Assets LLC. Member FDIC.
                  All digital assets are covered by our comprehensive insurance program.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
