/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["api.dicebear.com", "placeholder.svg"],
    unoptimized: true,
  },
}

module.exports = nextConfig
