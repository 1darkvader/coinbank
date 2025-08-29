"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Shield,
  Lock,
  Eye,
  Server,
  Key,
  Fingerprint,
  Smartphone,
  Building2,
  Globe,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Award,
  ArrowRight,
  Users,
  FileText,
  Layers
} from 'lucide-react'

export default function SecuritySystemPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Military-Grade Security System
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Your digital assets are protected by institutional-grade security infrastructure
              that meets the highest standards in the financial industry.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.99%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">Zero</div>
                <div className="text-muted-foreground">Breaches</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </motion.div>

          {/* Security Layers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Multi-Layer Security Architecture
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Lock,
                  title: 'Encryption Layer',
                  description: 'AES-256 encryption for all data at rest and in transit',
                  color: 'from-blue-500 to-indigo-600',
                  features: ['End-to-end encryption', 'Zero-knowledge architecture', 'Quantum-resistant algorithms']
                },
                {
                  icon: Key,
                  title: 'Key Management',
                  description: 'Hardware Security Modules (HSM) for key generation and storage',
                  color: 'from-emerald-500 to-green-600',
                  features: ['FIPS 140-2 Level 3', 'Multi-signature wallets', 'Distributed key shares']
                },
                {
                  icon: Eye,
                  title: 'Monitoring & Detection',
                  description: 'Real-time threat detection and automated response systems',
                  color: 'from-orange-500 to-red-600',
                  features: ['AI-powered monitoring', 'Anomaly detection', 'Instant alerts']
                },
                {
                  icon: Building2,
                  title: 'Physical Security',
                  description: 'Secure data centers with biometric access controls',
                  color: 'from-purple-500 to-violet-600',
                  features: ['Biometric access', 'Armed security', 'Environmental controls']
                }
              ].map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${layer.color} rounded-xl flex items-center justify-center mb-4`}>
                    <layer.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{layer.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{layer.description}</p>
                  <div className="space-y-2">
                    {layer.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Security Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Advanced Security Features
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Fingerprint,
                    title: 'Biometric Authentication',
                    description: 'Fingerprint and facial recognition for secure account access',
                    status: 'Active'
                  },
                  {
                    icon: Smartphone,
                    title: 'Multi-Factor Authentication',
                    description: 'SMS, email, and authenticator app verification',
                    status: 'Required'
                  },
                  {
                    icon: Server,
                    title: 'Cold Storage Vaults',
                    description: 'Offline storage for maximum asset protection',
                    status: '95% of funds'
                  },
                  {
                    icon: Globe,
                    title: 'Geolocation Tracking',
                    description: 'Monitor and control access from different locations',
                    status: 'Enabled'
                  },
                  {
                    icon: Clock,
                    title: 'Time-Based Access Controls',
                    description: 'Restrict transactions to specific time windows',
                    status: 'Configurable'
                  },
                  {
                    icon: Users,
                    title: 'Multi-Signature Approval',
                    description: 'Require multiple approvals for large transactions',
                    status: '3 of 5 required'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (0.1 * index) }}
                    className="flex items-start space-x-4 p-4 glass-effect rounded-xl"
                  >
                    <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{feature.title}</h3>
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">
                          {feature.status}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              {/* Security Dashboard */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Security Dashboard</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                      <span className="text-foreground">All Systems Secure</span>
                    </div>
                    <span className="text-emerald-400 text-sm">Online</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Last Security Scan', value: '2 minutes ago', status: 'success' },
                      { label: 'Failed Login Attempts', value: '0 today', status: 'success' },
                      { label: 'API Rate Limit', value: '15% used', status: 'normal' },
                      { label: 'Threat Level', value: 'Low', status: 'success' }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between py-2 border-b border-border/20">
                        <span className="text-muted-foreground text-sm">{item.label}</span>
                        <span className={`text-sm font-medium ${
                          item.status === 'success' ? 'text-emerald-400' : 'text-yellow-400'
                        }`}>
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compliance Badges */}
              <div className="glass-effect rounded-2xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-6">Security Certifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: 'SOC 2 Type II', status: 'Certified' },
                    { name: 'ISO 27001', status: 'Certified' },
                    { name: 'PCI DSS Level 1', status: 'Compliant' },
                    { name: 'FIPS 140-2 Level 3', status: 'Validated' }
                  ].map((cert, index) => (
                    <div key={index} className="text-center p-3 bg-secondary/20 rounded-xl">
                      <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">{cert.name}</div>
                      <div className="text-xs text-emerald-400">{cert.status}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Incident Response */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-3xl p-8 mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">24/7 Incident Response</h2>
              <p className="text-muted-foreground">Our security operations center monitors threats around the clock</p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Detection', description: 'Automated threat detection within seconds', time: '< 30s' },
                { step: '2', title: 'Analysis', description: 'Expert security team analyzes the threat', time: '< 5m' },
                { step: '3', title: 'Response', description: 'Immediate containment and mitigation', time: '< 15m' },
                { step: '4', title: 'Recovery', description: 'Full system restoration and reporting', time: '< 1h' }
              ].map((phase, index) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + (0.1 * index) }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-rose-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground text-sm mb-2">{phase.description}</p>
                  <div className="text-red-400 font-semibold">{phase.time}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-center bg-gradient-to-r from-red-500/10 via-rose-500/10 to-pink-500/10 rounded-3xl p-12"
          >
            <Shield className="w-16 h-16 text-red-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Your Security is Our Priority
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience peace of mind with bank-grade security that protects your digital assets
              with the same rigor as traditional financial institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                View Security Audit
                <FileText className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Contact Security Team
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
