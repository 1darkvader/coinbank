import type { LucideIcon } from 'lucide-react'

// Navigation Types
export interface SubmenuItem {
  name: string
  href: string
  icon: LucideIcon
}

export interface NavigationItem {
  name: string
  href: string
  submenu?: SubmenuItem[]
}

// Tab Types
export type AdminTab = 'overview' | 'users' | 'transactions' | 'system' | 'settings'
export type PaymentTab = 'send' | 'receive' | 'history' | 'cards'
export type WalletTab = 'portfolio' | 'history' | 'settings' | 'security'

export interface TabItem<T = string> {
  id: T
  label: string
  icon: LucideIcon
}

// Chat Bot Types
export interface Message {
  id: string
  type: 'user' | 'bot'
  content: string
  timestamp: Date
  suggestions?: string[]
}

export interface QuickAction {
  id: string
  icon: LucideIcon
  label: string
  description: string
  action: string
}

// User Types
export interface User {
  id: string
  name: string
  email: string
  status: 'active' | 'suspended' | 'pending'
  balance: number
  verified: boolean
  lastLogin: string
  country: string
  accountType: 'personal' | 'business' | 'institutional'
}

// Transaction Types
export interface Transaction {
  id: string
  user: string
  type: 'deposit' | 'withdrawal' | 'trade' | 'transfer'
  amount: number
  currency: string
  status: 'completed' | 'pending' | 'failed'
  timestamp: string
  fees: number
}

// Event Handler Types
export type TabClickHandler<T = string> = (tabId: T) => void
export type SearchHandler = (query: string) => void
export type FilterHandler = (filters: Record<string, unknown>) => void
