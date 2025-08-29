"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { coinGeckoService, type CryptoData } from '@/lib/coingecko'
import useSWR from 'swr'

export function CryptoTicker() {
  const { data: cryptoPrices, error } = useSWR(
    'crypto-prices',
    () => coinGeckoService.getCryptoPrices(),
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: false,
    }
  )

  const formatPrice = (price: number) => {
    if (price < 1) {
      return `$${price.toFixed(4)}`
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  const formatPercent = (percent: number) => {
    return `${percent >= 0 ? '+' : ''}${percent.toFixed(2)}%`
  }

  // Use fallback data if API fails or is loading
  const displayPrices = cryptoPrices || [
    { symbol: 'BTC', name: 'Bitcoin', price: 112250.14, changePercent24h: 2.09, image: '' },
    { symbol: 'ETH', name: 'Ethereum', price: 3892.73, changePercent24h: -1.15, image: '' },
    { symbol: 'SOL', name: 'Solana', price: 234.81, changePercent24h: 5.60, image: '' },
  ]

  // Create continuous scrolling data by duplicating the array
  const scrollingData = [...displayPrices, ...displayPrices]

  return (
    <div className="fixed top-20 left-0 right-0 z-40 bg-secondary/30 backdrop-blur-sm border-b border-cyan-500/20 overflow-hidden">
      <div className="relative h-16">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent" />

        {/* Scrolling ticker content */}
        <div className="flex items-center h-full">
          <motion.div
            className="flex items-center space-x-12 whitespace-nowrap"
            animate={{ x: [0, -100 * scrollingData.length] }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ minWidth: '200%' }}
          >
            {scrollingData.map((crypto, index) => (
              <motion.div
                key={`${crypto.symbol}-${index}`}
                className="flex items-center space-x-8"
                whileHover={{ scale: 1.05 }}
              >
                {/* Crypto Item */}
                <div className="flex items-center space-x-4 px-6 py-2 rounded-xl bg-gradient-to-r from-white/[0.02] to-white/[0.05] border border-white/10 hover:border-cyan-500/30 transition-all duration-300">
                  {/* Symbol and Name */}
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      {crypto.image ? (
                        <img
                          src={crypto.image}
                          alt={crypto.symbol}
                          className="w-6 h-6 rounded-full"
                          onError={(e) => {
                            // Fallback to symbol if image fails
                            e.currentTarget.style.display = 'none'
                            const nextElement = e.currentTarget.nextElementSibling as HTMLElement
                            if (nextElement) {
                              nextElement.style.display = 'block'
                            }
                          }}
                        />
                      ) : null}
                      <span className={`text-xs font-bold text-white ${crypto.image ? 'hidden' : ''}`}>
                        {crypto.symbol.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {crypto.symbol}
                      </div>
                      <div className="text-xs text-muted-foreground -mt-0.5">
                        {crypto.name}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <motion.div
                    key={crypto.price.toFixed(2)}
                    initial={{ color: "#00BCD4" }}
                    animate={{ color: "#ffffff" }}
                    transition={{ duration: 0.5 }}
                    className="text-lg font-mono font-bold"
                  >
                    {formatPrice(crypto.price)}
                  </motion.div>

                  {/* Change */}
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-sm font-medium ${
                    crypto.changePercent24h >= 0
                      ? 'text-emerald-400 bg-emerald-500/10'
                      : 'text-red-400 bg-red-500/10'
                  }`}>
                    {crypto.changePercent24h >= 0 ? (
                      <span>▲</span>
                    ) : (
                      <span>▼</span>
                    )}
                    <span>{formatPercent(crypto.changePercent24h)}</span>
                  </div>
                </div>

                {/* Separator dot */}
                <div className="w-1 h-1 bg-cyan-400/50 rounded-full" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Gradient overlays for seamless effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-secondary/30 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-secondary/30 to-transparent pointer-events-none" />
      </div>

      {/* Market status indicator */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
        <div className={`w-2 h-2 rounded-full animate-pulse ${error ? 'bg-red-400' : 'bg-emerald-400'}`} />
        <span className="text-xs text-muted-foreground font-medium">
          {error ? 'OFFLINE' : 'LIVE MARKETS'}
        </span>
      </div>
    </div>
  )
}
