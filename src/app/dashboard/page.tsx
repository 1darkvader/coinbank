"use client"
import { Navigation } from "@/components/ui/navigation"

export default function DashboardPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-luxury mb-6">
              Dashboard
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              CoinBank Dashboard services and information
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
