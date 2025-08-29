import { NextResponse } from 'next/server'

// Mock crypto price data - in production, connect to real API like CoinGecko
const mockPrices = {
  bitcoin: { 
    symbol: 'BTC', 
    price: 45230.50, 
    change24h: 2.45,
    marketCap: 887000000000,
    volume24h: 15700000000
  },
  ethereum: { 
    symbol: 'ETH', 
    price: 2890.75, 
    change24h: -1.23,
    marketCap: 348000000000,
    volume24h: 8900000000
  },
  solana: { 
    symbol: 'SOL', 
    price: 98.45, 
    change24h: 5.67,
    marketCap: 42000000000,
    volume24h: 1200000000
  },
  cardano: { 
    symbol: 'ADA', 
    price: 0.52, 
    change24h: 3.21,
    marketCap: 18000000000,
    volume24h: 450000000
  },
  polkadot: { 
    symbol: 'DOT', 
    price: 7.89, 
    change24h: -0.89,
    marketCap: 9500000000,
    volume24h: 280000000
  }
}

export async function GET() {
  try {
    // Add some randomness to simulate live prices
    const updatedPrices = Object.entries(mockPrices).reduce((acc, [key, crypto]) => {
      const randomVariation = (Math.random() - 0.5) * 0.02; // ±1% variation
      acc[key as keyof typeof mockPrices] = {
        ...crypto,
        price: crypto.price * (1 + randomVariation),
        change24h: crypto.change24h + (Math.random() - 0.5) * 2
      };
      return acc;
    }, {} as typeof mockPrices)

    return NextResponse.json({
      success: true,
      data: updatedPrices,
      timestamp: Date.now()
    })
  } catch (error) {
    console.error('Crypto prices error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to fetch crypto prices' },
      { status: 500 }
    )
  }
}