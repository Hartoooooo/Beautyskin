/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: false,
  },
  // Optimize build performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  // Reduce build trace collection issues
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
  // Optimize build output
  swcMinify: true,
  compress: true,
}

module.exports = nextConfig
