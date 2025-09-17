/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'FUAS Registry',
    description: 'FUAS Repository for KASM Workspaces.',
    icon: 'https://Funkyfarz.github.io/kasm-registry/1.1/fuaslogo.svg',
    listUrl: 'https://Funkyfarz.github.io/kasm-registry/',
    contactUrl: 'https://Funkyfarz.github.io/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
