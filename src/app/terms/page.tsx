'use client'

import { FileText, Scale, AlertTriangle, Shield, Users, Clock, Gavel, BookOpen } from 'lucide-react'

export default function TermsOfServicePage() {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <Scale className="h-6 w-6" />,
      content: `By accessing or using CoinBank's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.

These terms constitute a legally binding agreement between you and CoinBank. Your continued use of our services constitutes acceptance of any modifications to these terms.`
    },
    {
      id: 'eligibility',
      title: 'Eligibility Requirements', 
      icon: <Users className="h-6 w-6" />,
      content: `To use CoinBank's services, you must:

• Be at least 18 years of age (or the age of majority in your jurisdiction)
• Have the legal capacity to enter into binding contracts
• Not be prohibited from using our services under applicable law
• Provide accurate and complete information during registration
• Maintain the security of your account credentials
• Comply with all applicable laws and regulations in your jurisdiction`
    },
    {
      id: 'account-security',
      title: 'Account Security and Responsibilities',
      icon: <Shield className="h-6 w-6" />,
      content: `You are responsible for maintaining the security of your account:

• Keep your login credentials confidential and secure
• Use strong, unique passwords and enable two-factor authentication
• Notify us immediately of any unauthorized access or security breaches
• Do not share your account with others or allow unauthorized access
• Regularly monitor your account activity and report suspicious transactions
• Ensure your contact information is current and accurate`
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      icon: <AlertTriangle className="h-6 w-6" />,
      content: `The following activities are strictly prohibited when using CoinBank:

• Money laundering, terrorism financing, or other illegal activities
• Fraud, market manipulation, or deceptive practices  
• Violation of any applicable laws or regulations
• Attempting to circumvent security measures or access controls
• Using our services for gambling or other restricted activities
• Creating multiple accounts or using false identity information
• Interfering with or disrupting our services or infrastructure`
    },
    {
      id: 'fees-payments',
      title: 'Fees and Payments',
      icon: <FileText className="h-6 w-6" />,
      content: `CoinBank charges fees for various services:

• Transaction Fees: Applied to cryptocurrency transactions and transfers
• Trading Fees: Charged for buying and selling cryptocurrencies
• Withdrawal Fees: Applied when withdrawing funds to external accounts
• Premium Features: Additional fees for advanced features and services
• Currency Conversion: Fees may apply for currency conversion services

All fees are clearly disclosed before you complete any transaction. Fee schedules are available on our platform and may be updated from time to time.`
    },
    {
      id: 'liability-disclaimers',
      title: 'Limitation of Liability',
      icon: <Gavel className="h-6 w-6" />,
      content: `CoinBank's liability is limited to the maximum extent permitted by law:

• We provide services "as is" without warranties of any kind
• We are not liable for market volatility or cryptocurrency price fluctuations
• Our total liability shall not exceed the fees paid by you in the past 12 months
• We are not responsible for third-party services or external wallet issues
• You assume all risks associated with cryptocurrency trading and ownership
• We strongly recommend only investing what you can afford to lose`
    },
    {
      id: 'termination',
      title: 'Account Termination',
      icon: <Clock className="h-6 w-6" />,
      content: `Either party may terminate your account under certain circumstances:

• You may close your account at any time by contacting customer support
• We may suspend or terminate accounts for violations of these terms
• Accounts may be closed for regulatory compliance or security reasons
• Upon termination, you remain liable for any outstanding obligations
• We will provide reasonable notice before termination where legally required
• You may withdraw remaining funds subject to applicable fees and regulations`
    }
  ]

  const lastUpdated = 'December 15, 2024'

  return (
    <div className="min-h-screen professional-bg text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <BookOpen className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Please read these terms carefully before using CoinBank's services. 
            These terms govern your use of our cryptocurrency banking platform.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
            <Clock className="h-5 w-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <section className="py-12 border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-8 w-8 text-orange-400 mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-orange-300 mb-4">Important Notice</h2>
                <div className="text-lg text-gray-300 space-y-3">
                  <p>
                    <strong>Cryptocurrency Risk Warning:</strong> Trading and holding cryptocurrencies involves substantial risk. 
                    Cryptocurrency values are highly volatile and can result in significant financial losses.
                  </p>
                  <p>
                    <strong>Regulatory Compliance:</strong> Users are responsible for complying with all applicable laws 
                    and regulations in their jurisdiction. CoinBank services may not be available in all countries.
                  </p>
                  <p>
                    <strong>No Investment Advice:</strong> CoinBank does not provide investment advice. 
                    All trading decisions are your own responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Table of Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors border border-gray-800 hover:border-gray-700"
              >
                <div className="text-purple-400">
                  {section.icon}
                </div>
                <span className="text-sm font-medium">{section.title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl">
                  {section.icon}
                </div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>
              
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agreement and Contact */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 border border-emerald-500/30">
              <h2 className="text-2xl font-bold mb-6">Agreement Acknowledgment</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  By creating an account and using CoinBank's services, you acknowledge that you have read, 
                  understood, and agree to be bound by these Terms of Service.
                </p>
                <p>
                  These terms may be updated from time to time. Continued use of our services after 
                  any modifications constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold mb-6">Questions About These Terms?</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  If you have any questions about these Terms of Service, please contact our legal team:
                </p>
                <div className="space-y-2">
                  <p><strong>Legal Team:</strong> legal@coinbank.com</p>
                  <p><strong>General Support:</strong> support@coinbank.com</p>
                  <p><strong>Compliance:</strong> compliance@coinbank.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
