import Link from 'next/link';

interface PageProps {
  params: Promise<Record<string, string>>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

const HomePage = async ({ searchParams }: PageProps) => {
  // In Next.js 16, searchParams must be awaited
  const resolvedSearchParams = await searchParams;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      <div className="max-w-5xl w-full space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Welcome to Dermosite
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A modern Next.js 16 application built with React 19.2, Turbopack, and Tailwind CSS v4.1
          </p>
        </section>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <FeatureCard
            title="Next.js 16"
            description="Powered by Turbopack for 2-5x faster builds and 10x faster Fast Refresh"
            icon="🚀"
          />
          <FeatureCard
            title="React 19.2"
            description="Latest React features including View Transitions and Activity component"
            icon="⚛️"
          />
          <FeatureCard
            title="TypeScript"
            description="Strict type checking with route-aware type helpers and typed routes"
            icon="📘"
          />
          <FeatureCard
            title="Tailwind CSS v4.1"
            description="PostCSS-based configuration with utility-first styling"
            icon="🎨"
          />
          <FeatureCard
            title="App Router"
            description="Modern file-based routing with layouts and server components"
            icon="🗺️"
          />
          <FeatureCard
            title="PPR & Caching"
            description="Partial Pre-Rendering and Cache Components for optimal performance"
            icon="⚡"
          />
        </section>

        {/* Tech Stack Section */}
        <section className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border border-blue-200 dark:border-blue-800">
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              Next.js 16 with Turbopack (default bundler)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              React 19.2 with React Compiler enabled
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              Node.js v25.2.0 runtime
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              TypeScript with strict mode and typed routes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              Tailwind CSS v4.1 with PostCSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 dark:text-green-400">✓</span>
              Partial Pre-Rendering (PPR) enabled
            </li>
          </ul>
        </section>

        {/* CTA Section */}
        <section className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            tabIndex={0}
            aria-label="Learn more about this project"
          >
            Learn More
          </Link>
          <Link
            href="/demo"
            className="inline-block px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            tabIndex={0}
            aria-label="View component demos"
          >
            View Demos
          </Link>
        </section>
      </div>
    </main>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default HomePage;
