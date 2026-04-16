/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/fit',
        destination: 'https://lp-fit.vercel.app/',
      },
      {
        source: '/fit/:path*',
        destination: 'https://lp-fit.vercel.app/:path*',
      },
      {
        source: '/simulador',
        destination: 'https://simula-vitta-aqa.vercel.app/',
      },
      {
        source: '/simulador/:path*',
        destination: 'https://simula-vitta-aqa.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig
