"use client"

import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Globe,
  Shield,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  FileText,
  Users
} from 'lucide-react'
import Link from 'next/link'

export default function SupportPage() {
  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="professional-logo-icon mx-auto mb-8">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold banking-gradient-text mb-6">
              24/7 Professional Support
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Get expert assistance from our dedicated support team. We're here to help you with 
              all your crypto banking needs, anytime, anywhere.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Phone,
                title: 'Phone Support',
                description: 'Speak directly with our crypto banking specialists',
                action: 'Call Now',
                info: '+1 (800) 555-COIN',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: MessageCircle,
                title: 'Live Chat',
                description: 'Get instant help through our secure chat system',
                action: 'Start Chat',
                info: 'Average response: 30 seconds',
                color: 'from-blue-500 to-indigo-600'
              },
              {
                icon: Mail,
                title: 'Email Support',
                description: 'Send us your questions for detailed responses',
                action: 'Send Email',
                info: 'support@coinbank.com',
                color: 'from-purple-500 to-violet-600'
              }
            ].map((option, index) => (
              <div key={option.title} className="banking-card rounded-2xl p-8 hover:scale-105 transition-transform">
                <div className={`w-14 h-14 bg-gradient-to-br ${option.color} rounded-xl flex items-center justify-center mb-6`}>
                  <option.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{option.title}</h3>
                <p className="text-gray-400 mb-4">{option.description}</p>
                <div className="text-sm text-cyan-400 mb-4">{option.info}</div>
                <button className="professional-button w-full py-3 rounded-xl">
                  {option.action}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>

          {/* Support Stats */}
          <div className="banking-card rounded-3xl p-8 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">World-Class Support Experience</h2>
              <p className="text-gray-400">Committed to your success</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: 'Average Response Time', value: '< 2 min', icon: Clock },
                { label: 'Customer Satisfaction', value: '98.7%', icon: CheckCircle2 },
                { label: 'Languages Supported', value: '25+', icon: Globe },
                { label: 'Support Tickets Resolved', value: '500K+', icon: Users }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold banking-gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Help Resources */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                Self-Service Resources
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: BookOpen,
                    title: 'Knowledge Base',
                    description: 'Comprehensive guides and tutorials',
                    link: '/support/help'
                  },
                  {
                    icon: HelpCircle,
                    title: 'Frequently Asked Questions',
                    description: 'Quick answers to common questions',
                    link: '/support/faq'
                  },
                  {
                    icon: FileText,
                    title: 'API Documentation',
                    description: 'Technical documentation for developers',
                    link: '/support/api'
                  },
                  {
                    icon: Shield,
                    title: 'Security Center',
                    description: 'Security best practices and guidelines',
                    link: '/security/system'
                  }
                ].map((resource, index) => (
                  <Link key={resource.title} href={resource.link}>
                    <div className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <resource.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">{resource.title}</h3>
                        <p className="text-gray-400 text-sm">{resource.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400 mt-2 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="banking-card rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Contact Form</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Subject
                  </label>
                  <select className="professional-input w-full px-4 py-3 rounded-xl text-white focus:outline-none">
                    <option value="">Select a topic</option>
                    <option value="account">Account Issues</option>
                    <option value="trading">Trading Support</option>
                    <option value="security">Security Questions</option>
                    <option value="technical">Technical Issues</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="professional-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="professional-input w-full px-4 py-3 rounded-xl text-white placeholder-gray-500 focus:outline-none resize-none"
                    placeholder="Describe your question or issue..."
                  />
                </div>
                
                <button type="submit" className="professional-button w-full py-3 rounded-xl">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="text-center bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 rounded-3xl p-12 border border-red-500/20">
            <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Security Emergency?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              If you suspect unauthorized access to your account or notice suspicious activity, 
              contact our security team immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-400 text-white text-lg px-8 py-4 rounded-xl font-semibold transition-colors">
                Emergency Security Line
                <Phone className="w-5 h-5 ml-2" />
              </button>
              <button className="professional-nav-button text-lg px-8 py-4 rounded-xl">
                Security Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}