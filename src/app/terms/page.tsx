'use client'

import { motion } from 'framer-motion'
import { Scale, FileText, AlertTriangle, CheckCircle2, Shield, Globe, DollarSign, Clock, ArrowLeft, Download, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  const lastUpdated = "December 15, 2024"

  const sections = [
    {
      title: "Account Terms and Eligibility",
      icon: <CheckCircle2 className="h-6 w-6" />,
      content: [
        {
          subtitle: "Eligibility Requirements",
          details: [
            "You must be at least 18 years old and have the legal capacity to enter into contracts",
            "You must be a resident of a jurisdiction where CoinBank services are legally available",
            "You must not be listed on any trade or economic sanctions lists or prohibited persons lists",
            "You must provide accurate, current, and complete information during registration"
          ]
        },
        {
          subtitle: "Account Registration and Verification",
          details: [
            "You agree to complete our Know Your Customer (KYC) verification process",
            "You authorize us to verify your identity through third-party services and databases",
            "You must maintain accurate account information and notify us of any changes promptly",
            "You are responsible for maintaining the security and confidentiality of your login credentials"
          ]
        },
        {
          subtitle: "Account Restrictions and Suspension",
          details: [
            "We reserve the right to suspend or terminate accounts that violate these terms",
            "Accounts may be restricted pending completion of verification or compliance procedures",
            "We may freeze accounts suspected of fraudulent, suspicious, or illegal activity",
            "Account holders must comply with applicable anti-money laundering and sanctions laws"
          ]
        }
      ]
    },
    {
      title: "Services and Platform Usage",
      icon: <Globe className="h-6 w-6" />,
      content: [
        {
          subtitle: "Cryptocurrency Trading Services",
          details: [
            "CoinBank provides a platform for buying, selling, and trading digital assets",
            "All trades are subject to market availability, liquidity, and system capacity",
            "We do not guarantee execution of trades at specific prices or within specific timeframes",
            "Trading fees and spreads apply as disclosed in our fee schedule"
          ]
        },
        {
          subtitle: "Wallet and Custody Services",
          details: [
            "CoinBank provides hosted wallet services for supported digital assets",
            "We maintain custody of your digital assets in secure, segregated accounts",
            "Private keys are generated and stored using industry-standard security practices",
            "You acknowledge that custody services involve counterparty risk"
          ]
        },
        {
          subtitle: "Fiat Currency Services",
          details: [
            "We offer fiat currency deposit and withdrawal services through banking partners",
            "All fiat transactions are subject to banking regulations and processing times",
            "We may impose daily, weekly, or monthly limits on fiat currency transactions",
            "Currency conversion services are provided at prevailing exchange rates plus applicable fees"
          ]
        }
      ]
    },
    {
      title: "Fees, Payments, and Financial Terms",
      icon: <DollarSign className="h-6 w-6" />,
      content: [
        {
          subtitle: "Trading and Transaction Fees",
          details: [
            "All applicable fees are disclosed in our fee schedule, which may be updated periodically",
            "Trading fees are calculated as a percentage of transaction volume or fixed amounts",
            "Network fees for blockchain transactions are passed through at cost",
            "Fees are deducted automatically from your account balance at the time of transaction"
          ]
        },
        {
          subtitle: "Payment Processing and Settlement",
          details: [
            "All payments must be made from accounts in your name or authorized third-party accounts",
            "We reserve the right to reject deposits from unverified or suspicious sources",
            "Settlement times vary by payment method and may be subject to processing delays",
            "Chargebacks, reversals, or disputed payments may result in account restrictions"
          ]
        },
        {
          subtitle: "Account Balances and Withdrawals",
          details: [
            "Account balances reflect assets held in custody on your behalf",
            "Withdrawal requests are processed subject to security reviews and compliance checks",
            "We may impose withdrawal limits based on account verification level and risk assessment",
            "Inactive accounts may be subject to maintenance fees as disclosed in our fee schedule"
          ]
        }
      ]
    },
    {
      title: "Risk Disclosures and Disclaimers",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: [
        {
          subtitle: "Cryptocurrency Market Risks",
          details: [
            "Digital asset prices are highly volatile and may fluctuate significantly",
            "You may lose some or all of your investment in digital assets",
            "Past performance is not indicative of future results",
            "Market disruptions may affect the availability or pricing of digital assets"
          ]
        },
        {
          subtitle: "Technology and Security Risks",
          details: [
            "Blockchain networks may experience congestion, forks, or other technical issues",
            "Cybersecurity threats, including hacking attempts, may affect platform operations",
            "Smart contract vulnerabilities or bugs may result in loss of digital assets",
            "Technology failures or system outages may temporarily prevent access to services"
          ]
        },
        {
          subtitle: "Regulatory and Legal Risks",
          details: [
            "Cryptocurrency regulations are evolving and may affect the availability of services",
            "Changes in laws or regulations may require modification or discontinuation of services",
            "Tax implications of digital asset transactions vary by jurisdiction",
            "Legal or regulatory action may result in restrictions on account access or asset recovery"
          ]
        }
      ]
    },
    {
      title: "Compliance and Legal Obligations",
      icon: <Shield className="h-6 w-6" />,
      content: [
        {
          subtitle: "Anti-Money Laundering (AML) Compliance",
          details: [
            "CoinBank maintains comprehensive AML policies and procedures",
            "We monitor transactions for suspicious activity and file reports with relevant authorities",
            "Enhanced due diligence may be required for high-risk customers or transactions",
            "We cooperate fully with law enforcement and regulatory investigations"
          ]
        },
        {
          subtitle: "Sanctions and Prohibited Use",
          details: [
            "Users must comply with all applicable economic sanctions and trade restrictions",
            "Services are not available to persons or entities on sanctions lists",
            "Platform use for illegal activities, including money laundering or terrorism financing, is prohibited",
            "We actively screen customers and transactions against sanctions and prohibited persons lists"
          ]
        },
        {
          subtitle: "Tax Reporting and Record Keeping",
          details: [
            "We provide transaction history and tax reporting documents as required by law",
            "Users are responsible for determining and paying applicable taxes on digital asset transactions",
            "We may report customer information and transactions to tax authorities as required",
            "Records of all transactions are maintained for regulatory compliance purposes"
          ]
        }
      ]
    },
    {
      title: "Limitation of Liability and Dispute Resolution",
      icon: <Scale className="h-6 w-6" />,
      content: [
        {
          subtitle: "Limitation of Liability",
          details: [
            "CoinBank's liability is limited to the maximum extent permitted by applicable law",
            "We are not liable for indirect, incidental, or consequential damages",
            "Our total liability for any claim shall not exceed the fees paid by you in the preceding 12 months",
            "Force majeure events, including but not limited to natural disasters or government actions, may excuse performance"
          ]
        },
        {
          subtitle: "Indemnification",
          details: [
            "You agree to indemnify CoinBank against claims arising from your use of our services",
            "Indemnification includes defense costs, attorney fees, and any resulting damages or settlements",
            "This obligation survives termination of your account and these terms",
            "Indemnification applies to violations of these terms, applicable laws, or third-party rights"
          ]
        },
        {
          subtitle: "Dispute Resolution and Arbitration",
          details: [
            "Disputes shall be resolved through binding arbitration rather than court proceedings",
            "Arbitration shall be conducted under the rules of the American Arbitration Association",
            "Class action lawsuits and jury trials are waived by accepting these terms",
            "Delaware state law governs these terms and any disputes arising under them"
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
            <div className="p-3 bg-blue-500/20 rounded-2xl">
              <Scale className="h-8 w-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Terms of Service</h1>
              <p className="text-gray-400">Legal terms and conditions for using CoinBank services</p>
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
          <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement between you and CoinBank, Inc. 
              ("CoinBank," "we," "us," or "our") governing your access to and use of our cryptocurrency exchange, 
              digital wallet, and related financial services.
            </p>
            <p>
              By creating an account, accessing our platform, or using any of our services, you acknowledge that 
              you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, 
              you must not access or use our services.
            </p>
            <p>
              CoinBank is a regulated money services business licensed to operate in multiple jurisdictions. 
              We are committed to maintaining compliance with all applicable laws, regulations, and industry standards 
              while providing secure, reliable cryptocurrency services to our customers.
            </p>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-6 mb-8"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-orange-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Important Risk Disclosure</h3>
              <p className="text-gray-300">
                Trading and holding digital assets involves substantial risk of loss. Digital asset prices are highly 
                volatile and unpredictable. You should carefully consider whether trading or holding digital assets 
                is suitable for you in light of your financial condition and risk tolerance. Please read the risk 
                disclosures section carefully before using our services.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (index + 2) * 0.1 }}
              className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
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
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
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

        {/* Contact and Updates */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mt-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <FileText className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Updates and Contact Information</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>
              These Terms may be updated from time to time to reflect changes in our services, legal requirements, 
              or business practices. We will provide notice of material changes through email or platform notifications.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Legal Questions</h4>
                <p className="text-blue-400">legal@coinbank.com</p>
                <p className="text-gray-400 text-sm mt-1">Business hours response</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Compliance Office</h4>
                <p className="text-gray-300">CoinBank Legal Department</p>
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
