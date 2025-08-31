'use client'

import { motion } from 'framer-motion'
import { Shield, Lock, Eye, Database, UserCheck, Globe, Bell, Calendar, Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const lastUpdated = "December 15, 2024"

  const sections = [
    {
      title: "Information We Collect",
      icon: <Database className="h-6 w-6" />,
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "Full name, date of birth, and government-issued ID information for identity verification",
            "Email address, phone number, and residential address for account communications",
            "Social Security Number or Tax ID for regulatory compliance and tax reporting",
            "Employment information and income details for account verification purposes"
          ]
        },
        {
          subtitle: "Financial Information",
          details: [
            "Bank account details for fiat currency transactions and withdrawals",
            "Transaction history, trading patterns, and portfolio performance data",
            "Credit information and financial standing for enhanced service eligibility",
            "Cryptocurrency wallet addresses associated with your CoinBank account"
          ]
        },
        {
          subtitle: "Technical Data",
          details: [
            "IP address, device identifiers, and browser information for security monitoring",
            "Location data (with your consent) for fraud prevention and service optimization",
            "Usage analytics, feature interactions, and platform performance metrics",
            "Biometric data (if applicable) for enhanced security authentication"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: <UserCheck className="h-6 w-6" />,
      content: [
        {
          subtitle: "Account Management",
          details: [
            "Identity verification and Know Your Customer (KYC) compliance procedures",
            "Account creation, maintenance, and customer support services",
            "Processing cryptocurrency and fiat currency transactions securely",
            "Monitoring account activity for unauthorized access or suspicious behavior"
          ]
        },
        {
          subtitle: "Regulatory Compliance",
          details: [
            "Anti-Money Laundering (AML) screening and suspicious activity reporting",
            "Tax reporting obligations and regulatory filing requirements",
            "Sanctions screening and compliance with international financial regulations",
            "Audit trails and record-keeping for regulatory examination purposes"
          ]
        },
        {
          subtitle: "Service Improvement",
          details: [
            "Platform optimization based on user behavior and feedback analysis",
            "Development of new features and enhancement of existing services",
            "Risk assessment and fraud prevention system improvements",
            "Marketing communications and promotional offers (with your consent)"
          ]
        }
      ]
    },
    {
      title: "Information Sharing and Disclosure",
      icon: <Globe className="h-6 w-6" />,
      content: [
        {
          subtitle: "Regulatory Authorities",
          details: [
            "Financial Crimes Enforcement Network (FinCEN) for suspicious activity reports",
            "Internal Revenue Service (IRS) for tax compliance and reporting obligations",
            "Securities and Exchange Commission (SEC) for securities-related activities",
            "State regulatory bodies and international financial intelligence units"
          ]
        },
        {
          subtitle: "Service Providers",
          details: [
            "Third-party identity verification services for KYC compliance",
            "Payment processors and banking partners for fiat currency transactions",
            "Cloud service providers with appropriate data protection agreements",
            "Cybersecurity firms for threat detection and platform security monitoring"
          ]
        },
        {
          subtitle: "Legal Requirements",
          details: [
            "Court orders, subpoenas, and other valid legal process requirements",
            "Law enforcement investigations related to financial crimes or fraud",
            "National security investigations when legally required to cooperate",
            "Bankruptcy proceedings or asset recovery processes when applicable"
          ]
        }
      ]
    },
    {
      title: "Data Security and Protection",
      icon: <Shield className="h-6 w-6" />,
      content: [
        {
          subtitle: "Technical Safeguards",
          details: [
            "End-to-end encryption for all data transmission and storage systems",
            "Multi-factor authentication requirements for account access and transactions",
            "Regular security audits and penetration testing by certified professionals",
            "Cold storage solutions for cryptocurrency assets with offline key management"
          ]
        },
        {
          subtitle: "Access Controls",
          details: [
            "Role-based access permissions with principle of least privilege implementation",
            "Regular access reviews and immediate deactivation of unused accounts",
            "Segregated database environments with restricted administrative access",
            "Comprehensive audit logging of all data access and modification activities"
          ]
        },
        {
          subtitle: "Incident Response",
          details: [
            "24/7 security monitoring with automated threat detection systems",
            "Immediate containment procedures for suspected security breaches",
            "Prompt notification protocols for affected users and regulatory bodies",
            "Forensic investigation capabilities and evidence preservation procedures"
          ]
        }
      ]
    },
    {
      title: "Your Privacy Rights",
      icon: <Eye className="h-6 w-6" />,
      content: [
        {
          subtitle: "Access and Correction",
          details: [
            "Right to access your personal information held by CoinBank at any time",
            "Ability to correct inaccurate or outdated information in your profile",
            "Option to download your transaction history and account data",
            "Request for explanation of how your information is processed and used"
          ]
        },
        {
          subtitle: "Data Portability",
          details: [
            "Right to receive your data in a structured, machine-readable format",
            "Ability to transfer your information to other financial service providers",
            "Assistance with account closure and data migration processes",
            "Retention of transaction records as required by financial regulations"
          ]
        },
        {
          subtitle: "Marketing Preferences",
          details: [
            "Opt-out options for promotional emails and marketing communications",
            "Granular control over notification types and frequency settings",
            "Right to withdraw consent for non-essential data processing activities",
            "Preference management through your account dashboard or customer support"
          ]
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-cyan-500/20 rounded-2xl">
              <Shield className="h-8 w-8 text-cyan-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
              <p className="text-gray-400">How CoinBank protects and manages your personal information</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <button className="hover:text-white transition-colors">Download PDF</button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Commitment to Privacy</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              At CoinBank, we understand that privacy is fundamental to building trust in digital financial services. 
              This Privacy Policy explains how we collect, use, protect, and share your personal information when you 
              use our cryptocurrency exchange, wallet services, and financial products.
            </p>
            <p>
              As a regulated financial institution, we are committed to maintaining the highest standards of data 
              protection while complying with applicable laws and regulations, including the Bank Secrecy Act, 
              Anti-Money Laundering (AML) requirements, and state money transmission laws.
            </p>
            <p>
              We employ industry-leading security measures, including end-to-end encryption, cold storage for digital 
              assets, and multi-factor authentication to protect your information and funds. Your trust is our 
              priority, and we continuously invest in technologies and processes to safeguard your privacy.
            </p>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg text-cyan-400">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>

              <div className="space-y-8">
                {section.content.map((subsection, subIndex) => (
                  <div key={subIndex}>
                    <h3 className="text-lg font-semibold text-white mb-4">{subsection.subtitle}</h3>
                    <div className="grid gap-3">
                      {subsection.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 mt-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <Bell className="h-6 w-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Privacy Questions or Concerns?</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>
              If you have questions about this Privacy Policy, how we handle your personal information, 
              or wish to exercise your privacy rights, please contact our Data Protection Officer.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Email Contact</h4>
                <p className="text-cyan-400">privacy@coinbank.com</p>
                <p className="text-gray-400 text-sm mt-1">Response within 48 hours</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Mailing Address</h4>
                <p className="text-gray-300">CoinBank Privacy Office</p>
                <p className="text-gray-300">123 Blockchain Avenue, Suite 500</p>
                <p className="text-gray-300">San Francisco, CA 94105</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
