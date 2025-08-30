"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './button'
import { useSession, signOut } from 'next-auth/react'
import { 
  ChevronDown,
  User,
  Settings,
  LogOut,
  Shield,
  Building2
} from 'lucide-react'

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
    title: 'PRODUCTS',
    items: [
      { name: 'Digital Wallet', href: '/products/wallet', symbol: '💼', description: 'Secure crypto storage' },
      { name: 'Trading Platform', href: '/products/trading', symbol: '📊', description: 'Advanced trading tools' },
      { name: 'Crypto Card', href: '/products/card', symbol: '💳', description: 'Spend crypto anywhere' },
      { name: 'Earn Interest', href: '/products/earn', symbol: '💰', description: 'Grow your crypto' },
      { name: 'Insurance Vault', href: '/products/insurance', symbol: '🛡️', description: 'Asset protection' }
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
    title: 'COMPANY',
    items: [
      { name: 'About Us', href: '/company/about', symbol: '🏢', description: 'Our mission and vision' },
      { name: 'Careers', href: '/company/careers', symbol: '👥', description: 'Join our team' },
      { name: 'Press', href: '/company/press', symbol: '📰', description: 'News and media' },
      { name: 'Security', href: '/company/security', symbol: '🔐', description: 'Security practices' }
    ]
  },
  {
    title: 'SUPPORT',
    items: [
      { name: 'Help Center', href: '/support/help', symbol: '❓', description: 'Get assistance' },
      { name: 'Contact Us', href: '/support/contact', symbol: '📞', description: '24/7 support' },
      { name: 'API Docs', href: '/support/api', symbol: '📚', description: 'Developer resources' },
      { name: 'System Status', href: '/support/status', symbol: '⚡', description: 'Platform status' }
    ]
  }
]

// Professional header navigation items
const headerNavItems = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '#', hasDropdown: true },
  { name: 'Trading', href: '/trading' },
  { name: 'Security', href: '/security/system' },
  { name: 'Company', href: '#', hasDropdown: true }
]

const productsDropdown = [
  { name: 'Digital Wallet', href: '/products/wallet', description: 'Secure crypto storage' },
  { name: 'Trading Platform', href: '/products/trading', description: 'Advanced trading tools' },
  { name: 'Crypto Card', href: '/products/card', description: 'Spend crypto anywhere' },
  { name: 'Earn Interest', href: '/products/earn', description: 'Grow your crypto' },
  { name: 'Insurance Vault', href: '/products/insurance', description: 'Asset protection' }
]

const companyDropdown = [
  { name: 'About Us', href: '/company/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/company/careers', description: 'Join our team' },
  { name: 'Press', href: '/company/press', description: 'News and media' },
  { name: 'Security', href: '/company/security', description: 'Security practices' },
  { name: 'Compliance', href: '/company/compliance', description: 'Regulatory framework' }
]

export function Navigation() {
  const { data: session } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMenuOpen || userMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen, userMenuOpen])

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' })
  }

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
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity"/>
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

            {/* Professional Header Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {headerNavItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="professional-nav-button px-4 py-2 rounded-lg flex items-center">
                        {item.name}
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full mt-2 w-64 banking-card rounded-xl py-2 shadow-xl z-50"
                          >
                            {(item.name === 'Products' ? productsDropdown : companyDropdown).map((dropItem) => (
                              <Link key={dropItem.name} href={dropItem.href}>
                                <button className="w-full text-left px-4 py-3 text-sm hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                                  <div className="font-medium text-white">{dropItem.name}</div>
                                  <div className="text-xs text-gray-400 mt-1">{dropItem.description}</div>
                                </button>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <button className="professional-nav-button px-4 py-2 rounded-lg">
                        {item.name}
                      </button>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* User Account Area & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {session ? (
                <div className="relative">
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="professional-nav-button px-4 py-2 rounded-lg flex items-center space-x-2"
                  >
                    <User className="w-4 h-4" />
                    <span>Account</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* User Dropdown Menu */}
                  <AnimatePresence>
                    {userMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-64 banking-card rounded-xl py-2 shadow-xl"
                      >
                        <div className="px-4 py-3 border-b border-gray-700">
                          <div className="text-sm font-semibold text-white">
                            {session.user?.name || 'User'}
                          </div>
                          <div className="text-xs text-gray-400">
                            {session.user?.email}
                          </div>
                        </div>
                        
                        <Link href="/account/dashboard">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 flex items-center">
                            <User className="w-4 h-4 mr-3" />
                            Dashboard
                          </button>
                        </Link>
                        
                        <Link href="/account/settings">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 flex items-center">
                            <Settings className="w-4 h-4 mr-3" />
                            Settings
                          </button>
                        </Link>
                        
                        <Link href="/account/security">
                          <button className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 flex items-center">
                            <Shield className="w-4 h-4 mr-3" />
                            Security
                          </button>
                        </Link>
                        
                        <div className="border-t border-gray-700 mt-2 pt-2">
                          <button
                            onClick={handleSignOut}
                            className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-500/10 flex items-center"
                          >
                            <LogOut className="w-4 h-4 mr-3" />
                            Sign Out
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <>
                  <Link href="/signin">
                    <Button variant="ghost" className="professional-nav-button">
                      Sign In
                    </Button>
                  </Link>
                  <Link href="/auth/signup">
                    <Button className="professional-button">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}

              {/* Hamburger Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="professional-nav-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? '✕' : '☰'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-2">
              {session && (
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="professional-nav-button p-2 rounded-lg"
                >
                  <User className="w-5 h-5" />
                </button>
              )}
              <Button
                variant="ghost"
                size="icon"
                className="professional-nav-button"
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
              className="lg:hidden banking-card border-t border-cyan-500/20"
            >
              <div className="px-4 py-6 space-y-4">
                {session ? (
                  <>
                    <Link href="/account/dashboard">
                      <button className="flex items-center space-x-3 py-3 text-lg font-medium text-slate-300 hover:text-cyan-400 transition-colors">
                        <User className="w-5 h-5" />
                        <span>Dashboard</span>
                      </button>
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center space-x-3 py-3 text-lg font-medium text-red-400 hover:text-red-300 transition-colors"
                    >
                      <LogOut className="w-5 h-5" />
                      <span>Sign Out</span>
                    </button>
                  </>
                ) : (
                  <div className="space-y-2">
                    <Link href="/signin">
                      <Button variant="ghost" className="w-full justify-center professional-nav-button">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/signup">
                      <Button className="w-full professional-button">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Sophisticated Full-Screen Menu Overlay - KEEP ORIGINAL STYLE */}
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
                    <div className="professional-logo-icon">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold banking-gradient-text">
                        CoinBank
                      </span>
                      <span className="text-xs text-cyan-400/60 font-medium -mt-1">
                        Professional Banking
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
                className="grid md:grid-cols-2 lg:grid-cols-5 gap-12"
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
                    <Link href="/auth/signup">
                      <Button className="professional-button">
                        Open Account
                      </Button>
                    </Link>
                    <Link href="/support/contact">
                      <Button variant="ghost" className="professional-nav-button">
                        Contact Sales
                      </Button>
                    </Link>
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