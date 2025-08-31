import { NextResponse } from 'next/server'

// CoinGecko Free API endpoints
const COINGECKO_BASE_URL = 'https://api.coingecko.com/api/v3'

// Cache for storing API responses to avoid rate limits
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_DURATION = 60000 // 1 minute cache

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
    
    // Return cached data if available, even if expired
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey)!.data
    }
    
    throw error
  }
}

export async function GET() {
  try {
    // Fetch top cryptocurrencies with market data
    const marketData = await fetchCoinGeckoData(
      '/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&price_change_percentage=24h'
    )

    // Transform data to match our frontend expectations
    const transformedData = marketData.reduce((acc: any, coin: any) => {
      acc[coin.id] = {
        symbol: coin.symbol.toUpperCase(),
        price: coin.current_price,
        change24h: coin.price_change_24h || 0,
        changePercent24h: coin.price_change_percentage_24h || 0,
        marketCap: coin.market_cap || 0,
        volume24h: coin.total_volume || 0,
        name: coin.name,
        logo: coin.image || '',
        rank: coin.market_cap_rank || 0
      }
      return acc
    }, {})

    return NextResponse.json({
      success: true,
      data: transformedData,
      timestamp: Date.now(),
      source: 'coingecko'
    })
  } catch (error) {
    console.error('Crypto prices error:', error)
    
    // Fallback to mock data if API fails
    const mockPrices = {
      bitcoin: { 
        symbol: 'BTC', 
        price: 45230.50, 
        change24h: 2.45,
        changePercent24h: 2.45,
        marketCap: 887000000000,
        volume24h: 15700000000,
        name: 'Bitcoin',
        logo: '₿',
        rank: 1
      },
      ethereum: { 
        symbol: 'ETH', 
        price: 2890.75, 
        change24h: -1.23,
        changePercent24h: -1.23,
        marketCap: 348000000000,
        volume24h: 8900000000,
        name: 'Ethereum',
        logo: 'Ξ',
        rank: 2
      },
      solana: { 
        symbol: 'SOL', 
        price: 98.45, 
        change24h: 5.67,
        changePercent24h: 5.67,
        marketCap: 42000000000,
        volume24h: 1200000000,
        name: 'Solana',
        logo: '◎',
        rank: 5
      },
      cardano: { 
        symbol: 'ADA', 
        price: 0.52, 
        change24h: 3.21,
        changePercent24h: 3.21,
        marketCap: 18000000000,
        volume24h: 450000000,
        name: 'Cardano',
        logo: '₳',
        rank: 8
      },
      polkadot: { 
        symbol: 'DOT', 
        price: 7.89, 
        change24h: -0.89,
        changePercent24h: -0.89,
        marketCap: 9500000000,
        volume24h: 280000000,
        name: 'Polkadot',
        logo: '⬟',
        rank: 12
      }
    }

    return NextResponse.json({
      success: true,
      data: mockPrices,
      timestamp: Date.now(),
      source: 'fallback'
    })
  }
}