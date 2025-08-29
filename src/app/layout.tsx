import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CoinBank - Sophisticated Crypto Banking Platform',
  description: 'Advanced digital banking for the modern world. Secure cryptocurrency custody, trading, and financial services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}