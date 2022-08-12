/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['imgs.search.brave.com']
  }
}

module.exports = nextConfig
