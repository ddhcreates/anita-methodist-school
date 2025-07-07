/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['anitamethodist.com'],
    unoptimized: false,
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig