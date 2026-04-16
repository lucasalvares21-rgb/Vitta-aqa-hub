/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/fit/:path*',
        destination: 'https://lp-fit.vercel.app/:path*',
        permanent: false,
      },
      {
        source: '/simulador/:path*',
        destination: 'https://simula-vitta-aqa.vercel.app/:path*',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
