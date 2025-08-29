"use client"

import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  FileText,
  Shield,
  Scale,
  AlertTriangle,
  CheckCircle2,
  Download,
  ExternalLink,
  Calendar,
  Building2,
  CreditCard
} from 'lucide-react'

export default function DisclosuresPage() {
  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="professional-logo-icon mx-auto mb-8">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold banking-gradient-text mb-6">
              Legal Disclosures
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Important legal information, regulatory disclosures, and compliance documentation 
              for our cryptocurrency banking services.
            </p>
          </div>

          {/* Regulatory Information */}
          <div className="banking-card rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Building2 className="w-8 h-8 text-cyan-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">Regulatory Information</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Financial Services License</h3>
                  <p className="text-gray-400 mb-2">
                    CoinBank is licensed as a Money Services Business (MSB) by FinCEN under license number MSB123456789.
                  </p>
                  <div className="text-sm text-cyan-400">License Status: Active</div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">FDIC Insurance</h3>
                  <p className="text-gray-400 mb-2">
                    Customer deposits are FDIC insured up to $250,000 per depositor, per insured bank.
                  </p>
                  <div className="text-sm text-emerald-400">Coverage: Full</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">State Registrations</h3>
                  <p className="text-gray-400 mb-2">
                    Licensed to operate in all 50 U.S. states and territories as a digital asset service provider.
                  </p>
                  <div className="text-sm text-cyan-400">Jurisdictions: 50+ States</div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">International Compliance</h3>
                  <p className="text-gray-400 mb-2">
                    Compliant with international AML/KYC standards and FATF recommendations.
                  </p>
                  <div className="text-sm text-emerald-400">Status: Compliant</div>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Disclosures */}
          <div className="banking-card rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-400 mr-4" />
              <h2 className="text-2xl font-bold text-white">Risk Disclosures</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Cryptocurrency Investment Risks</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Cryptocurrency investments are subject to high volatility and risk of total loss</li>
                  <li>• Past performance does not guarantee future results</li>
                  <li>• Digital assets are not legal tender and are not backed by any government</li>
                  <li>• Regulatory changes may affect the value and usability of cryptocurrencies</li>
                </ul>
              </div>
              
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Operational Risks</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Technology failures may result in temporary service interruptions</li>
                  <li>• Cybersecurity risks including potential data breaches or theft</li>
                  <li>• Third-party service provider dependencies</li>
                  <li>• Market liquidity risks during high volatility periods</li>
                </ul>
              </div>
              
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Custody and Security Risks</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Loss of private keys may result in permanent loss of funds</li>
                  <li>• Smart contract vulnerabilities in DeFi protocols</li>
                  <li>• Counterparty risks with external service providers</li>
                  <li>• Potential for irreversible transactions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Legal Documents */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="banking-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Legal Documents</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Terms of Service',
                    description: 'Complete terms and conditions for using CoinBank services',
                    updated: 'Updated: January 2024',
                    type: 'PDF'
                  },
                  {
                    title: 'Privacy Policy',
                    description: 'How we collect, use, and protect your personal information',
                    updated: 'Updated: December 2023',
                    type: 'PDF'
                  },
                  {
                    title: 'Customer Agreement',
                    description: 'Detailed agreement for cryptocurrency custody and trading services',
                    updated: 'Updated: November 2023',
                    type: 'PDF'
                  },
                  {
                    title: 'Fee Schedule',
                    description: 'Comprehensive list of all fees and charges',
                    updated: 'Updated: January 2024',
                    type: 'PDF'
                  }
                ].map((doc, index) => (
                  <div key={doc.title} className="flex items-center justify-between p-4 border border-gray-700 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="flex items-start space-x-3">
                      <FileText className="w-5 h-5 text-cyan-400 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white">{doc.title}</h3>
                        <p className="text-sm text-gray-400 mt-1">{doc.description}</p>
                        <div className="text-xs text-cyan-400 mt-1">{doc.updated}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">{doc.type}</span>
                      <button className="text-cyan-400 hover:text-cyan-300 p-1">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="banking-card rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Compliance Certifications</h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'SOC 2 Type II Certification',
                    status: 'Current',
                    description: 'Security, availability, and confidentiality controls audit',
                    icon: CheckCircle2,
                    color: 'text-emerald-400'
                  },
                  {
                    title: 'ISO 27001 Certification',
                    status: 'Current',
                    description: 'Information security management system certification',
                    icon: Shield,
                    color: 'text-blue-400'
                  },
                  {
                    title: 'PCI DSS Compliance',
                    status: 'Level 1',
                    description: 'Payment card industry data security standards',
                    icon: CreditCard,
                    color: 'text-purple-400'
                  }
                ].map((cert, index) => (
                  <div key={cert.title} className="flex items-start space-x-4">
                    <div className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center ${cert.color}`}>
                      <cert.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{cert.title}</h3>
                      <div className={`text-sm ${cert.color} font-medium`}>Status: {cert.status}</div>
                      <p className="text-sm text-gray-400 mt-1">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="banking-card rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Regulatory Contact Information</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-2">Compliance Officer</h3>
                <p className="text-gray-400 text-sm">compliance@coinbank.com</p>
                <p className="text-gray-400 text-sm">+1 (800) 555-COMP</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Legal Department</h3>
                <p className="text-gray-400 text-sm">legal@coinbank.com</p>
                <p className="text-gray-400 text-sm">+1 (800) 555-LEGAL</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Regulatory Inquiries</h3>
                <p className="text-gray-400 text-sm">regulatory@coinbank.com</p>
                <p className="text-gray-400 text-sm">+1 (800) 555-REG</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}