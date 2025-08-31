import { NextResponse } from 'next/server'

// CoinGecko Free API endpoints
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

// Cache for storing API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 300000 // 5 minute cache for trending data

async function fetchCoinGeckoData(endpoint: string) {
  const cacheKey = endpoint
  const now = Date.now()
  
  // Check cache first
  if (cache.has(cacheKey)) {
    const cached = cache.get(cacheKey)!
    if (now - cached.timestamp < CACHE_DURATION) {
      return cached.data
    }
  }

  try {
    const response = await fetch(`${COINGECKO_BASE_URL}${endpoint}`, {
      headers: {
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      throw new Error(`CoinGecko API error: ${response.status}`)
    }

    const data = await response.json()
    
    // Store in cache
    cache.set(cacheKey, { data, timestamp: now })
    
    return data
  } catch (error) {
    console.error('CoinGecko API fetch error:', error)
    
    // Return cached data if available
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)!.data
    }
    
    throw error
  }
}

export async function GET() {
  try {
    // Fetch trending coins
    const trendingData = await fetchCoinGeckoData('/search/trending')
    
    const trendingCoins = trendingData.coins.slice(0, 10).map((item: any) => ({
      id: item.item.id,
      name: item.item.name,
      symbol: item.item.symbol.toUpperCase(),
      marketCapRank: item.item.market_cap_rank,
      thumb: item.item.thumb,
      score: item.item.score
    }))

    return NextResponse.json({
      success: true,
      data: {
        coins: trendingCoins,
        lastUpdated: Date.now()
      },
      timestamp: Date.now(),
      source: 'coingecko'
    })
  } catch (error) {
    console.error('Trending coins error:', error)
    
    // Fallback to mock trending data
    return NextResponse.json({
      success: true,
      data: {
        coins: [
          { id: 'bitcoin', name: 'Bitcoin', symbol: 'BTC', marketCapRank: 1, score: 0 },
          { id: 'ethereum', name: 'Ethereum', symbol: 'ETH', marketCapRank: 2, score: 1 },
          { id: 'solana', name: 'Solana', symbol: 'SOL', marketCapRank: 5, score: 2 },
          { id: 'cardano', name: 'Cardano', symbol: 'ADA', marketCapRank: 8, score: 3 },
          { id: 'polkadot', name: 'Polkadot', symbol: 'DOT', marketCapRank: 12, score: 4 }
        ],
        lastUpdated: Date.now()
      },
      timestamp: Date.now(),
      source: 'fallback'
    })
  }
}