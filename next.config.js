/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true, // Active l'optimisation CSS (expérimental)
  },
  images: {
    domains: ['backgi.eces-code.com'], // Domaines autorisés pour les images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920], // Tailles pour le responsive
    formats: ['image/webp'], // Format optimisé par défaut
  },
  async headers() {
    return [
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Link',
            value: 'preload; as=style', // Précharge les fichiers CSS
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Cache long durée
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig; // <-- Une seule exportation