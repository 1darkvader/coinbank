import { NextResponse } from 'next/server'

// CoinGecko Free API endpoints
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

// Cache for storing API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 120000 // 2 minute cache for market overview

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
    // Fetch global market data
    const globalData = await fetchCoinGeckoData('/global')
    
    const marketData = globalData.data
    
    return NextResponse.json({
      success: true,
      data: {
        totalMarketCap: marketData.total_market_cap?.usd || 2410000000000,
        totalVolume24h: marketData.total_volume?.usd || 89200000000,
        btcDominance: marketData.market_cap_percentage?.btc || 55.2,
        marketCapChange24h: marketData.market_cap_change_percentage_24h_usd || 5.2,
        activeCoins: marketData.active_cryptocurrencies || 2500,
        markets: marketData.markets || 750
      },
      timestamp: Date.now(),
      source: 'coingecko'
    })
  } catch (error) {
    console.error('Market overview error:', error)
    
    // Fallback to mock data
    return NextResponse.json({
      success: true,
      data: {
        totalMarketCap: 2410000000000,
        totalVolume24h: 89200000000,
        btcDominance: 55.2,
        marketCapChange24h: 5.2,
        activeCoins: 2500,
        markets: 750
      },
      timestamp: Date.now(),
      source: 'fallback'
    })
  }
}