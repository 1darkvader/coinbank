"use client"

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

interface QuickAction {
  id: string
  symbol: string
  label: string
  description: string
  action: string
}

const quickActions: QuickAction[] = [
  {
    id: '1',
    symbol: '💳',
    label: 'Account Balance',
    description: 'Check your current balance',
    action: 'balance'
  },
  {
    id: '2',
    symbol: '📈',
    label: 'Trading Help',
    description: 'Learn about trading features',
    action: 'trading'
  },
  {
    id: '3',
    symbol: '🛡️',
    label: 'Security',
    description: 'Account security questions',
    action: 'security'
  },
  {
    id: '4',
    symbol: '❓',
    label: 'General Help',
    description: 'Common questions',
    action: 'help'
  }
]

const botResponses: Record<string, { message: string; suggestions?: string[] }> = {
  balance: {
    message: "I can help you check your account balance! Your current portfolio value is $248,567.89 across all accounts. Would you like me to break this down by asset type or account?",
    suggestions: ["Show breakdown by assets", "Show account details", "Export balance report"]
  },
  trading: {
    message: "I'm here to help with trading! CoinBank offers advanced trading features including limit orders, margin trading, and automated strategies. What specific trading feature would you like to learn about?",
    suggestions: ["How to place orders", "Margin trading explained", "Fee structure"]
  },
  security: {
    message: "Your account security is our top priority. You currently have 2FA enabled, hardware wallet connected, and biometric authentication active. Is there a specific security concern I can help with?",
    suggestions: ["Reset 2FA", "Update security settings", "Report suspicious activity"]
  },
  help: {
    message: "I'm CoinBot, your AI assistant! I can help with account questions, trading guidance, security settings, and general platform navigation. What would you like assistance with today?",
    suggestions: ["Account management", "Trading tutorials", "Contact support"]
  },
  greeting: {
    message: "Hello! Welcome to CoinBank. I'm CoinBot, your personal AI banking assistant. I'm here 24/7 to help with your crypto banking needs. How can I assist you today?",
    suggestions: ["Check my balance", "Trading questions", "Security settings", "General help"]
  },
  contact: {
    message: "You can reach our human support team through several channels:\n\n📧 Email: support@coinbank.com\n📞 Phone: +1 (555) 123-4567\n💬 Live Chat: Available 24/7\n\nFor urgent matters, I recommend using live chat for the fastest response.",
    suggestions: ["Start live chat", "Email support", "Schedule callback"]
  },
  default: {
    message: "I'm not sure I understand that specific request, but I'm here to help! Could you try rephrasing your question, or choose from one of these common topics?",
    suggestions: ["Account balance", "Trading help", "Security questions", "Contact support"]
  }
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: botResponses.greeting.message,
        timestamp: new Date(),
        suggestions: botResponses.greeting.suggestions
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    setTimeout(() => {
      const botMessage = generateBotResponse(content)
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  const generateBotResponse = (userInput: string): Message => {
    const input = userInput.toLowerCase()
    let responseKey = 'default'

    if (input.includes('balance') || input.includes('money') || input.includes('account')) {
      responseKey = 'balance'
    } else if (input.includes('trading') || input.includes('trade') || input.includes('buy') || input.includes('sell')) {
      responseKey = 'trading'
    } else if (input.includes('security') || input.includes('safe') || input.includes('protect')) {
      responseKey = 'security'
    } else if (input.includes('contact') || input.includes('support') || input.includes('help') || input.includes('human')) {
      responseKey = 'contact'
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      responseKey = 'greeting'
    }

    const response = botResponses[responseKey]

    return {
      id: Date.now().toString(),
      type: 'bot',
      content: response.message,
      timestamp: new Date(),
      suggestions: response.suggestions
    }
  }

  const handleQuickAction = (action: string) => {
    const response = botResponses[action]
    if (response) {
      const botMessage: Message = {
        id: Date.now().toString(),
        type: 'bot',
        content: response.message,
        timestamp: new Date(),
        suggestions: response.suggestions
      }
      setMessages(prev => [...prev, botMessage])
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'hidden' : 'block'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        ●
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-pulse" />
      </motion.button>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 100 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              height: isMinimized ? '60px' : '600px'
            }}
            exit={{ opacity: 0, scale: 0.8, y: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-50 w-96 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                  ●
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">CoinBot Assistant</h3>
                  <div className="flex items-center space-x-1 text-xs text-emerald-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                    <span>Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <span className="text-muted-foreground">
                    {isMinimized ? '🔍' : '➖'}
                  </span>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  ●
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {messages.length === 1 && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {quickActions.map((action) => (
                        <motion.button
                          key={action.id}
                          onClick={() => handleQuickAction(action.action)}
                          className="p-3 glass-effect rounded-xl hover:border-cyan-500/30 transition-all text-left group"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-cyan-400 text-xl mb-2 block">{action.symbol}</span>
                          <div className="text-sm font-medium text-foreground group-hover:text-cyan-400 transition-colors">
                            {action.label}
                          </div>
                          <div className="text-xs text-muted-foreground">{action.description}</div>
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-cyan-400 to-blue-500'
                            : 'bg-gradient-to-br from-emerald-400 to-teal-500'
                        }`}>
                          <span className="text-white text-sm">
                            {message.type === 'user' ? '👤' : '🤖'}
                          </span>
                        </div>
                        <div className={`p-3 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            : 'glass-effect text-foreground'
                        }`}>
                          <div className="whitespace-pre-wrap text-sm">{message.content}</div>
                          {message.suggestions && (
                            <div className="mt-3 space-y-2">
                              {message.suggestions.map((suggestion, index) => (
                                <button
                                  key={index}
                                  onClick={() => handleSuggestionClick(suggestion)}
                                  className="block w-full text-left text-xs px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                                >
                                  <div className="flex items-center justify-between">
                                    <span>{suggestion}</span>
                                    <span>→</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center">
                          ●
                        </div>
                        <div className="glass-effect p-3 rounded-2xl">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-100" />
                            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce delay-200" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Input */}
                <div className="p-4 border-t border-cyan-500/20 bg-gradient-to-r from-cyan-500/5 to-blue-500/5">
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 bg-secondary/20 border border-border/40 rounded-xl text-foreground placeholder-muted-foreground focus:border-cyan-500/50 focus:outline-none"
                    />
                    <button
                      onClick={() => handleSendMessage(inputValue)}
                      disabled={!inputValue.trim()}
                      className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl transition-all"
                    >
                      ●
                    </button>
                  </div>
                  <div className="flex items-center justify-center mt-2 space-x-1">
                    ●
                    <span className="text-xs text-muted-foreground">
                      Need human support? Call +1 (555) 123-4567
                    </span>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
