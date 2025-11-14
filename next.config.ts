import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Turbopack is enabled by default in Next.js 16
  // No additional configuration needed

  // Enable experimental features
  experimental: {
    // Enable React Compiler for automatic memoization
    reactCompiler: true,

    // Enable Partial Pre-Rendering (PPR)
    ppr: true,

    // Enable typed routes for type-safe navigation
    typedRoutes: true,

    // Enable typed environment variables
    typedEnv: true,
  },

  // Enable Cache Components (opt-in)
  cacheComponents: true,

  // TypeScript configuration
  typescript: {
    // Type check during builds
    ignoreBuildErrors: false,
  },

  // Enable strict mode for better development experience
  reactStrictMode: true,

  // Turbopack configuration (optional customization)
  turbopack: {
    // Add any custom turbopack configuration here if needed
    resolveAlias: {
      // Example: '@': './src'
    },
  },
};

export default nextConfig;
