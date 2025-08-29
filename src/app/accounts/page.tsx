"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'

export default function AccountsPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <CryptoTicker />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Account Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Manage your CoinBank accounts and settings
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
