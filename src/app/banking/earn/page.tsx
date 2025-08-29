import { Navigation } from "@/components/ui/navigation";
import { CryptoTicker } from "@/components/crypto-ticker";
import { AIChatbot } from "@/components/ai-chatbot";

export default function Page() {
  return (
    <main className="min-h-screen sophisticated-bg text-foreground">
      <Navigation />
      <CryptoTicker />
      <AIChatbot />
      <div className="pt-36 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-luxury mb-6">Coming Soon</h1>
            <p className="text-xl text-muted-foreground">Professional banking feature</p>
          </div>
        </div>
      </div>
    </main>
  );
}
