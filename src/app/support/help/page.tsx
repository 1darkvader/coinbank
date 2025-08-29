"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  HelpCircle,
  Search,
  BookOpen,
  MessageCircle,
  Video,
  FileText,
  Phone,
  Mail,
  Clock,
  Users,
  Shield,
  CreditCard,
  Smartphone,
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    question: "How do I create a CoinBank account?",
    answer: "Creating a CoinBank account is simple. Click 'Sign Up' in the top right, provide your email and create a secure password. You'll need to verify your email and complete our identity verification process for security.",
    category: "Getting Started"
  },
  {
    question: "What cryptocurrencies does CoinBank support?",
    answer: "CoinBank supports over 50 cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), Litecoin (LTC), Ripple (XRP), and all major stablecoins like USDC and USDT.",
    category: "Trading"
  },
  {
    question: "How secure are my funds on CoinBank?",
    answer: "Your funds are protected by military-grade security including cold storage for 95% of assets, multi-signature wallets, 2FA authentication, and comprehensive insurance coverage.",
    category: "Security"
  },
  {
    question: "What are CoinBank's trading fees?",
    answer: "CoinBank offers competitive trading fees starting at 0.1% for makers and 0.2% for takers. Fees decrease with higher trading volumes. Check our fee schedule for detailed information.",
    category: "Fees"
  },
  {
    question: "How do I deposit funds into my account?",
    answer: "You can deposit funds via bank transfer, wire transfer, or cryptocurrency deposits. Navigate to 'Deposit' in your dashboard and select your preferred method.",
    category: "Banking"
  },
  {
    question: "How long do withdrawals take?",
    answer: "Cryptocurrency withdrawals typically process within 30 minutes. Bank transfers take 1-3 business days depending on your bank and location.",
    category: "Banking"
  }
]

const helpCategories = [
  {
    title: "Getting Started",
    description: "Account creation, verification, and first steps",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    articles: 12
  },
  {
    title: "Security & Safety",
    description: "Keep your account and funds secure",
    icon: Shield,
    color: "from-red-500 to-rose-600",
    articles: 8
  },
  {
    title: "Trading & Markets",
    description: "Buy, sell, and trade cryptocurrencies",
    icon: CreditCard,
    color: "from-emerald-500 to-green-600",
    articles: 15
  },
  {
    title: "Banking Services",
    description: "Deposits, withdrawals, and transfers",
    icon: Globe,
    color: "from-purple-500 to-violet-600",
    articles: 10
  },
  {
    title: "Mobile App",
    description: "Using CoinBank on your mobile device",
    icon: Smartphone,
    color: "from-orange-500 to-red-600",
    articles: 6
  },
  {
    title: "API & Developers",
    description: "Technical documentation and integration",
    icon: FileText,
    color: "from-cyan-500 to-blue-600",
    articles: 9
  }
]

export default function HelpPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Help Center
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Find answers to your questions and get the support you need. Our comprehensive
              help center covers everything from getting started to advanced trading.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-16"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 bg-secondary/20 border border-border/40 rounded-2xl text-foreground placeholder-muted-foreground focus:border-blue-500/50 focus:outline-none text-lg"
              />
            </div>
          </motion.div>

          {/* Help Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Browse by Category
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {helpCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-6 hover-lift cursor-pointer"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-400 font-medium">
                      {category.articles} articles
                    </span>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Popular FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + (0.05 * index) }}
                  className="glass-effect rounded-xl"
                >
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <div>
                        <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full mb-2 inline-block">
                          {faq.category}
                        </span>
                        <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  </details>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 rounded-3xl p-12"
          >
            <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is available 24/7
              to help you with any questions or issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Contact Support
                <MessageCircle className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Live Chat
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}