'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle2, FileText, Globe, AlertTriangle, Eye, Lock, Scale, Building, Award, Clock, Calendar, Download, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function Compliance() {
  const lastUpdated = "December 15, 2024"

  const complianceFrameworks = [
    {
      title: "Anti-Money Laundering (AML)",
      icon: <Shield className="h-6 w-6" />,
      status: "Compliant",
      description: "Comprehensive AML program meeting all regulatory requirements",
      details: [
        "Customer Due Diligence (CDD) procedures for all account holders",
        "Enhanced Due Diligence (EDD) for high-risk customers and jurisdictions",
        "Ongoing monitoring of customer transactions and behavior patterns",
        "Suspicious Activity Report (SAR) filing with FinCEN when required",
        "Regular AML training for all employees and management",
        "Independent AML compliance testing and annual program reviews"
      ]
    },
    {
      title: "Know Your Customer (KYC)",
      icon: <Eye className="h-6 w-6" />,
      status: "Compliant",
      description: "Robust identity verification and customer onboarding processes",
      details: [
        "Government-issued photo ID verification for all customers",
        "Address verification through utility bills or bank statements",
        "PEP (Politically Exposed Person) screening and ongoing monitoring",
        "Sanctions list screening against OFAC and international lists",
        "Beneficial ownership identification for business accounts",
        "Periodic customer information updates and re-verification"
      ]
    },
    {
      title: "Bank Secrecy Act (BSA)",
      icon: <FileText className="h-6 w-6" />,
      status: "Compliant",
      description: "Full compliance with federal banking and financial regulations",
      details: [
        "Currency Transaction Reports (CTR) for transactions over $10,000",
        "Suspicious Activity Reports (SAR) filed within required timeframes",
        "Records retention policy meeting all BSA requirements",
        "Employee training on BSA compliance and reporting obligations",
        "Regular compliance audits and regulatory examinations",
        "Designated BSA compliance officer and reporting structure"
      ]
    },
    {
      title: "Office of Foreign Assets Control (OFAC)",
      icon: <Globe className="h-6 w-6" />,
      status: "Compliant",
      description: "Comprehensive sanctions compliance and screening program",
      details: [
        "Real-time screening against OFAC Specially Designated Nationals list",
        "Geographic sanctions compliance for restricted countries",
        "Sectoral sanctions identification and blocking procedures",
        "Regular updates to sanctions screening databases and systems",
        "Transaction monitoring for potential sanctions violations",
        "OFAC reporting and asset blocking when required by law"
      ]
    }
  ]

  const licenses = [
    {
      state: "New York",
      license: "BitLicense",
      number: "DFS-2024-001",
      issued: "January 15, 2024",
      expires: "January 15, 2026",
      status: "Active"
    },
    {
      state: "California",
      license: "Money Transmission License",
      number: "MTL-CA-2024-005",
      issued: "February 20, 2024",
      expires: "February 20, 2026",
      status: "Active"
    },
    {
      state: "Texas",
      license: "Money Services License",
      number: "MSL-TX-2024-012",
      issued: "March 10, 2024",
      expires: "March 10, 2026",
      status: "Active"
    },
    {
      state: "Federal",
      license: "MSB Registration",
      number: "31000-123456789",
      issued: "December 1, 2023",
      expires: "December 1, 2025",
      status: "Active"
    }
  ]

  const certifications = [
    {
      name: "SOC 2 Type II",
      issuer: "Independent CPA Firm",
      issued: "August 2024",
      expires: "August 2025",
      scope: "Security, Availability, Processing Integrity"
    },
    {
      name: "ISO 27001",
      issuer: "International Organization for Standardization",
      issued: "June 2024",
      expires: "June 2027",
      scope: "Information Security Management System"
    },
    {
      name: "PCI DSS Level 1",
      issuer: "Payment Card Industry Security Standards Council",
      issued: "September 2024",
      expires: "September 2025",
      scope: "Payment Card Data Security"
    }
  ]

  const riskManagement = [
    {
      category: "Operational Risk",
      measures: [
        "Business continuity and disaster recovery planning",
        "Cybersecurity incident response procedures",
        "Third-party vendor risk assessment and monitoring",
        "Internal controls and segregation of duties",
        "Regular risk assessments and control testing",
        "Employee background checks and ongoing monitoring"
      ]
    },
    {
      category: "Financial Risk",
      measures: [
        "Liquidity risk management and stress testing",
        "Market risk monitoring for digital asset price volatility",
        "Credit risk assessment for counterparty exposures",
        "Capital adequacy planning and regulatory reporting",
        "Daily reconciliation of customer funds and digital assets",
        "Independent custody arrangements with qualified custodians"
      ]
    },
    {
      category: "Compliance Risk",
      measures: [
        "Regulatory change monitoring and impact assessment",
        "Compliance training programs for all personnel",
        "Legal and regulatory consultation for new products",
        "Audit trail maintenance for all transactions and decisions",
        "Regular compliance reviews and independent testing",
        "Regulatory examination preparation and response protocols"
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
            <div className="p-3 bg-emerald-500/20 rounded-2xl">
              <Scale className="h-8 w-8 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Regulatory Compliance</h1>
              <p className="text-gray-400">CoinBank's commitment to regulatory excellence and customer protection</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Last updated: {lastUpdated}
            </div>
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              <button className="hover:text-white transition-colors">Download Compliance Report</button>
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
          <h2 className="text-2xl font-bold text-white mb-4">Our Compliance Commitment</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              CoinBank operates as a fully regulated money services business, maintaining licenses in multiple 
              jurisdictions and adhering to the highest standards of compliance and customer protection. Our 
              comprehensive compliance program ensures we meet all applicable laws and regulations.
            </p>
            <p>
              We work closely with regulators, law enforcement, and compliance experts to maintain a robust 
              framework that protects our customers, prevents financial crimes, and promotes the integrity 
              of the digital asset ecosystem.
            </p>
            <p>
              Our commitment extends beyond mere compliance – we actively participate in regulatory discussions 
              and industry initiatives to help shape responsible cryptocurrency regulation and best practices.
            </p>
          </div>
        </motion.div>

        {/* Compliance Status Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Compliance Status</p>
                <p className="text-2xl font-bold text-emerald-400">100%</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Building className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Active Licenses</p>
                <p className="text-2xl font-bold text-white">{licenses.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-500/20 rounded-lg">
                <Award className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Certifications</p>
                <p className="text-2xl font-bold text-white">{certifications.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-cyan-500/20 rounded-lg">
                <Clock className="h-5 w-5 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Last Audit</p>
                <p className="text-xl font-bold text-white">Q3 2024</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Compliance Frameworks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Compliance Frameworks</h2>
          <div className="grid gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                      {framework.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{framework.title}</h3>
                      <p className="text-gray-400">{framework.description}</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
                    {framework.status}
                  </span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {framework.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Licenses and Registrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Licenses and Registrations</h2>
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-800/50">
                  <tr>
                    <th className="text-left p-4 text-gray-400 font-medium">State/Federal</th>
                    <th className="text-left p-4 text-gray-400 font-medium">License Type</th>
                    <th className="text-left p-4 text-gray-400 font-medium">License Number</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Issued Date</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Expiration</th>
                    <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {licenses.map((license, index) => (
                    <tr key={index} className="border-t border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="p-4 text-white font-medium">{license.state}</td>
                      <td className="p-4 text-gray-300">{license.license}</td>
                      <td className="p-4 text-gray-300 font-mono text-sm">{license.number}</td>
                      <td className="p-4 text-gray-300">{license.issued}</td>
                      <td className="p-4 text-gray-300">{license.expires}</td>
                      <td className="p-4">
                        <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-medium">
                          {license.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Security Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Security Certifications</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <Award className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Issued:</span>
                    <span className="text-white">{cert.issued}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Expires:</span>
                    <span className="text-white">{cert.expires}</span>
                  </div>
                  <div className="mt-3">
                    <p className="text-gray-400 text-xs">Scope:</p>
                    <p className="text-gray-300 text-xs">{cert.scope}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Risk Management */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Risk Management Framework</h2>
          <div className="space-y-6">
            {riskManagement.map((risk, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8">
                <h3 className="text-xl font-semibold text-white mb-4">{risk.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {risk.measures.map((measure, measureIndex) => (
                    <div key={measureIndex} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{measure}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-2xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-emerald-500/20 rounded-lg">
              <FileText className="h-6 w-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Compliance and Regulatory Inquiries</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>
              For questions about our regulatory compliance, licensing, or to request compliance documentation, 
              please contact our Compliance Department.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Compliance Officer</h4>
                <p className="text-emerald-400">compliance@coinbank.com</p>
                <p className="text-gray-400 text-sm mt-1">Regulatory inquiries and documentation requests</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Regulatory Affairs</h4>
                <p className="text-gray-300">CoinBank Compliance Department</p>
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