import axios from 'axios'

const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3'

export interface CryptoPrice {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  high_24h: number
  low_24h: number
  image: string
  last_updated: string
}

export interface CryptoData {
  symbol: string
  name: string
  price: number
  change24h: number
  changePercent24h: number
  volume: string
  high: number
  low: number
  marketCap: string
  image: string
}

interface TrendingCoinItem {
  id: string
  coin_id: number
  name: string
  symbol: string
  market_cap_rank: number
  thumb: string
  small: string
  large: string
  slug: string
  price_btc: number
  score: number
}

interface TrendingCoin {
  item: TrendingCoinItem
}

// Main cryptocurrencies we track
export const CRYPTO_IDS = [
  'bitcoin',
  'ethereum',
  'solana',
  'cardano',
  'polkadot',
  'chainlink',
  'avalanche-2',
  'polygon',
  'binancecoin',
  'ripple'
]

class CoinGeckoService {
  private baseURL = COINGECKO_API_BASE

  async getCryptoPrices(): Promise<CryptoData[]> {
    try {
      const response = await axios.get(`${this.baseURL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          ids: CRYPTO_IDS.join(','),
          order: 'market_cap_desc',
          per_page: 10,
          page: 1,
          sparkline: false,
          price_change_percentage: '24h'
        }
      })

      return response.data.map((coin: CryptoPrice) => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.current_price,
        change24h: coin.price_change_24h,
        changePercent24h: coin.price_change_percentage_24h,
        volume: this.formatVolume(coin.total_volume),
        high: coin.high_24h,
        low: coin.low_24h,
        marketCap: this.formatMarketCap(coin.market_cap),
        image: coin.image
      }))
    } catch (error) {
      console.error('Error fetching crypto prices:', error)
      // Return fallback data if API fails
      return this.getFallbackData()
    }
  }

  async getSingleCoinPrice(coinId: string): Promise<CryptoData | null> {
    try {
      const response = await axios.get(`${this.baseURL}/coins/${coinId}`, {
        params: {
          localization: false,
          tickers: false,
          market_data: true,
          community_data: false,
          developer_data: false,
          sparkline: false
        }
      })

      const coin = response.data
      return {
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.market_data.current_price.usd,
        change24h: coin.market_data.price_change_24h,
        changePercent24h: coin.market_data.price_change_percentage_24h,
        volume: this.formatVolume(coin.market_data.total_volume.usd),
        high: coin.market_data.high_24h.usd,
        low: coin.market_data.low_24h.usd,
        marketCap: this.formatMarketCap(coin.market_data.market_cap.usd),
        image: coin.image.large
      }
    } catch (error) {
      console.error('Error fetching single coin price:', error)
      return null
    }
  }

  async getTrendingCoins(): Promise<CryptoData[]> {
    try {
      const response = await axios.get(`${this.baseURL}/search/trending`)
      const trendingIds = response.data.coins.slice(0, 6).map((coin: TrendingCoin) => coin.item.id)

      const pricesResponse = await axios.get(`${this.baseURL}/coins/markets`, {
        params: {
          vs_currency: 'usd',
          ids: trendingIds.join(','),
          order: 'market_cap_desc',
          sparkline: false,
          price_change_percentage: '24h'
        }
      })

      return pricesResponse.data.map((coin: CryptoPrice) => ({
        symbol: coin.symbol.toUpperCase(),
        name: coin.name,
        price: coin.current_price,
        change24h: coin.price_change_24h,
        changePercent24h: coin.price_change_percentage_24h,
        volume: this.formatVolume(coin.total_volume),
        high: coin.high_24h,
        low: coin.low_24h,
        marketCap: this.formatMarketCap(coin.market_cap),
        image: coin.image
      }))
    } catch (error) {
      console.error('Error fetching trending coins:', error)
      return []
    }
  }

  private formatVolume(volume: number): string {
    if (volume >= 1e9) {
      return `${(volume / 1e9).toFixed(1)}B`
    } else if (volume >= 1e6) {
      return `${(volume / 1e6).toFixed(1)}M`
    } else if (volume >= 1e3) {
      return `${(volume / 1e3).toFixed(1)}K`
    }
    return volume.toFixed(0)
  }

  private formatMarketCap(marketCap: number): string {
    if (marketCap >= 1e12) {
      return `${(marketCap / 1e12).toFixed(2)}T`
    } else if (marketCap >= 1e9) {
      return `${(marketCap / 1e9).toFixed(1)}B`
    } else if (marketCap >= 1e6) {
      return `${(marketCap / 1e6).toFixed(1)}M`
    }
    return marketCap.toFixed(0)
  }

  private getFallbackData(): CryptoData[] {
    return [
      {
        symbol: 'BTC',
        name: 'Bitcoin',
        price: 112250.14,
        change24h: 2340.50,
        changePercent24h: 2.09,
        volume: '2.4B',
        high: 114500,
        low: 108900,
        marketCap: '2.2T',
        image: ''
      },
      {
        symbol: 'ETH',
        name: 'Ethereum',
        price: 3892.73,
        change24h: -45.32,
        changePercent24h: -1.15,
        volume: '1.8B',
        high: 4100,
        low: 3750,
        marketCap: '468B',
        image: ''
      },
      {
        symbol: 'SOL',
        name: 'Solana',
        price: 234.81,
        change24h: 12.45,
        changePercent24h: 5.60,
        volume: '890M',
        high: 245,
        low: 220,
        marketCap: '110B',
        image: ''
      }
    ]
  }
}

export const coinGeckoService = new CoinGeckoService()
export default coinGeckoService
