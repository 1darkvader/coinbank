"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface CryptoPrice {
  symbol: string
  name: string
  price: number
  change: number
}

export function CryptoTicker() {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC', name: 'Bitcoin', price: 45230.50, change: 2.45 },
    { symbol: 'ETH', name: 'Ethereum', price: 2890.75, change: -1.23 },
    { symbol: 'SOL', name: 'Solana', price: 98.45, change: 5.67 },
    { symbol: 'ADA', name: 'Cardano', price: 0.52, change: 3.21 },
    { symbol: 'DOT', name: 'Polkadot', price: 7.89, change: -0.89 },
  ])

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="overflow-hidden py-3">
        <motion.div
          animate={{ x: [0, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex space-x-12 whitespace-nowrap"
        >
          {[...prices, ...prices].map((crypto, index) => (
            <div key={`${crypto.symbol}-${index}`} className="flex items-center space-x-2 text-sm">
              <span className="font-medium text-white">{crypto.symbol}</span>
              <span className="text-muted-foreground">${crypto.price.toLocaleString()}</span>
              <span className={`text-xs font-medium ${
                crypto.change >= 0 ? 'text-emerald-400' : 'text-red-400'
              }`}>
                {crypto.change >= 0 ? '+' : ''}{crypto.change}%
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}