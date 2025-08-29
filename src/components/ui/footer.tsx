"use client"

import Link from 'next/link'
import { Building2, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'Products',
      links: [
        { name: 'Digital Wallet', href: '/products/wallet' },
        { name: 'Trading Platform', href: '/products/trading' },
        { name: 'Crypto Card', href: '/products/card' },
        { name: 'Earn Interest', href: '/products/earn' },
        { name: 'Insurance Vault', href: '/products/insurance' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/company/about' },
        { name: 'Careers', href: '/company/careers' },
        { name: 'Press', href: '/company/press' },
        { name: 'Security', href: '/company/security' },
        { name: 'Compliance', href: '/company/compliance' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', href: '/support/help' },
        { name: 'Contact Us', href: '/support/contact' },
        { name: 'API Documentation', href: '/support/api' },
        { name: 'System Status', href: '/support/status' },
        { name: 'Bug Bounty', href: '/support/bounty' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', href: '/legal/terms' },
        { name: 'Privacy Policy', href: '/legal/privacy' },
        { name: 'Disclosures', href: '/about/disclosures' },
        { name: 'Cookie Policy', href: '/legal/cookies' },
        { name: 'Security', href: '/security/system' }
      ]
    }
  ]

  return (
    <footer className="professional-bg border-t border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold banking-gradient-text">CoinBank</span>
                <div className="text-xs text-cyan-400/60">Digital Banking</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The future of cryptocurrency banking. Secure, compliant, and innovative 
              financial services for the digital economy.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                <span>123 Financial District, New York, NY 10004</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-cyan-400" />
                <span>+1 (800) 555-COIN</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-cyan-400" />
                <span>info@coinbank.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 CoinBank. All rights reserved. Licensed Money Services Business.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>FDIC Insured</span>
              <span>•</span>
              <span>SOC 2 Certified</span>
              <span>•</span>
              <span>ISO 27001</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}