"use client"

import { Navigation } from '@/components/ui/navigation'
import { CryptoTicker } from '@/components/crypto-ticker'
import {
  CreditCard,
  ArrowRight
} from 'lucide-react'

export default function CardPage() {
  return (
    <main className="professional-bg text-white min-h-screen">
      <Navigation />
      <CryptoTicker />

      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="professional-logo-icon mx-auto mb-8">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold banking-gradient-text mb-6">
              Crypto Card
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Spend your cryptocurrency anywhere with our premium debit card.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="professional-button text-lg px-8 py-4 rounded-xl">
                Order Card
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}