'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Cookie, Settings, Shield, BarChart3, Target, Globe, CheckCircle2, X, Calendar, Download, ArrowLeft, Eye, Lock } from 'lucide-react'
import Link from 'next/link'

interface CookieCategory {
  id: string
  name: string
  description: string
  essential: boolean
  enabled: boolean
}

export default function CookiePolicy() {
  const lastUpdated = "December 15, 2024"
  
  const [cookieSettings, setCookieSettings] = useState<CookieCategory[]>([
    {
      id: 'essential',
      name: 'Essential Cookies',
      description: 'Necessary for the website to function properly. These cannot be disabled.',
      essential: true,
      enabled: true
    },
    {
      id: 'analytics',
      name: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website by collecting and reporting information.',
      essential: false,
      enabled: true
    },
    {
      id: 'marketing',
      name: 'Marketing Cookies',
      description: 'Used to track visitors across websites to display relevant and engaging advertisements.',
      essential: false,
      enabled: false
    },
    {
      id: 'preferences',
      name: 'Preference Cookies',
      description: 'Remember information that changes how the website behaves or looks for you.',
      essential: false,
      enabled: true
    }
  ])

  const toggleCookie = (id: string) => {
    setCookieSettings(prev => 
      prev.map(cookie => 
        cookie.id === id && !cookie.essential 
          ? { ...cookie, enabled: !cookie.enabled }
          : cookie
      )
    )
  }

  const savePreferences = () => {
    // Save cookie preferences to localStorage or backend
    localStorage.setItem('cookiePreferences', JSON.stringify(cookieSettings))
    alert('Cookie preferences saved successfully!')
  }

  const sections = [
    {
      title: "What Are Cookies",
      icon: <Cookie className="h-6 w-6" />,
      content: [
        {
          subtitle: "Cookie Definition and Purpose",
          details: [
            "Cookies are small text files stored on your device when you visit our website",
            "They contain information that helps websites remember your preferences and improve functionality",
            "Cookies enable features like keeping you logged in and remembering your language preferences",
            "They help us analyze website usage patterns to improve user experience and security"
          ]
        },
        {
          subtitle: "Types of Cookies We Use",
          details: [
            "Session cookies that expire when you close your browser",
            "Persistent cookies that remain on your device for a specified period",
            "First-party cookies set directly by CoinBank's website",
            "Third-party cookies from trusted partners for analytics and security purposes"
          ]
        }
      ]
    },
    {
      title: "Essential Cookies",
      icon: <Shield className="h-6 w-6" />,
      content: [
        {
          subtitle: "Authentication and Security",
          details: [
            "Session management cookies to keep you logged in securely",
            "CSRF (Cross-Site Request Forgery) protection tokens",
            "Two-factor authentication state management",
            "Account security monitoring and fraud prevention"
          ]
        },
        {
          subtitle: "Core Website Functionality",
          details: [
            "Navigation and menu state preferences",
            "Form data preservation during submission processes",
            "Language and region preference settings",
            "Accessibility settings and user interface customizations"
          ]
        },
        {
          subtitle: "Trading Platform Operations",
          details: [
            "Market data refresh rates and chart preferences",
            "Order book and trading interface settings",
            "Portfolio view customizations and watchlist management",
            "Real-time price alert configurations"
          ]
        }
      ]
    },
    {
      title: "Analytics and Performance Cookies",
      icon: <BarChart3 className="h-6 w-6" />,
      content: [
        {
          subtitle: "Website Usage Analytics",
          details: [
            "Google Analytics for understanding user behavior and popular features",
            "Page view statistics and user journey tracking",
            "Feature usage metrics to guide product development",
            "Performance monitoring to identify and resolve technical issues"
          ]
        },
        {
          subtitle: "Security and Compliance Monitoring",
          details: [
            "Suspicious activity detection and prevention",
            "API usage patterns for rate limiting and abuse prevention",
            "Compliance monitoring for regulatory reporting requirements",
            "System performance metrics for infrastructure optimization"
          ]
        },
        {
          subtitle: "User Experience Optimization",
          details: [
            "A/B testing for interface improvements and feature rollouts",
            "Load time analysis and performance optimization",
            "Mobile vs desktop usage patterns",
            "Customer support ticket correlation with user experience data"
          ]
        }
      ]
    },
    {
      title: "Marketing and Personalization Cookies",
      icon: <Target className="h-6 w-6" />,
      content: [
        {
          subtitle: "Advertising and Retargeting",
          details: [
            "Social media advertising platform integration (Facebook, Twitter, LinkedIn)",
            "Google Ads and search engine marketing campaign tracking",
            "Retargeting campaigns for users who visited but didn't complete actions",
            "Affiliate marketing and referral program tracking"
          ]
        },
        {
          subtitle: "Content Personalization",
          details: [
            "Customized content recommendations based on trading history",
            "Personalized educational content and market insights",
            "Targeted promotional offers and feature announcements",
            "Localized content delivery based on geographic location"
          ]
        },
        {
          subtitle: "Communication Preferences",
          details: [
            "Email marketing campaign engagement tracking",
            "Push notification preferences and delivery optimization",
            "Customer communication history and preferences",
            "Marketing automation and customer lifecycle management"
          ]
        }
      ]
    },
    {
      title: "Third-Party Cookies and Integrations",
      icon: <Globe className="h-6 w-6" />,
      content: [
        {
          subtitle: "Analytics and Monitoring Services",
          details: [
            "Google Analytics for comprehensive website analytics",
            "Hotjar for user behavior heatmaps and session recordings",
            "Mixpanel for detailed user engagement and conversion tracking",
            "Sentry for error monitoring and performance tracking"
          ]
        },
        {
          subtitle: "Customer Support and Communication",
          details: [
            "Intercom for customer support chat functionality",
            "Zendesk for support ticket management and user identification",
            "Calendly for appointment scheduling and consultation bookings",
            "Customer.io for automated email campaigns and notifications"
          ]
        },
        {
          subtitle: "Security and Compliance Partners",
          details: [
            "Cloudflare for DDoS protection and content delivery",
            "AWS security services for threat detection and prevention",
            "Identity verification services for KYC compliance",
            "Fraud detection services for transaction monitoring"
          ]
        }
      ]
    },
    {
      title: "Your Cookie Rights and Controls",
      icon: <Settings className="h-6 w-6" />,
      content: [
        {
          subtitle: "Browser-Level Controls",
          details: [
            "Configure your browser to block all cookies or prompt before accepting",
            "Delete existing cookies from your browser's privacy settings",
            "Use private/incognito browsing mode to prevent cookie storage",
            "Install browser extensions for enhanced cookie management"
          ]
        },
        {
          subtitle: "CoinBank Cookie Preferences",
          details: [
            "Use our cookie preference center to customize your settings",
            "Opt-out of non-essential cookies while maintaining core functionality",
            "Update your preferences at any time through your account settings",
            "Receive confirmation when your cookie preferences are saved"
          ]
        },
        {
          subtitle: "Data Subject Rights",
          details: [
            "Request information about cookies and data collected about you",
            "Ask for deletion of cookie-related data (subject to legal requirements)",
            "Withdraw consent for non-essential cookies at any time",
            "Contact our privacy team for questions about cookie usage"
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
            <div className="p-3 bg-orange-500/20 rounded-2xl">
              <Cookie className="h-8 w-8 text-orange-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">Cookie Policy</h1>
              <p className="text-gray-400">How CoinBank uses cookies and similar technologies</p>
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
          <h2 className="text-2xl font-bold text-white mb-4">Understanding Our Cookie Usage</h2>
          <div className="text-gray-300 space-y-4">
            <p>
              CoinBank uses cookies and similar tracking technologies to provide, protect, and improve our services. 
              This Cookie Policy explains what cookies are, how we use them, and how you can control them.
            </p>
            <p>
              By continuing to use our website and services, you consent to our use of cookies as described in this 
              policy. You can withdraw your consent or modify your preferences at any time using the controls provided below.
            </p>
            <p>
              We are committed to transparency about our cookie usage and providing you with meaningful choices about 
              how your data is collected and used while ensuring the security and functionality of our platform.
            </p>
          </div>
        </motion.div>

        {/* Cookie Preference Center */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-2xl p-8 mb-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Settings className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Cookie Preference Center</h2>
          </div>
          
          <div className="space-y-6">
            {cookieSettings.map((cookie) => (
              <div key={cookie.id} className="flex items-start justify-between p-4 bg-gray-800/50 rounded-lg">
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-2">{cookie.name}</h3>
                  <p className="text-gray-300 text-sm">{cookie.description}</p>
                  {cookie.essential && (
                    <p className="text-orange-400 text-xs mt-2">* Required for website functionality</p>
                  )}
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => toggleCookie(cookie.id)}
                    disabled={cookie.essential}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      cookie.enabled ? 'bg-emerald-600' : 'bg-gray-600'
                    } ${cookie.essential ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        cookie.enabled ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex gap-4 mt-6">
            <button
              onClick={savePreferences}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
            >
              <CheckCircle2 className="h-4 w-4" />
              Save Preferences
            </button>
            <button
              onClick={() => setCookieSettings(prev => 
                prev.map(cookie => ({ ...cookie, enabled: cookie.essential }))
              )}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Reject All Non-Essential
            </button>
          </div>
        </motion.div>

        {/* Detailed Sections */}
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
                <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
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
                          <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
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
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mt-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="p-2 bg-orange-500/20 rounded-lg">
              <Eye className="h-6 w-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Questions About Cookies?</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>
              If you have questions about our cookie usage, privacy practices, or need assistance with your 
              cookie preferences, please don't hesitate to contact our privacy team.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Privacy Support</h4>
                <p className="text-orange-400">cookies@coinbank.com</p>
                <p className="text-gray-400 text-sm mt-1">Response within 24 hours</p>
              </div>
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Data Protection Officer</h4>
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
