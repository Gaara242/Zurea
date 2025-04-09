/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // Active l'optimisation CSS
  },
  async headers() {
    return [
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Link',
            value: 'preload; as=style', // Spécifie le type de préchargement
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig