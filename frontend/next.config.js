/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ["images.unsplash.com"],
   
  },
}

module.exports = nextConfig
