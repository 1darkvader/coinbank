"use client"

import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Globe,
  Headphones,
  Users,
  FileText,
  ArrowRight
} from 'lucide-react'

const contactMethods = [
  {
    title: "Live Chat",
    description: "Get instant support from our team",
    icon: MessageCircle,
    availability: "24/7 Available",
    response: "< 2 minutes",
    color: "from-blue-500 to-indigo-600",
    action: "Start Chat"
  },
  {
    title: "Phone Support",
    description: "Speak directly with our specialists",
    icon: Phone,
    availability: "Mon-Fri 8AM-8PM EST",
    response: "Immediate",
    color: "from-emerald-500 to-green-600",
    action: "Call Now"
  },
  {
    title: "Email Support",
    description: "Send us your detailed questions",
    icon: Mail,
    availability: "24/7 Available",
    response: "< 4 hours",
    color: "from-purple-500 to-violet-600",
    action: "Send Email"
  }
]

const offices = [
  {
    city: "New York",
    address: "350 Fifth Avenue, Suite 7800, New York, NY 10118",
    phone: "+1 (212) 555-0123",
    timezone: "EST"
  },
  {
    city: "London",
    address: "25 Canada Square, Canary Wharf, London E14 5LQ",
    phone: "+44 20 7946 0958",
    timezone: "GMT"
  },
  {
    city: "Singapore",
    address: "1 Raffles Place, #20-61, One Raffles Place, Singapore 048616",
    phone: "+65 6299 8888",
    timezone: "SGT"
  },
  {
    city: "Tokyo",
    address: "1-6-1 Otemachi, Chiyoda City, Tokyo 100-0004, Japan",
    phone: "+81 3-6273-4000",
    timezone: "JST"
  }
]

export default function ContactPage() {
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
              <Headphones className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-luxury mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get in touch with our expert support team. We're here to help you with
              any questions about your account, trading, or CoinBank services.
            </p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-muted-foreground">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">&lt; 2min</div>
                <div className="text-muted-foreground">Average Response</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15+</div>
                <div className="text-muted-foreground">Languages</div>
              </div>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Choose Your Preferred Contact Method
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (0.1 * index) }}
                  className="glass-effect rounded-2xl p-8 hover-lift text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-6">{method.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Availability:</span>
                      <span className="text-sm font-medium text-emerald-400">{method.availability}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Response Time:</span>
                      <span className="text-sm font-medium text-blue-400">{method.response}</span>
                    </div>
                  </div>

                  <button className="w-full btn-primary">
                    {method.action}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form & Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid lg:grid-cols-2 gap-12 mb-20"
          >
            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-blue-500/50 focus:outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-blue-500/50 focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-blue-500/50 focus:outline-none"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground focus:border-blue-500/50 focus:outline-none">
                    <option>General Inquiry</option>
                    <option>Account Support</option>
                    <option>Trading Question</option>
                    <option>Technical Issue</option>
                    <option>Partnership</option>
                    <option>Press & Media</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-blue-500/50 focus:outline-none resize-none"
                    placeholder="Please describe how we can help you..."
                  />
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 px-6 rounded-xl font-medium transition-all">
                  Send Message
                  <Send className="w-4 h-4 ml-2" />
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Get in Touch Directly
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email Support</h4>
                    <p className="text-muted-foreground">support@coinbank.com</p>
                    <p className="text-sm text-blue-400">Response within 4 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone Support</h4>
                    <p className="text-muted-foreground">+1 (800) COINBANK</p>
                    <p className="text-sm text-emerald-400">Mon-Fri 8AM-8PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Live Chat</h4>
                    <p className="text-muted-foreground">Available 24/7 in-app</p>
                    <p className="text-sm text-purple-400">Average response < 2 minutes</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-xl p-6">
                <h4 className="font-bold text-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-orange-400" />
                  Business Hours
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Live Chat:</span>
                    <span className="text-foreground">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Support:</span>
                    <span className="text-foreground">Mon-Fri 8AM-8PM EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Support:</span>
                    <span className="text-foreground">24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Global Offices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Global Offices
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (0.1 * index) }}
                  className="glass-effect rounded-xl p-6"
                >
                  <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{office.city}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{office.address}</p>
                  <p className="text-sm text-blue-400 mb-1">{office.phone}</p>
                  <p className="text-xs text-muted-foreground">{office.timezone}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}