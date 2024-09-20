/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '/',
  },
  output: 'export',
  assetPrefix: isProd ? './' : '',
  basePath: isProd ? '/portfolio' : '', // production 환경에서만 basePath 적용
}

module.exports = nextConfig
