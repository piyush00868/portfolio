import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    // The old static site exposed /resume and /contact.html; keep those links alive.
    return [
      { source: '/resume', destination: '/resume.pdf', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/index.html', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
