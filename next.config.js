/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')
const nextConfig = {
  i18n,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['cdn.sportmonks.com', 'storage.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
