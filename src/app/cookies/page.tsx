'use client'

import { useState } from 'react'
import { Cookie, Settings, Eye, Target, BarChart3, Shield, Globe, ToggleLeft, ToggleRight } from 'lucide-react'

export default function CookiePolicyPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: true,
    marketing: false,
    preferences: true
  })

  const cookieTypes = [
    {
      id: 'essential',
      title: 'Essential Cookies',
      icon: <Shield className="h-6 w-6" />,
      description: 'These cookies are necessary for the website to function and cannot be disabled.',
      required: true,
      examples: [
        'Authentication tokens',
        'Session management',
        'Security settings'
      ],
      duration: 'Session / 30 days'
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      icon: <BarChart3 className="h-6 w-6" />,
      description: 'Help us understand how visitors interact with our website.',
      required: false,
      examples: [
        'Page views and navigation',
        'Time spent on pages',
        'Error monitoring'
      ],
      duration: '2 years'
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      icon: <Target className="h-6 w-6" />,
      description: 'Used to deliver personalized advertisements.',
      required: false,
      examples: [
        'Ad personalization',
        'Campaign tracking',
        'Social media integration'
      ],
      duration: '1 year'
    }
  ]

  const handleCookieToggle = (cookieId: string) => {
    if (cookieId === 'essential') return
    
    setCookiePreferences(prev => ({
      ...prev,
      [cookieId]: !prev[cookieId as keyof typeof prev]
    }))
  }

  return (
    <div className="min-h-screen professional-bg text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-orange-600 to-red-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Cookie className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Learn about how CoinBank uses cookies and similar technologies to enhance your experience.
          </p>
        </div>
      </div>

      {/* Cookie Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Cookie Types</h2>
            <p className="text-xl text-gray-400">
              We use different types of cookies for various purposes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {cookieTypes.map((cookie) => (
              <div key={cookie.id} className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-orange-400">
                      {cookie.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{cookie.title}</h3>
                      {cookie.required && (
                        <span className="text-sm text-orange-400 font-medium">Required</span>
                      )}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleCookieToggle(cookie.id)}
                    disabled={cookie.required}
                    className={`p-1 ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    {cookiePreferences[cookie.id as keyof typeof cookiePreferences] ? (
                      <ToggleRight className="h-8 w-8 text-emerald-400" />
                    ) : (
                      <ToggleLeft className="h-8 w-8 text-gray-500" />
                    )}
                  </button>
                </div>

                <p className="text-gray-400 mb-6">{cookie.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-300 mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {cookie.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-gray-700 mt-4">
                    <span className="text-sm text-gray-400">Duration: {cookie.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managing Cookies */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Managing Your Cookies</h2>
          
          <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
            <div className="text-gray-300 space-y-4">
              <p>You can control cookies through your browser settings:</p>
              <ul className="space-y-2">
                <li>• <strong>Chrome:</strong> Settings → Privacy and Security → Cookies</li>
                <li>• <strong>Firefox:</strong> Preferences → Privacy & Security</li>
                <li>• <strong>Safari:</strong> Preferences → Privacy</li>
                <li>• <strong>Edge:</strong> Settings → Cookies and Site Permissions</li>
              </ul>
              <p className="mt-6 text-center text-gray-400">
                Questions? Contact us at privacy@coinbank.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
