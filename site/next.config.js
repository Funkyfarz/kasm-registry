/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'FUAS Registry',
    description: 'FUAS Repository for KASM Workspaces.',
    icon: 'https://github.com/Funkyfarz/kasm-registry/blob/1.1/site/public/fuaslogo.svg',
    listUrl: 'https://github.com/Funkyfarz/kasm-registry',
    contactUrl: 'https://github.com/Funkyfarz/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
