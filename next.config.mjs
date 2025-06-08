/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  generateBuildId: () => 'build',
  images: {
    domains: ["assets.co.dev", "images.unsplash.com"],
  },
  experimental: {
    outputFileTracingExcludes: {
      '*': ['**\\.next\\**']
    }
  },
  webpack: (config, context) => {
    config.optimization.minimize = process.env.NEXT_PUBLIC_CO_DEV_ENV !== "preview";
    return config;
  }
};

export default nextConfig;
