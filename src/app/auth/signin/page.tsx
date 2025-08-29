"use client"
import { Navigation } from "@/components/ui/navigation"

export default function SignInPage() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <div className="pt-32 pb-16">
        <div className="max-w-md mx-auto px-6">
          <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>
          <p className="text-center text-muted-foreground">Sign in to your CoinBank account</p>
        </div>
      </div>
    </main>
  )
}
