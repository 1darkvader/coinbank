"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  CreditCard,
  Shield,
  Zap,
  Globe,
  Smartphone,
  Award,
  CheckCircle2,
  ArrowRight,
  Percent,
  Eye,
  Lock,
  Star,
  Gift,
  TrendingUp
} from 'lucide-react'

const cardFeatures = [
  {
    title: "Real-Time Crypto Conversion",
    description: "Spend your crypto anywhere Visa is accepted with instant conversion to fiat",
    icon: Zap,
    color: "from-blue-500 to-indigo-600",
    benefits: ["Instant conversion", "Real-time rates", "No pre-loading required", "50+ cryptocurrencies"]
  },
  {
    title: "Premium Rewards Program", 
    description: "Earn up to 5% cashback in crypto on all purchases with our tiered rewards system",
    icon: Gift,
    color: "from-emerald-500 to-green-600",
    benefits: ["Up to 5% crypto cashback", "Bonus categories monthly", "Staking rewards boost", "VIP merchant offers"]
  },
  {
    title: "Advanced Security Features",
    description: "Your card includes cutting-edge security features for safe and secure transactions",
    icon: Shield,
    color: "from-red-500 to-rose-600",
    benefits: ["Biometric authentication", "Real-time fraud monitoring", "Virtual card numbers", "Instant freeze/unfreeze"]
  },
  {
    title: "Global Acceptance",
    description: "Use your CoinBank card worldwide with no foreign transaction fees",
    icon: Globe,
    color: "from-purple-500 to-violet-600",
    benefits: ["Worldwide acceptance", "No foreign fees", "ATM access globally", "Multi-currency support"]
  }
]

const cardTiers = [
  {
    name: "CoinBank Black",
    tier: "Premium",
    annual_fee: "$0",
    cashback: "Up to 2%",
    color: "from-gray-700 to-black",
    features: [
      "2% crypto cashback on all purchases",
      "No foreign transaction fees", 
      "Free international ATM withdrawals (5/month)",
      "Standard customer support",
      "Mobile app access"
    ]
  },
  {
    name: "CoinBank Platinum",
    tier: "Elite", 
    annual_fee: "$199",
    cashback: "Up to 4%",
    color: "from-slate-400 to-slate-600",
    features: [
      "4% crypto cashback on all purchases",
      "Bonus 2% on crypto purchases",
      "Unlimited free ATM withdrawals worldwide",
      "Priority 24/7 customer support",
      "Airport lounge access (4 visits/year)",
      "Enhanced fraud protection"
    ],
    popular: true
  },
  {
    name: "CoinBank Diamond",
    tier: "Ultra",
    annual_fee: "$599", 
    cashback: "Up to 5%",
    color: "from-blue-400 via-cyan-400 to-blue-500",
    features: [
      "5% crypto cashback on all purchases",
      "Bonus 3% on crypto purchases", 
      "Unlimited free ATM withdrawals worldwide",
      "Dedicated relationship manager",
      "Unlimited airport lounge access",
      "Travel insurance up to $1M",
      "Exclusive investment opportunities",
      "White-glove concierge service"
    ]
  }
]

export default function CardPage() {
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
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-8 premium-shadow">
              <CreditCard className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              CoinBank Crypto Card
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              The world's most advanced crypto debit card. Spend your cryptocurrency anywhere 
              Visa is accepted while earning premium rewards in crypto.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">5%</div>
                <div className="text-muted-foreground">Crypto Cashback</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">50M+</div>
                <div className="text-muted-foreground">Visa Merchants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">200+</div>
                <div className="text-muted-foreground">Countries</div>
              </div>
            </div>
          </motion.div>

          {/* Card Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <div className="flex justify-center">
              <div className="relative">
                <motion.div
                  whileHover={{ rotateY: 10, rotateX: 5 }}
                  className="w-96 h-60 bg-gradient-to-br from-purple-500 via-violet-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl"
                  style={{ perspective: '1000px' }}
                >
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <div className="text-sm opacity-80 mb-1">CoinBank</div>
                      <div className="text-xs opacity-60">Digital Banking</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">VISA</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="text-sm opacity-80 mb-2">Card Number</div>
                    <div className="text-xl font-mono tracking-widest">•••• •••• •••• 7891</div>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-sm opacity-80 mb-1">Cardholder</div>
                      <div className="text-lg font-medium">ALEX JOHNSON</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-80 mb-1">Expires</div>
                      <div className="text-lg">12/28</div>
                    </div>
                  </div>
                  
                  <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full" />
                  <div className="absolute top-6 right-12 w-8 h-8 bg-white/10 rounded-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Card Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Premium Card Features
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {cardFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card Tiers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Card Tier
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {cardTiers.map((card, index) => (
                <motion.div
                  key={card.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className={`glass-effect rounded-2xl p-8 hover-lift relative ${
                    card.popular ? 'border-2 border-purple-500/50' : ''
                  }`}
                >
                  {card.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-16 h-10 bg-gradient-to-br ${card.color} rounded-lg mb-6`} />
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{card.name}</h3>
                    <div className="text-sm text-purple-400 font-medium mb-4">{card.tier}</div>
                    <div className="text-3xl font-bold text-foreground mb-1">{card.annual_fee}</div>
                    <div className="text-sm text-muted-foreground mb-4">Annual Fee</div>
                    <div className="text-xl font-bold text-emerald-400">{card.cashback}</div>
                    <div className="text-sm text-muted-foreground">Crypto Cashback</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    {card.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                    card.popular 
                      ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white hover:from-purple-600 hover:to-violet-700'
                      : 'btn-secondary'
                  }`}>
                    Apply for {card.name}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Apply for Your Card",
                  description: "Choose your tier and complete our simple application process",
                  icon: CreditCard
                },
                {
                  step: "2", 
                  title: "Fund Your Account",
                  description: "Add cryptocurrency to your CoinBank wallet from any source",
                  icon: TrendingUp
                },
                {
                  step: "3",
                  title: "Start Spending & Earning",
                  description: "Use your card anywhere Visa is accepted and earn crypto rewards",
                  icon: Star
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-purple-400 mb-3">{step.step}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-indigo-500/10 rounded-3xl p-12"
          >
            <CreditCard className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Get Your CoinBank Card Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Start earning crypto rewards on every purchase. Apply now and join thousands 
              of users who are already earning with the CoinBank Crypto Card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Compare Cards
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}