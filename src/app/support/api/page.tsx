"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  Code,
  Key,
  BookOpen,
  Zap,
  Shield,
  Globe,
  Terminal,
  FileText,
  Download,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  Users,
  Clock
} from 'lucide-react'

const apiFeatures = [
  {
    title: "RESTful API",
    description: "Complete REST API with all trading and account management functions",
    icon: Globe,
    color: "from-blue-500 to-indigo-600",
    endpoints: "50+ endpoints"
  },
  {
    title: "WebSocket Feeds",
    description: "Real-time market data, order updates, and account notifications",
    icon: Zap,
    color: "from-emerald-500 to-green-600",
    endpoints: "Real-time"
  },
  {
    title: "Authentication",
    description: "Secure API key authentication with rate limiting and permissions",
    icon: Key,
    color: "from-purple-500 to-violet-600",
    endpoints: "OAuth 2.0"
  },
  {
    title: "SDKs & Libraries",
    description: "Official SDKs for Python, Node.js, Go, and more languages",
    icon: Code,
    color: "from-orange-500 to-red-600",
    endpoints: "8 languages"
  }
]

const endpoints = [
  {
    method: "GET",
    path: "/api/v1/account",
    description: "Get account information and balances",
    auth: true
  },
  {
    method: "POST",
    path: "/api/v1/orders",
    description: "Place a new order",
    auth: true
  },
  {
    method: "GET",
    path: "/api/v1/orders",
    description: "Get order history and status",
    auth: true
  },
  {
    method: "GET",
    path: "/api/v1/markets",
    description: "Get all available trading pairs",
    auth: false
  },
  {
    method: "GET",
    path: "/api/v1/ticker",
    description: "Get 24hr ticker statistics",
    auth: false
  },
  {
    method: "GET",
    path: "/api/v1/depth",
    description: "Get order book depth",
    auth: false
  }
]

const sdks = [
  {
    name: "Python",
    description: "Official Python SDK with async support",
    version: "v2.1.0",
    downloads: "50K+",
    icon: "🐍"
  },
  {
    name: "Node.js",
    description: "JavaScript/TypeScript SDK for Node.js",
    version: "v1.8.3",
    downloads: "35K+",
    icon: "📦"
  },
  {
    name: "Go",
    description: "High-performance Go SDK",
    version: "v1.5.2",
    downloads: "12K+",
    icon: "🔷"
  },
  {
    name: "Java",
    description: "Java SDK with Spring Boot support",
    version: "v1.4.1",
    downloads: "8K+",
    icon: "☕"
  }
]

export default function APIPage() {
  return (
    <main className="min-h-screen professional-bg text-foreground">
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
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <Terminal className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              CoinBank API
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build powerful applications with our comprehensive API. Access real-time market data,
              execute trades, and manage accounts programmatically with institutional-grade reliability.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt; 10ms</div>
                <div className="text-muted-foreground">Latency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">1000/s</div>
                <div className="text-muted-foreground">Rate Limit</div>
              </div>
            </div>
          </motion.div>

          {/* API Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Powerful API Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apiFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-6 hover-lift"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{feature.description}</p>
                  <span className="text-xs bg-secondary/40 text-blue-400 px-2 py-1 rounded-full">
                    {feature.endpoints}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Documentation & Getting Started */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            {/* Quick Start */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3 text-orange-400" />
                Quick Start
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Create API Keys</h4>
                    <p className="text-sm text-muted-foreground">Generate API keys from your account dashboard</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Install SDK</h4>
                    <p className="text-sm text-muted-foreground">Choose from our official SDKs or use direct REST calls</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Start Trading</h4>
                    <p className="text-sm text-muted-foreground">Begin with sandbox environment, then go live</p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/20 rounded-xl p-4 mb-6">
                <code className="text-sm text-emerald-400">
                  <div>pip install coinbank-python</div>
                  <div className="text-muted-foreground"># or</div>
                  <div>npm install @coinbank/sdk</div>
                </code>
              </div>

              <div className="flex gap-3">
                <button className="btn-primary flex-1">
                  View Docs
                  <BookOpen className="w-4 h-4 ml-2" />
                </button>
                <button className="btn-secondary">
                  Get API Key
                </button>
              </div>
            </div>

            {/* Code Example */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-6 h-6 mr-3 text-purple-400" />
                Example Code
              </h3>

              <div className="bg-black/50 rounded-xl p-4 mb-6 overflow-x-auto">
                <pre className="text-sm">
                  <code className="text-emerald-400">
                    <span className="text-blue-400">import</span> coinbank
                    {'\n\n'}
                    <span className="text-muted-foreground"># Initialize client</span>
                    {'\n'}
                    <span className="text-yellow-400">client</span> = coinbank.<span className="text-blue-400">Client</span>(
                    {'\n'}    <span className="text-orange-400">api_key</span>=<span className="text-green-400">"your_api_key"</span>,
                    {'\n'}    <span className="text-orange-400">secret</span>=<span className="text-green-400">"your_secret"</span>
                    {'\n'})
                    {'\n\n'}
                    <span className="text-muted-foreground"># Get account balance</span>
                    {'\n'}
                    <span className="text-yellow-400">balance</span> = client.<span className="text-blue-400">get_account</span>()
                    {'\n\n'}
                    <span className="text-muted-foreground"># Place market order</span>
                    {'\n'}
                    <span className="text-yellow-400">order</span> = client.<span className="text-blue-400">create_order</span>(
                    {'\n'}    <span className="text-orange-400">symbol</span>=<span className="text-green-400">"BTCUSD"</span>,
                    {'\n'}    <span className="text-orange-400">side</span>=<span className="text-green-400">"buy"</span>,
                    {'\n'}    <span className="text-orange-400">quantity</span>=<span className="text-purple-400">0.001</span>,
                    {'\n'}    <span className="text-orange-400">type</span>=<span className="text-green-400">"market"</span>
                    {'\n'})
                  </code>
                </pre>
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-sm text-muted-foreground">Language:</span>
                <select className="bg-secondary/20 border border-border/40 rounded-lg px-3 py-1 text-sm text-foreground">
                  <option>Python</option>
                  <option>JavaScript</option>
                  <option>Go</option>
                  <option>Java</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Popular Endpoints */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Popular API Endpoints
            </h2>
            <div className="glass-effect rounded-2xl p-8">
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (0.1 * index) }}
                    className="flex items-center justify-between p-4 bg-secondary/20 rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        endpoint.method === 'GET' 
                          ? 'bg-blue-500/20 text-blue-400' 
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="text-sm text-foreground font-mono">{endpoint.path}</code>
                      <span className="text-sm text-muted-foreground">{endpoint.description}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {endpoint.auth && (
                        <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">
                          Auth Required
                        </span>
                      )}
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SDKs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Official SDKs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sdks.map((sdk, index) => (
                <motion.div
                  key={sdk.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (0.1 * index) }}
                  className="glass-effect rounded-xl p-6 hover-lift"
                >
                  <div className="text-3xl mb-4">{sdk.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{sdk.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{sdk.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs text-blue-400">{sdk.version}</span>
                    <span className="text-xs text-emerald-400">{sdk.downloads}</span>
                  </div>
                  <button className="w-full btn-secondary text-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-12"
          >
            <Terminal className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Start Building Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of developers building next-generation financial applications
              with CoinBank's powerful and reliable API infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Get API Access
                <Key className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                View Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}