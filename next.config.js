/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  allowedDevOrigins: [
    'coinbank-revamp.preview.emergentagent.com',
    'https://crypto-dash-6.preview.emergentagent.com',
    // Production domains
    'coinbank-revamp.emergent.host',
    'https://coinbank-revamp.emergent.host'
  ],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
