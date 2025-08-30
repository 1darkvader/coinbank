'use client'

import { Shield, Eye, Lock, Users, FileText, Globe, Settings, AlertCircle } from 'lucide-react'

export default function PrivacyPolicyPage() {
  const sections = [
    {
      id: 'information-we-collect',
      title: 'Information We Collect',
      icon: <FileText className="h-6 w-6" />,
      content: `We collect information you provide directly to us, such as when you create an account, make transactions, or contact us for support. This includes:
      
• Personal Information: Name, email address, phone number, and government-issued identification
• Financial Information: Bank account details, transaction history, and wallet addresses
• Technical Information: IP addresses, device information, and usage data
• Communication Data: Messages, support tickets, and feedback you provide to us`
    },
    {
      id: 'how-we-use-information',
      title: 'How We Use Your Information',
      icon: <Settings className="h-6 w-6" />,
      content: `We use your information to provide, maintain, and improve our services:

• Account Management: Create and maintain your CoinBank account
• Transaction Processing: Execute cryptocurrency transactions and transfers
• Security: Prevent fraud, protect against security threats, and verify your identity
• Compliance: Meet legal and regulatory requirements, including KYC and AML obligations
• Communication: Send you important updates, notifications, and customer support
• Personalization: Customize your experience and provide relevant content and features`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: <Users className="h-6 w-6" />,
      content: `We may share your information in certain circumstances:

• Service Providers: With trusted third parties who help us operate our platform
• Legal Requirements: When required by law, regulation, or legal process
• Business Transfers: In connection with mergers, acquisitions, or asset sales
• Consent: When you explicitly consent to sharing your information
• Security: To protect the rights, property, or safety of CoinBank, our users, or others

We never sell your personal information to third parties for marketing purposes.`
    },
    {
      id: 'data-security',
      title: 'Data Security and Protection',
      icon: <Shield className="h-6 w-6" />,
      content: `We implement industry-standard security measures to protect your information:

• Encryption: All sensitive data is encrypted both in transit and at rest
• Access Controls: Strict access controls and authentication requirements for our systems
• Security Monitoring: Continuous monitoring for suspicious activity and security threats
• Regular Audits: Regular security audits and penetration testing
• Compliance: SOC 2 Type II compliance and adherence to industry best practices
• Incident Response: Comprehensive incident response procedures and notification protocols`
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: <Lock className="h-6 w-6" />,
      content: `You have certain rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information (subject to legal requirements)
• Portability: Request a portable copy of your data in a structured format
• Objection: Object to certain processing of your personal information
• Restriction: Request restriction of processing in certain circumstances
• Withdrawal: Withdraw consent where processing is based on consent`
    }
  ]

  const lastUpdated = 'December 15, 2024'

  return (
    <div className="min-h-screen professional-bg text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Your privacy is our priority. Learn how we collect, use, and protect your personal information
            when you use CoinBank's services.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/20 rounded-full px-6 py-3">
            <AlertCircle className="h-5 w-5" />
            <span>Last updated: {lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30 mb-12">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                At CoinBank, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our 
                cryptocurrency banking platform and related services.
              </p>
              <p>
                By using CoinBank's services, you acknowledge that you have read and understood this Privacy Policy and consent 
                to the collection and use of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto px-4 space-y-16">
          {sections.map((section, index) => (
            <div key={section.id} id={section.id} className="scroll-mt-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
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

      {/* Contact Information */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-2xl p-8 border border-emerald-500/30">
            <h2 className="text-3xl font-bold mb-6">Contact Us About Privacy</h2>
            <div className="text-lg text-gray-300 space-y-4">
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@coinbank.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
