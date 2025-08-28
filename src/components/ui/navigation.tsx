"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './button'

interface NavigationItem {
  name: string
  href: string
  description?: string
  symbol: string
}

interface NavigationSection {
  title: string
  items: NavigationItem[]
}

const navigationSections: NavigationSection[] = [
  {
    title: 'BANKING',
    items: [
      { name: 'Hold', href: '/banking/hold', symbol: '🔒', description: 'Secure crypto custody' },
      { name: 'Transact', href: '/banking/transact', symbol: '↔️', description: 'Send and receive globally' },
      { name: 'Earn', href: '/banking/earn', symbol: '📈', description: 'Yield farming and staking' },
      { name: 'Grow', href: '/banking/grow', symbol: '🌱', description: 'Investment strategies' },
      { name: 'Borrow', href: '/banking/borrow', symbol: '🏛️', description: 'Crypto-backed loans' }
    ]
  },
  {
    title: 'SECURITY',
    items: [
      { name: 'Security System', href: '/security/system', symbol: '🛡️', description: 'Military-grade protection' },
      { name: 'Reserve', href: '/security/reserve', symbol: '🏢', description: 'Asset backing and reserves' },
      { name: 'Compliance', href: '/security/compliance', symbol: '⚖️', description: 'Regulatory framework' },
      { name: 'Inheritance', href: '/security/inheritance', symbol: '👥', description: 'Legacy planning' }
    ]
  },
  {
    title: 'RESOURCES',
    items: [
      { name: 'CoinBank Insider', href: '/resources/insider', symbol: '📚', description: 'Market insights and news' },
      { name: 'Membership Benefits', href: '/resources/benefits', symbol: '🏆', description: 'Exclusive perks and rewards' },
      { name: 'FAQs', href: '/resources/faqs', symbol: '❓', description: 'Common questions' },
      { name: 'Support', href: '/resources/support', symbol: '📞', description: '24/7 customer service' }
    ]
  },
  {
    title: 'ABOUT US',
    items: [
      { name: 'Mission', href: '/about/mission', symbol: '🎯', description: 'Our vision and values' },
      { name: 'Expertise', href: '/about/expertise', symbol: '💼', description: 'Leadership team' },
      { name: 'Careers', href: '/about/careers', symbol: '👥', description: 'Join our team' },
      { name: 'Disclosures', href: '/about/disclosures', symbol: '📄', description: 'Legal information' }
    ]
  }
]

const quickLinks = [
  { name: 'Dashboard', href: '/dashboard', symbol: '💼' },
  { name: 'Trading', href: '/trading', symbol: '📊' },
  { name: 'Card', href: '/card', symbol: '💳' }
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Professional CoinBank Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Logo Container with premium design */}
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center professional-shadow">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-banking bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  CoinBank
                </span>
                <span className="text-xs text-cyan-400/60 font-medium -mt-1">
                  Digital Banking
                </span>
              </div>
            </Link>

            {/* Desktop Quick Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {quickLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-cyan-400 transition-colors font-medium relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="ghost"
                className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 font-medium"
              >
                Sign In
              </Button>
              <Button className="btn-professional">
                Get Started
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? '✕' : '☰'}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-b border-cyan-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 py-3 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-xl">{item.symbol}</span>
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 space-y-2">
                  <Button variant="ghost" className="w-full justify-center text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10">
                    Sign In
                  </Button>
                  <Button className="w-full btn-professional">
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sophisticated Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-slate-900/98 backdrop-blur-xl"
          >
            {/* Menu Header */}
            <div className="border-b border-cyan-500/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                  <Link href="/" className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                          stroke="white"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        CoinBank
                      </span>
                      <span className="text-xs text-cyan-400/60 font-medium -mt-1">
                        Digital Banking
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-12 h-12 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-xl transition-colors"
                  >
                    ✕
                  </button>
                </div>
              </div>
            </div>

            {/* Menu Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-12"
              >
                {navigationSections.map((section, sectionIndex) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (sectionIndex * 0.1) }}
                    className="space-y-6"
                  >
                    <h3 className="text-sm font-bold text-cyan-400 tracking-wider">
                      {section.title}
                    </h3>
                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + (sectionIndex * 0.1) + (itemIndex * 0.05) }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="group block p-3 rounded-xl hover:bg-white/5 transition-all duration-300"
                          >
                            <div className="flex items-start space-x-3">
                              <div className="w-10 h-10 bg-cyan-500/20 group-hover:bg-cyan-500/30 rounded-lg flex items-center justify-center transition-colors">
                                <span className="text-cyan-400 text-lg">{item.symbol}</span>
                              </div>
                              <div className="flex-1">
                                <div className="font-semibold text-foreground group-hover:text-cyan-400 transition-colors">
                                  {item.name}
                                </div>
                                {item.description && (
                                  <div className="text-sm text-muted-foreground mt-1">
                                    {item.description}
                                  </div>
                                )}
                              </div>
                              <span className="text-muted-foreground group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all">→</span>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16 pt-8 border-t border-cyan-500/20 text-center"
              >
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">
                    Ready to start your digital banking journey?
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button className="btn-professional">
                      Open Account
                    </Button>
                    <Button variant="ghost" className="text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/10">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
