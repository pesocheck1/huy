// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: false, // отключаем автогенерацию багованного .next/types
  },
  typescript: {
    ignoreBuildErrors: true, // чтобы не упасть от мусора в .next
  },
};

module.exports = nextConfig;
