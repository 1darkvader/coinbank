'use client'

import { useState } from 'react'
import { Shield, Target, Gift, AlertTriangle, Lock, CheckCircle2, ExternalLink, Users, Trophy, Zap } from 'lucide-react'

export default function BountyPage() {
  const [submissionForm, setSubmissionForm] = useState({
    title: '',
    type: 'security',
    severity: 'medium',
    description: '',
    steps: '',
    impact: '',
    email: ''
  })

  const bountyPrograms = [
    {
      category: 'Critical Security Vulnerabilities',
      reward: '$5,000 - $25,000',
      icon: <AlertTriangle className="h-8 w-8 text-red-400" />,
      description: 'Remote code execution, SQL injection, authentication bypass',
      examples: ['Authentication bypass', 'Remote code execution', 'SQL injection', 'Privilege escalation']
    },
    {
      category: 'High Security Issues',
      reward: '$1,000 - $5,000', 
      icon: <Shield className="h-8 w-8 text-orange-400" />,
      description: 'Cross-site scripting, CSRF, sensitive data exposure',
      examples: ['Cross-site scripting (XSS)', 'CSRF attacks', 'Sensitive data exposure', 'Business logic flaws']
    },
    {
      category: 'Medium Security Issues',
      reward: '$200 - $1,000',
      icon: <Lock className="h-8 w-8 text-yellow-400" />,
      description: 'Information disclosure, denial of service, minor authentication issues',
      examples: ['Information disclosure', 'Denial of service', 'Minor authentication issues', 'Rate limiting bypass']
    },
    {
      category: 'UI/UX Improvements',
      reward: '$50 - $500',
      icon: <Target className="h-8 w-8 text-blue-400" />,
      description: 'Accessibility issues, usability problems, design inconsistencies',
      examples: ['Accessibility issues', 'Usability problems', 'Design inconsistencies', 'Mobile responsiveness']
    }
  ]

  const stats = [
    { label: 'Total Bounties Paid', value: '$127,000+', icon: <Gift className="h-6 w-6" /> },
    { label: 'Security Researchers', value: '340+', icon: <Users className="h-6 w-6" /> },
    { label: 'Vulnerabilities Fixed', value: '89', icon: <CheckCircle2 className="h-6 w-6" /> },
    { label: 'Response Time', value: '<24h', icon: <Zap className="h-6 w-6" /> }
  ]

  const topResearchers = [
    { name: 'Alex Chen', earnings: '$12,400', vulnerabilities: 15, badge: '🥇' },
    { name: 'Sarah Martinez', earnings: '$8,900', vulnerabilities: 12, badge: '🥈' },
    { name: 'David Kumar', earnings: '$6,700', vulnerabilities: 9, badge: '🥉' },
    { name: 'Emma Thompson', earnings: '$5,200', vulnerabilities: 8, badge: '⭐' },
    { name: 'Michael Zhang', earnings: '$4,100', vulnerabilities: 7, badge: '⭐' }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your submission! Our security team will review it shortly.')
  }

  return (
    <div className="min-h-screen professional-bg text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-emerald-600 to-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold mb-6">Bug Bounty Program</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Help us secure CoinBank by discovering vulnerabilities and earn rewards for your contributions.
            Join our community of ethical hackers and security researchers.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-16 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bounty Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Bounty Categories</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We reward security researchers based on the severity and impact of their findings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bountyPrograms.map((program, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
                <div className="flex items-start gap-4 mb-6">
                  {program.icon}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{program.category}</h3>
                    <div className="text-2xl font-bold text-emerald-400 mb-4">{program.reward}</div>
                    <p className="text-gray-400 mb-6">{program.description}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-300 mb-3">Examples:</h4>
                  <ul className="space-y-2">
                    {program.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Top Security Researchers</h2>
            <p className="text-xl text-gray-400">
              Recognizing our most valuable contributors to CoinBank's security
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur rounded-2xl border border-gray-800 overflow-hidden">
              <div className="p-6 border-b border-gray-800">
                <h3 className="text-2xl font-bold">Leaderboard</h3>
              </div>
              <div className="divide-y divide-gray-800">
                {topResearchers.map((researcher, index) => (
                  <div key={index} className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl">{researcher.badge}</div>
                      <div>
                        <div className="font-semibold text-lg">{researcher.name}</div>
                        <div className="text-gray-400">{researcher.vulnerabilities} vulnerabilities found</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-emerald-400">{researcher.earnings}</div>
                      <div className="text-gray-400">Total earned</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Submission Guidelines</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Research Responsibly</h3>
                    <p className="text-gray-400">Only test on accounts you own. Do not access, modify, or delete user data.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Provide Clear Details</h3>
                    <p className="text-gray-400">Include step-by-step reproduction instructions and proof of concept.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Wait for Response</h3>
                    <p className="text-gray-400">Allow our team time to investigate before public disclosure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-sm font-bold text-white">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Follow Legal Guidelines</h3>
                    <p className="text-gray-400">Comply with all applicable laws and our terms of service.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl border border-blue-500/30">
                <div className="flex items-start gap-3">
                  <ExternalLink className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-300 mb-2">Need Help Getting Started?</h3>
                    <p className="text-gray-300 mb-3">Check out our comprehensive security testing guide and documentation.</p>
                    <button className="text-blue-400 hover:text-blue-300 font-medium">
                      View Documentation →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Form */}
            <div>
              <div className="bg-gray-900/50 backdrop-blur rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6">Submit a Vulnerability</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Vulnerability Title *
                    </label>
                    <input
                      type="text"
                      required
                      value={submissionForm.title}
                      onChange={(e) => setSubmissionForm({...submissionForm, title: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      placeholder="Brief descriptive title"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Type *
                      </label>
                      <select
                        required
                        value={submissionForm.type}
                        onChange={(e) => setSubmissionForm({...submissionForm, type: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      >
                        <option value="security">Security</option>
                        <option value="privacy">Privacy</option>
                        <option value="ui-ux">UI/UX</option>
                        <option value="performance">Performance</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Severity *
                      </label>
                      <select
                        required
                        value={submissionForm.severity}
                        onChange={(e) => setSubmissionForm({...submissionForm, severity: e.target.value})}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="critical">Critical</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Description *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={submissionForm.description}
                      onChange={(e) => setSubmissionForm({...submissionForm, description: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      placeholder="Detailed description of the vulnerability"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Steps to Reproduce *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={submissionForm.steps}
                      onChange={(e) => setSubmissionForm({...submissionForm, steps: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      placeholder="Step-by-step instructions to reproduce the issue"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Impact Assessment *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={submissionForm.impact}
                      onChange={(e) => setSubmissionForm({...submissionForm, impact: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      placeholder="What is the potential impact of this vulnerability?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Contact Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={submissionForm.email}
                      onChange={(e) => setSubmissionForm({...submissionForm, email: e.target.value})}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Shield className="h-5 w-5" />
                    Submit Vulnerability Report
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}