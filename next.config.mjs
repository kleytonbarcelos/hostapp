/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Define o middleware para todas as rotas
  middleware: ["/*"],
};

export default nextConfig;
