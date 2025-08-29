"use client"
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Navigation } from '@/components/ui/navigation'
import { AIChatbot } from '@/components/ai-chatbot'

export default function AdminPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <AIChatbot />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Admin Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Administrative tools and system management
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
